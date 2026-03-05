/**
 * Binance Trading Bot — Point d'entrée principal
 * Stratégie : RSI + EMA Crossover avec stop-loss / take-profit
 *
 * AVERTISSEMENT : Le trading de cryptomonnaies comporte des risques importants.
 * Utilisez ce bot avec précaution et commencez toujours en mode paper trading.
 */

const crypto = require('crypto');
const axios  = require('axios');
const config = require('./config');
const { analyze, checkExitConditions } = require('./strategy');

// ── Couleurs console ──────────────────────────────────────────────────────────
const c = {
  reset:  '\x1b[0m',
  green:  '\x1b[32m',
  red:    '\x1b[31m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
};

function log(level, msg) {
  const now  = new Date().toISOString();
  const icons = { INFO: `${c.cyan}ℹ${c.reset}`, WARN: `${c.yellow}⚠${c.reset}`, ERROR: `${c.red}✖${c.reset}`, TRADE: `${c.green}${c.bold}✔${c.reset}` };
  console.log(`${c.dim}[${now}]${c.reset} ${icons[level] || ''} ${msg}`);
}

// ── État interne ──────────────────────────────────────────────────────────────
const state = {
  position:   null,   // { entryPrice, quantity, side, orderId }
  paperBalance: {
    quote: parseFloat(process.env.PAPER_BALANCE || '1000'),  // USDT fictif
    base:  0,                                                  // BTC fictif
  },
  trades: [],  // historique
};

// ── Client Binance ────────────────────────────────────────────────────────────
function sign(params) {
  const qs = new URLSearchParams(params).toString();
  return crypto.createHmac('sha256', config.api.secret).update(qs).digest('hex');
}

async function request(method, path, params = {}, signed = false) {
  if (signed) {
    params.timestamp = Date.now();
    params.signature = sign(params);
  }
  const url = `${config.api.baseUrl}${path}`;
  const headers = { 'X-MBX-APIKEY': config.api.key };
  try {
    const resp = method === 'GET'
      ? await axios.get(url,  { params, headers })
      : await axios.post(url, null, { params: { ...params }, headers });
    return resp.data;
  } catch (err) {
    const msg = err.response?.data?.msg || err.message;
    throw new Error(`Binance API [${path}]: ${msg}`);
  }
}

// ── Fonctions API ─────────────────────────────────────────────────────────────
async function getKlines() {
  return request('GET', '/api/v3/klines', {
    symbol:   config.trading.symbol,
    interval: config.candles.interval,
    limit:    config.candles.limit,
  });
}

async function getPrice() {
  const data = await request('GET', '/api/v3/ticker/price', { symbol: config.trading.symbol });
  return parseFloat(data.price);
}

async function getAccountBalance() {
  const account = await request('GET', '/api/v3/account', {}, true);
  const balances = {};
  for (const b of account.balances) {
    balances[b.asset] = parseFloat(b.free);
  }
  return balances;
}

async function getSymbolInfo() {
  const info = await request('GET', '/api/v3/exchangeInfo', { symbol: config.trading.symbol });
  const sym  = info.symbols.find(s => s.symbol === config.trading.symbol);
  if (!sym) throw new Error(`Symbole ${config.trading.symbol} introuvable`);
  const lotFilter  = sym.filters.find(f => f.filterType === 'LOT_SIZE');
  const priceFilter = sym.filters.find(f => f.filterType === 'PRICE_FILTER');
  return {
    stepSize:  parseFloat(lotFilter?.stepSize  || '0.00001'),
    tickSize:  parseFloat(priceFilter?.tickSize || '0.01'),
    minQty:    parseFloat(lotFilter?.minQty    || '0.00001'),
  };
}

function roundStep(qty, stepSize) {
  const precision = Math.round(-Math.log10(stepSize));
  return parseFloat(qty.toFixed(precision));
}

async function placeOrder(side, quantity) {
  const params = {
    symbol:   config.trading.symbol,
    side,
    type:     'MARKET',
    quantity,
  };
  return request('POST', '/api/v3/order', params, true);
}

// ── Paper trading ─────────────────────────────────────────────────────────────
function paperBuy(price, quantity) {
  const cost = price * quantity;
  if (cost > state.paperBalance.quote) {
    throw new Error(`Fonds insuffisants en paper trading (${state.paperBalance.quote.toFixed(2)} USDT)`);
  }
  state.paperBalance.quote -= cost;
  state.paperBalance.base  += quantity;
  log('TRADE', `${c.green}[PAPER BUY]${c.reset}  ${quantity} ${config.trading.symbol} @ ${price} USDT — Balance: ${state.paperBalance.quote.toFixed(2)} USDT`);
}

function paperSell(price, quantity) {
  state.paperBalance.base  -= quantity;
  state.paperBalance.quote += price * quantity;
  log('TRADE', `${c.red}[PAPER SELL]${c.reset} ${quantity} ${config.trading.symbol} @ ${price} USDT — Balance: ${state.paperBalance.quote.toFixed(2)} USDT`);
}

