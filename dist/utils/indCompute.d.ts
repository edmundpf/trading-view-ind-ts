/**
 * Recommendation
 */
declare function recommendation(val: number): "Strong Buy" | "Buy" | "Neutral" | "Sell" | "Strong Sell";
/**
 * Simple Signal
 */
declare function simpleSignal(val: number, comp: number): number;
/**
 * Moving Average
 */
declare function movingAverage(val: number, comp: number): any;
/**
 * RSI
 */
declare function RSI(val: number, comp: number): any;
/**
 * Stochastic
 */
declare function stochastic(val: number, comp1: number, comp2: number, comp3: number): any;
/**
 * Commodity Channel Index
 */
declare function commodityChannelIndex(val: number, comp: number): any;
/**
 * Average Directional Index
 */
declare function averageDirectionalIndex(val: number, comp1: number, comp2: number, comp3: number, comp4: number): any;
/**
 * Awesome Oscillator
 */
declare function awesomeOscillator(val: number, comp: number): any;
/**
 * Momentum
 */
declare function momentum(val: number, comp: number): any;
/**
 * MACD
 */
declare function MACD(val: number, comp: number): any;
export { recommendation, simpleSignal, movingAverage, RSI, stochastic, commodityChannelIndex, averageDirectionalIndex, awesomeOscillator, momentum, MACD, };
