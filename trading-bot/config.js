require('dotenv').config();

const config = {
  // ── Binance API ────────────────────────────────────────────────────────────
  api: {
    key:    process.env.BINANCE_API_KEY    || '',
    secret: process.env.BINANCE_API_SECRET || '',
    // Use testnet for safe testing: https://testnet.binance.vision
    baseUrl: process.env.USE_TESTNET === 'true'
      ? 'https://testnet.binance.vision'
      : 'https://api.binance.com',
  },

  // ── Trading Pair & Capital ─────────────────────────────────────────────────
  trading: {
    symbol:        process.env.SYMBOL        || 'BTCUSDT', // pair à trader
    quoteAsset:    process.env.QUOTE_ASSET   || 'USDT',    // monnaie de base
    tradeAmountPct: parseFloat(process.env.TRADE_AMOUNT_PCT || '10'), // % du capital par trade
    maxOpenTrades:  parseInt(process.env.MAX_OPEN_TRADES   || '1'),   // trades simultanés max
  },

  // ── Risk Management ────────────────────────────────────────────────────────
  risk: {
    stopLossPct:   parseFloat(process.env.STOP_LOSS_PCT   || '2'),    // -2% stop loss
    takeProfitPct: parseFloat(process.env.TAKE_PROFIT_PCT || '4'),    // +4% take profit
  },

  // ── RSI Strategy ──────────────────────────────────────────────────────────
  rsi: {
    period:      parseInt(process.env.RSI_PERIOD      || '14'),
    oversold:    parseFloat(process.env.RSI_OVERSOLD  || '30'),  // signal achat
    overbought:  parseFloat(process.env.RSI_OVERBOUGHT || '70'), // signal vente
  },

  // ── EMA Strategy ─────────────────────────────────────────────────────────
  ema: {
    fast:   parseInt(process.env.EMA_FAST   || '9'),
    slow:   parseInt(process.env.EMA_SLOW   || '21'),
  },

  // ── Candles ───────────────────────────────────────────────────────────────
  candles: {
    interval: process.env.CANDLE_INTERVAL || '15m', // 1m 5m 15m 1h 4h 1d
    limit:    parseInt(process.env.CANDLE_LIMIT || '100'),
  },

  // ── Bot Behaviour ─────────────────────────────────────────────────────────
  bot: {
    paperTrading: process.env.PAPER_TRADING === 'true' || !process.env.BINANCE_API_KEY,
    loopInterval: parseInt(process.env.LOOP_INTERVAL_MS || '60000'), // 60s entre chaque analyse
    logLevel:     process.env.LOG_LEVEL || 'info', // info | debug
  },
};

// Validation rapide
function validate() {
  if (!config.bot.paperTrading) {
    if (!config.api.key || !config.api.secret) {
      throw new Error('BINANCE_API_KEY et BINANCE_API_SECRET sont requis en mode live.');
    }
  }
  if (config.risk.stopLossPct <= 0 || config.risk.takeProfitPct <= 0) {
    throw new Error('Stop loss et take profit doivent être > 0.');
  }
  if (config.ema.fast >= config.ema.slow) {
    throw new Error('EMA_FAST doit être inférieure à EMA_SLOW.');
  }
}

validate();

module.exports = config;
