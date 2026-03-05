/**
 * Stratégie de trading : RSI + EMA Crossover
 *
 * Signal ACHAT  : RSI < oversold  ET  EMA rapide croise EMA lente vers le haut
 * Signal VENTE  : RSI > overbought ET  EMA rapide croise EMA lente vers le bas
 *                 OU stop-loss / take-profit atteint
 */
const { ema, rsi } = require('./indicators');
const config       = require('./config');

/**
 * Analyse les bougies et retourne un signal
 * @param {Array} candles  Tableau de bougies Binance [openTime, open, high, low, close, volume, ...]
 * @returns {{ signal: 'BUY'|'SELL'|'HOLD', rsiValue: number, emaFast: number, emaSlow: number, reason: string }}
 */
function analyze(candles) {
  const closes = candles.map(c => parseFloat(c[4])); // index 4 = close price

  const rsiValues  = rsi(closes, config.rsi.period);
  const emaFastArr = ema(closes, config.ema.fast);
  const emaSlowArr = ema(closes, config.ema.slow);

  if (rsiValues.length < 2 || emaFastArr.length < 2 || emaSlowArr.length < 2) {
    return { signal: 'HOLD', reason: 'Pas assez de données' };
  }

  const currentRsi  = rsiValues.at(-1);
  const prevRsi     = rsiValues.at(-2);

  // Aligner les deux séries EMA (emaFast est plus longue)
  const offset       = emaFastArr.length - emaSlowArr.length;
  const emaFastCurr  = emaFastArr.at(-1);
  const emaFastPrev  = emaFastArr.at(-2);
  const emaSlowCurr  = emaSlowArr.at(-1);
  const emaSlowPrev  = emaSlowArr.at(-2);

  // Croisements EMA
  const bullishCross = emaFastPrev <= emaSlowPrev && emaFastCurr > emaSlowCurr;
  const bearishCross = emaFastPrev >= emaSlowPrev && emaFastCurr < emaSlowCurr;

  // Signal ACHAT
  if (currentRsi < config.rsi.oversold && bullishCross) {
    return {
      signal:   'BUY',
      rsiValue: currentRsi,
      emaFast:  emaFastCurr,
      emaSlow:  emaSlowCurr,
      reason:   `RSI survendu (${currentRsi.toFixed(2)}) + croisement EMA haussier`,
    };
  }

  // Signal ACHAT (RSI seul, moins fort)
  if (currentRsi < config.rsi.oversold && prevRsi >= config.rsi.oversold) {
    return {
      signal:   'BUY',
      rsiValue: currentRsi,
      emaFast:  emaFastCurr,
      emaSlow:  emaSlowCurr,
      reason:   `RSI vient de passer en zone de survente (${currentRsi.toFixed(2)})`,
    };
  }

  // Signal VENTE
  if (currentRsi > config.rsi.overbought && bearishCross) {
    return {
      signal:   'SELL',
      rsiValue: currentRsi,
      emaFast:  emaFastCurr,
      emaSlow:  emaSlowCurr,
      reason:   `RSI surachat (${currentRsi.toFixed(2)}) + croisement EMA baissier`,
    };
  }

  // Signal VENTE (RSI seul)
  if (currentRsi > config.rsi.overbought && prevRsi <= config.rsi.overbought) {
    return {
      signal:   'SELL',
      rsiValue: currentRsi,
      emaFast:  emaFastCurr,
      emaSlow:  emaSlowCurr,
      reason:   `RSI vient de passer en zone de surachat (${currentRsi.toFixed(2)})`,
    };
  }

  return {
    signal:   'HOLD',
    rsiValue: currentRsi,
    emaFast:  emaFastCurr,
    emaSlow:  emaSlowCurr,
    reason:   'Aucun signal — en attente',
  };
}

/**
 * Vérifie si le stop-loss ou le take-profit est atteint
 * @param {number} entryPrice
 * @param {number} currentPrice
 * @returns {{ triggered: boolean, type: 'STOP_LOSS'|'TAKE_PROFIT'|null, pct: number }}
 */
function checkExitConditions(entryPrice, currentPrice) {
  const pct = ((currentPrice - entryPrice) / entryPrice) * 100;

  if (pct <= -config.risk.stopLossPct) {
    return { triggered: true, type: 'STOP_LOSS', pct };
  }
  if (pct >= config.risk.takeProfitPct) {
    return { triggered: true, type: 'TAKE_PROFIT', pct };
  }
  return { triggered: false, type: null, pct };
}

module.exports = { analyze, checkExitConditions };
