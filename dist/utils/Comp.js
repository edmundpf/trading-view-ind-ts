"use strict";
/**
 * Signal Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
const signal = {
    'BUY': 1,
    'NEUTRAL': 0,
    'SELL': -1,
};
/**
 * Comp Class
 */
class Comp {
    /**
     * Simple Signal
     */
    simpleSignal(val, comp) {
        return comp;
    }
    /**
     * Moving Average
     */
    movingAverage(val, comp) {
        return (signal.BUY ? val < comp
            : signal.SELL ? val > comp
                : signal.NEUTRAL);
    }
    /**
     * RSI
     */
    RSI(val, comp) {
        return (signal.BUY ? val < 30 && comp > val
            : signal.SELL ? val > 70 && comp < val
                : signal.NEUTRAL);
    }
    /**
     * Stochastic
     */
    stochastic(val, comp1, comp2, comp3) {
        return (signal.BUY ? val < 20 && comp1 < 20 && val > comp1 && comp2 < comp3
            : signal.SELL ? val > 80 && comp1 > 80 && val < comp1 && comp2 > comp3
                : signal.NEUTRAL);
    }
    /**
     * Commodity Channel Index
     */
    commodityChannelIndex(val, comp) {
        return (signal.BUY ? val < -100 && val > comp
            : signal.SELL ? val > 100 && val < comp
                : signal.NEUTRAL);
    }
    /**
     * Average Directional Index
     */
    averageDirectionalIndex(val, comp1, comp2, comp3, comp4) {
        return (signal.BUY ? val > 20 && comp1 > comp2 && comp3 < comp4
            : signal.SELL ? val > 20 && comp2 < comp2 && comp3 > comp4
                : signal.NEUTRAL);
    }
    /**
     * Awesome Oscillator
     */
    awesomeOscillator(val, comp) {
        return (signal.BUY ? val > 0 && comp < 0 || val > 0 && comp > 0 && val > comp
            : signal.SELL ? val < 0 && comp > 0 || val < 0 && comp < 0 && val < comp
                : signal.NEUTRAL);
    }
    /**
     * Momentum
     */
    momentum(val, comp) {
        return (signal.BUY ? val < comp
            : signal.SELL ? val > comp
                : signal.NEUTRAL);
    }
    /**
     * MACD
     */
    MACD(val, comp) {
        return (signal.BUY ? val > comp
            : signal.SELL ? val < comp
                : signal.NEUTRAL);
    }
}
exports.default = Comp;
//# sourceMappingURL=Comp.js.map