import * as methods from './indCompute'

/**
 * Scan Columns
 */

const scanColumns: any = {
	'Recommend.Other': 'recOscillators',
	'Recommend.All': 'recSummary',
	'Recommend.MA': 'recMovingAverages',
	'RSI': 'RSI',
	'RSI[1]': null,
	'Stoch.K': 'stochasticK',
	'Stoch.D': null,
	'Stoch.K[1]': null,
	'Stoch.D[1]': null,
	'CCI20': 'commodityChannel',
	'CCI20[1]': null,
	'ADX': 'avgDirectional',
	'ADX+DI': null,
	'ADX-DI': null,
	'ADX+DI[1]': null,
	'ADX-DI[1]': null,
	'AO': 'awesomeOscillator',
	'AO[1]': null,
	'Mom': 'momentum',
	'Mom[1]': null,
	'MACD.macd': 'MACD',
	'MACD.signal': null,
	'Stoch.RSI.K': 'stochasticRSI',
	'Rec.Stoch.RSI': null,
	'W.R': 'williamsPercent',
	'Rec.WR': null,
	'BBPower': 'bullBearPower',
	'Rec.BBPower': null,
	'UO': 'ultimateOscillator',
	'Rec.UO': null,
	'EMA5': null,
	'SMA5': null,
	'EMA10': null,
	'SMA10': null,
	'EMA20': null,
	'SMA20': null,
	'EMA30': null,
	'SMA30': null,
	'EMA50': null,
	'SMA50': null,
	'EMA100': null,
	'SMA100': null,
	'EMA200': null,
	'SMA200': null,
	'close': null,
	'Ichimoku.BLine': 'ichimokuB',
	'Rec.Ichimoku': null,
	'VWMA': null,
	'Rec.VWMA': null,
	'HullMA9': 'hullMA',
	'Rec.HullMA9': null,
}

/**
 * Scan Metrics
 */

var scanMetrics: any = {
	'Recommend.Other': {
		title: 'Oscillators',
	},
	'Recommend.All': {
		title: 'Summary',
	},
	'Recommend.MA': {
		title: 'Moving Averages',
	},
	'RSI': {
		title: 'Relative Strength Index (14)',
		method: methods.RSI,
	},
	'RSI[1]': 'RSI',
	'Stoch.K': {
		title: 'Stochastic %K (14, 3, 3)',
		method: methods.stochastic,
	},
	'Stoch.D': 'Stoch.K',
	'Stoch.K[1]': 'Stoch.K',
	'Stoch.D[1]': 'Stoch.K',
	'CCI20': {
		title: 'Commodity Channel Index (20)',
		method: methods.commodityChannelIndex,
	},
	'CCI20[1]': 'CCI20',
	'ADX': {
		title: 'Average Directional Index (14)',
		method: methods.averageDirectionalIndex,
	},
	'ADX+DI': 'ADX',
	'ADX-DI': 'ADX',
	'ADX+DI[1]': 'ADX',
	'ADX-DI[1]': 'ADX',
	'AO': {
		title: 'Awesome Oscillator',
		method: methods.awesomeOscillator,
	},
	'AO[1]': 'AO',
	'Mom': {
		title: 'Momentum (10)',
		method: methods.momentum,
	},
	'Mom[1]': 'Mom',
	'MACD.macd': {
		title: 'MACD Level (12, 26)',
		method: methods.MACD,
	},
	'MACD.signal': 'MACD.macd',
	'Stoch.RSI.K': {
		title: 'Stochastic RSI Fast (3, 3, 14, 14)',
		method: methods.simpleSignal,
	},
	'Rec.Stoch.RSI': 'Stoch.RSI.K',
	'W.R': {
		title: 'Williams Percent Range (14)',
		method: methods.simpleSignal,
	},
	'Rec.WR': 'W.R',
	'BBPower': {
		title: 'Bull Bear Power',
		method: methods.simpleSignal,
	},
	'Rec.BBPower': 'BBPower',
	'UO': {
		title: 'Ultimate Oscillator (7, 14, 28)',
		method: methods.simpleSignal,
	},
	'Rec.UO': 'UO',
	'EMA5': {
		title: 'Exponential Moving Average (5)',
		method: methods.movingAverage,
	},
	'SMA5':	{
		title: 'Simple Moving Average (5)',
		method: methods.movingAverage,
	},
	'EMA10': {
		title: 'Exponential Moving Average (10)',
		method: methods.movingAverage,
	},
	'SMA10': {
		title: 'Simple Moving Average (10)',
		method: methods.movingAverage,
	},
	'EMA20': {
		title: 'Exponential Moving Average (20)',
		method: methods.movingAverage,
	},
	'SMA20': {
		title: 'Simple Moving Average (20)',
		method: methods.movingAverage,
	},
	'EMA30': {
		title: 'Exponential Moving Average (30)',
		method: methods.movingAverage,
	},
	'SMA30': {
		title: 'Simple Moving Average (30)',
		method: methods.movingAverage,
	},
	'EMA50': {
		title: 'Exponential Moving Average (50)',
		method: methods.movingAverage,
	},
	'SMA50': {
		title: 'Simple Moving Average (50)',
		method: methods.movingAverage,
	},
	'EMA100': {
		title: 'Exponential Moving Average (100)',
		method: methods.movingAverage,
	},
	'SMA100': {
		title: 'Simple Moving Average (100)',
		method: methods.movingAverage,
	},
	'EMA200': {
		title: 'Exponential Moving Average (200)',
		method: methods.movingAverage,
	},
	'SMA200': {
		title: 'Simple Moving Average (200)',
		method: methods.movingAverage,
	},
	'close': [
		'EMA5',
		'SMA5',
		'EMA10',
		'SMA10',
		'EMA20',
		'SMA20',
		'EMA30',
		'SMA30',
		'EMA50',
		'SMA50',
		'EMA100',
		'SMA100',
		'EMA200',
		'SMA200',
	],
	'Ichimoku.BLine': {
		title: 'Ichimoku Cloud Base Line (9, 26, 52, 26)',
		method: methods.simpleSignal,
	},
	'Rec.Ichimoku': 'Ichimoku.BLine',
	'VWMA': {
		title: 'Volume Weighted Moving Average (20)',
		method: methods.simpleSignal,
	},
	'Rec.VWMA': 'VWMA',
	'HullMA9': {
		title: 'Hull Moving Average (9)',
		method: methods.simpleSignal,
	},
	'Rec.HullMA9': 'HullMA9',
}

// Exports

export {
	scanColumns,
	scanMetrics,
}