// ── Logique principale ────────────────────────────────────────────────────────
async function tick() {
  try {
    const [candles, currentPrice] = await Promise.all([getKlines(), getPrice()]);
    const analysis = analyze(candles);

    if (config.bot.logLevel === 'debug') {
      log('INFO', `RSI: ${analysis.rsiValue?.toFixed(2)} | EMA${config.ema.fast}: ${analysis.emaFast?.toFixed(2)} | EMA${config.ema.slow}: ${analysis.emaSlow?.toFixed(2)} | Prix: ${currentPrice}`);
    }

    // ── Vérifier exit conditions si position ouverte ───────────────────────
    if (state.position) {
      const exit = checkExitConditions(state.position.entryPrice, currentPrice);
      if (exit.triggered) {
        log('TRADE', `${exit.type === 'TAKE_PROFIT' ? c.green : c.red}[${exit.type}]${c.reset} ${exit.pct.toFixed(2)}% depuis entrée @ ${state.position.entryPrice}`);
        await executeSell(currentPrice, state.position.quantity, exit.type);
        return;
      }

      // Vérifier signal SELL de la stratégie
      if (analysis.signal === 'SELL') {
        log('TRADE', `Signal SELL: ${analysis.reason}`);
        await executeSell(currentPrice, state.position.quantity, 'SIGNAL');
        return;
      }

      const unrealized = ((currentPrice - state.position.entryPrice) / state.position.entryPrice * 100).toFixed(2);
      log('INFO', `Position ouverte @ ${state.position.entryPrice} | PnL latent: ${unrealized}% | ${analysis.reason}`);
      return;
    }

    // ── Pas de position — chercher signal ACHAT ────────────────────────────
    if (analysis.signal === 'BUY') {
      log('TRADE', `Signal BUY: ${analysis.reason}`);
      await executeBuy(currentPrice);
    } else {
      log('INFO', `Signal: ${analysis.signal} — ${analysis.reason}`);
    }

  } catch (err) {
    log('ERROR', err.message);
  }
}

async function executeBuy(price) {
  if (config.bot.paperTrading) {
    const capital   = state.paperBalance.quote * (config.trading.tradeAmountPct / 100);
    const quantity  = roundStep(capital / price, 0.00001);
    if (quantity <= 0) { log('WARN', 'Quantité trop faible pour acheter'); return; }
    paperBuy(price, quantity);
    state.position = { entryPrice: price, quantity, side: 'BUY', orderId: `PAPER-${Date.now()}` };
  } else {
    const balances  = await getAccountBalance();
    const capital   = balances[config.trading.quoteAsset] * (config.trading.tradeAmountPct / 100);
    const symInfo   = await getSymbolInfo();
    const quantity  = roundStep(capital / price, symInfo.stepSize);
    if (quantity < symInfo.minQty) { log('WARN', `Quantité ${quantity} sous le minimum ${symInfo.minQty}`); return; }
    const order     = await placeOrder('BUY', quantity);
    log('TRADE', `${c.green}[LIVE BUY]${c.reset} orderId: ${order.orderId} | qty: ${quantity} | prix: ${price}`);
    state.position  = { entryPrice: price, quantity, side: 'BUY', orderId: order.orderId };
  }
  state.trades.push({ type: 'BUY', price, time: new Date().toISOString() });
}

async function executeSell(price, quantity, reason) {
  if (config.bot.paperTrading) {
    paperSell(price, quantity);
  } else {
    const order = await placeOrder('SELL', quantity);
    log('TRADE', `${c.red}[LIVE SELL]${c.reset} orderId: ${order.orderId} | qty: ${quantity} | prix: ${price} | raison: ${reason}`);
  }
  const pnl = ((price - state.position.entryPrice) / state.position.entryPrice * 100).toFixed(2);
  log('INFO', `PnL réalisé: ${pnl}% | Raison: ${reason}`);
  state.trades.push({ type: 'SELL', price, pnl, reason, time: new Date().toISOString() });
  state.position = null;
}

// ── Démarrage ──────────────────────────────────────────────────────────────────
async function start() {
  console.log(`\n${c.bold}${c.cyan}╔══════════════════════════════════════════╗${c.reset}`);
  console.log(`${c.bold}${c.cyan}║       BINANCE TRADING BOT  v1.0          ║${c.reset}`);
  console.log(`${c.bold}${c.cyan}╚══════════════════════════════════════════╝${c.reset}\n`);

  log('INFO', `Mode: ${config.bot.paperTrading ? `${c.yellow}PAPER TRADING (simulation)${c.reset}` : `${c.red}${c.bold}LIVE TRADING${c.reset}`}`);
  log('INFO', `Paire: ${config.trading.symbol} | Intervalle: ${config.candles.interval}`);
  log('INFO', `RSI ${config.rsi.period} | EMA ${config.ema.fast}/${config.ema.slow}`);
  log('INFO', `Stop-loss: -${config.risk.stopLossPct}% | Take-profit: +${config.risk.takeProfitPct}%`);
  if (config.bot.paperTrading) {
    log('INFO', `Capital paper: ${state.paperBalance.quote} USDT`);
  }
  console.log('');

  // Premier tick immédiat
  await tick();

  // Boucle principale
  setInterval(tick, config.bot.loopInterval);
  log('INFO', `Boucle démarrée — analyse toutes les ${config.bot.loopInterval / 1000}s`);
}

// Gestion propre des signaux OS
process.on('SIGINT',  () => { printSummary(); process.exit(0); });
process.on('SIGTERM', () => { printSummary(); process.exit(0); });

function printSummary() {
  console.log(`\n${c.bold}── Résumé de session ──────────────────────────${c.reset}`);
  console.log(`Trades effectués: ${state.trades.length}`);
  if (config.bot.paperTrading) {
    console.log(`Balance finale: ${state.paperBalance.quote.toFixed(2)} USDT + ${state.paperBalance.base.toFixed(6)} base`);
  }
  const sells = state.trades.filter(t => t.type === 'SELL' && t.pnl !== undefined);
  if (sells.length) {
    const avgPnl = sells.reduce((a, t) => a + parseFloat(t.pnl), 0) / sells.length;
    console.log(`PnL moyen par trade: ${avgPnl.toFixed(2)}%`);
  }
  console.log('');
}

start().catch(err => {
  log('ERROR', `Erreur fatale: ${err.message}`);
  process.exit(1);
});
