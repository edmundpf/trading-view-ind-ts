import { signal } from './values'

/**
 * Recommendation
 */

function recommendation(val: number) {
	return (
		val >= 0.5 ? 'Strong Buy'
		: val > 0 && val < 0.5 ? 'Buy'
		: val == 0 ? 'Neutral'
		: val > -0.5 && val < 0 ? 'Sell'
		: val <= -0.5 ? 'Strong Sell'
		: 'Neutral'
	)
}

/**
 * Simple Signal
 */

function simpleSignal(val: number, comp: number) {
	return comp
}

/**
 * Moving Average
 */

function movingAverage(val: number, comp: number) {
	return (
		val < comp ? signal.BUY
		: val > comp ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * RSI
 */

function RSI(val: number, comp: number) {
	return (
		val < 30 && comp > val ? signal.BUY
		: val > 70 && comp < val ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * Stochastic
 */

function stochastic(val: number, comp1: number, comp2: number, comp3: number) {
	return (
		val < 20 && comp1 < 20 && val > comp1 && comp2 < comp3 ? signal.BUY
		: val > 80 && comp1 > 80 && val < comp1 && comp2 > comp3 ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * Commodity Channel Index
 */

function commodityChannelIndex(val: number, comp: number) {
	return (
		val < -100 && val > comp ? signal.BUY
		: val > 100 && val < comp ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * Average Directional Index
 */

function averageDirectionalIndex(val: number, comp1: number, comp2: number, comp3: number, comp4: number) {
	return (
		val > 20 && comp1 > comp2 && comp3 < comp4 ? signal.BUY
		: val > 20 && comp2 < comp2 && comp3 > comp4 ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * Awesome Oscillator
 */

function awesomeOscillator(val: number, comp: number) {
	return (
		val > 0 && comp < 0 || val > 0 && comp > 0 && val > comp ? signal.BUY
		: val < 0 && comp > 0 || val < 0 && comp < 0 && val < comp ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * Momentum
 */

function momentum(val: number, comp: number) {
	return (
		val < comp ? signal.BUY
		: val > comp ? signal.SELL
		: signal.NEUTRAL
	)
}

/**
 * MACD
 */

function MACD(val:number, comp: number) {
	return (
		val > comp ? signal.BUY
		: val < comp ? signal.SELL
		: signal.NEUTRAL
	)
}

// Exports

export {
	recommendation,
	simpleSignal,
	movingAverage,
	RSI,
	stochastic,
	commodityChannelIndex,
	averageDirectionalIndex,
	awesomeOscillator,
	momentum,
	MACD,
}