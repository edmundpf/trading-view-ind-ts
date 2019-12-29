"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("./values");
/**
 * Recommendation
 */
function recommendation(val) {
    return (val >= 0.5 ? 'Strong Buy'
        : val > 0 && val < 0.5 ? 'Buy'
            : val == 0 ? 'Neutral'
                : val > -0.5 && val < 0 ? 'Sell'
                    : val >= -1 && val <= -0.5 ? 'Strong Sell'
                        : 'Neutral');
}
exports.recommendation = recommendation;
/**
 * Simple Signal
 */
function simpleSignal(val, comp) {
    return comp;
}
exports.simpleSignal = simpleSignal;
/**
 * Moving Average
 */
function movingAverage(val, comp) {
    return (val < comp ? values_1.signal.BUY
        : val > comp ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.movingAverage = movingAverage;
/**
 * RSI
 */
function RSI(val, comp) {
    return (val < 30 && comp > val ? values_1.signal.BUY
        : val > 70 && comp < val ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.RSI = RSI;
/**
 * Stochastic
 */
function stochastic(val, comp1, comp2, comp3) {
    return (val < 20 && comp1 < 20 && val > comp1 && comp2 < comp3 ? values_1.signal.BUY
        : val > 80 && comp1 > 80 && val < comp1 && comp2 > comp3 ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.stochastic = stochastic;
/**
 * Commodity Channel Index
 */
function commodityChannelIndex(val, comp) {
    return (val < -100 && val > comp ? values_1.signal.BUY
        : val > 100 && val < comp ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.commodityChannelIndex = commodityChannelIndex;
/**
 * Average Directional Index
 */
function averageDirectionalIndex(val, comp1, comp2, comp3, comp4) {
    return (val > 20 && comp1 > comp2 && comp3 < comp4 ? values_1.signal.BUY
        : val > 20 && comp2 < comp2 && comp3 > comp4 ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.averageDirectionalIndex = averageDirectionalIndex;
/**
 * Awesome Oscillator
 */
function awesomeOscillator(val, comp) {
    return (val > 0 && comp < 0 || val > 0 && comp > 0 && val > comp ? values_1.signal.BUY
        : val < 0 && comp > 0 || val < 0 && comp < 0 && val < comp ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.awesomeOscillator = awesomeOscillator;
/**
 * Momentum
 */
function momentum(val, comp) {
    return (val < comp ? values_1.signal.BUY
        : val > comp ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.momentum = momentum;
/**
 * MACD
 */
function MACD(val, comp) {
    return (val > comp ? values_1.signal.BUY
        : val < comp ? values_1.signal.SELL
            : values_1.signal.NEUTRAL);
}
exports.MACD = MACD;
//# sourceMappingURL=indCompute.js.map