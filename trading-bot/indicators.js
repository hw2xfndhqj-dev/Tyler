/**
 * Indicateurs techniques — calculs purs (pas de dépendances externes)
 */

/**
 * EMA — Exponential Moving Average
 * @param {number[]} closes  Tableau de prix de clôture (du plus ancien au plus récent)
 * @param {number}   period
 * @returns {number[]}
 */
function ema(closes, period) {
  if (closes.length < period) return [];
  const k = 2 / (period + 1);
  const result = [];
  // Seed : première valeur = SMA des `period` premières valeurs
  const seed = closes.slice(0, period).reduce((a, b) => a + b, 0) / period;
  result.push(seed);
  for (let i = period; i < closes.length; i++) {
    result.push(closes[i] * k + result[result.length - 1] * (1 - k));
  }
  return result;
}

/**
 * RSI — Relative Strength Index
 * @param {number[]} closes
 * @param {number}   period
 * @returns {number[]}
 */
function rsi(closes, period) {
  if (closes.length < period + 1) return [];
  const result = [];
  let gains = 0;
  let losses = 0;

  for (let i = 1; i <= period; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff >= 0) gains  += diff;
    else           losses -= diff;
  }

  let avgGain = gains  / period;
  let avgLoss = losses / period;

  const rs0 = avgLoss === 0 ? 100 : avgGain / avgLoss;
  result.push(100 - 100 / (1 + rs0));

  for (let i = period + 1; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    const gain  = diff > 0 ?  diff : 0;
    const loss  = diff < 0 ? -diff : 0;
    avgGain = (avgGain * (period - 1) + gain)  / period;
    avgLoss = (avgLoss * (period - 1) + loss)  / period;
    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    result.push(100 - 100 / (1 + rs));
  }

  return result;
}

/**
 * SMA — Simple Moving Average (utilitaire)
 * @param {number[]} closes
 * @param {number}   period
 * @returns {number[]}
 */
function sma(closes, period) {
  const result = [];
  for (let i = period - 1; i < closes.length; i++) {
    const slice = closes.slice(i - period + 1, i + 1);
    result.push(slice.reduce((a, b) => a + b, 0) / period);
  }
  return result;
}

/**
 * MACD — Moving Average Convergence Divergence
 * @param {number[]} closes
 * @param {number}   fastPeriod  (défaut 12)
 * @param {number}   slowPeriod  (défaut 26)
 * @param {number}   signalPeriod (défaut 9)
 * @returns {{ macd: number[], signal: number[], histogram: number[] }}
 */
function macd(closes, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
  const emaFast   = ema(closes, fastPeriod);
  const emaSlow   = ema(closes, slowPeriod);
  const offset    = slowPeriod - fastPeriod; // aligner les deux séries
  const macdLine  = emaSlow.map((v, i) => emaFast[i + offset] - v);
  const signalLine = ema(macdLine, signalPeriod);
  const sigOffset  = macdLine.length - signalLine.length;
  const histogram  = signalLine.map((v, i) => macdLine[i + sigOffset] - v);
  return { macd: macdLine, signal: signalLine, histogram };
}

/**
 * ATR — Average True Range (mesure la volatilité)
 * @param {number[]} highs
 * @param {number[]} lows
 * @param {number[]} closes
 * @param {number}   period
 * @returns {number[]}
 */
function atr(highs, lows, closes, period = 14) {
  const trs = [];
  for (let i = 1; i < closes.length; i++) {
    const hl  = highs[i]  - lows[i];
    const hpc = Math.abs(highs[i]  - closes[i - 1]);
    const lpc = Math.abs(lows[i]   - closes[i - 1]);
    trs.push(Math.max(hl, hpc, lpc));
  }
  // Wilder smoothing
  const result = [];
  let atrVal = trs.slice(0, period).reduce((a, b) => a + b, 0) / period;
  result.push(atrVal);
  for (let i = period; i < trs.length; i++) {
    atrVal = (atrVal * (period - 1) + trs[i]) / period;
    result.push(atrVal);
  }
  return result;
}

module.exports = { ema, rsi, sma, macd, atr };
