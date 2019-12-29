"use strict";
/**
 * Scan Columns
 */
Object.defineProperty(exports, "__esModule", { value: true });
const scanColumns = [
    'Recommend.Other',
    'Recommend.All',
    'Recommend.MA',
    'RSI',
    'RSI[1]',
    'Stoch.K',
    'Stoch.D',
    'Stoch.K[1]',
    'Stoch.D[1]',
    'CCI20',
    'CCI20[1]',
    'ADX',
    'ADX DI',
    'ADX-DI',
    'ADX DI[1]',
    'ADX-DI[1]',
    'AO',
    'AO[1]',
    'Mom',
    'Mom[1]',
    'MACD.macd',
    'MACD.signal',
    'Rec.Stoch.RSI',
    'Stoch.RSI.K',
    'W.R',
    'Rec.WR',
    'BBPower',
    'Rec.BBPower',
    'UO',
    'Rec.UO',
    'close',
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
    'Ichimoku.BLine',
    'Rec.Ichimoku',
    'VWMA',
    'Rec.VWMA',
    'HullMA9',
    'Rec.HullMA9',
];
exports.scanColumns = scanColumns;
/**
 * Scan Metrics
 */
const scanMetrics = [
    {
        name: 'Recommend.Other',
        title: 'Oscillators',
    },
    {
        name: 'Recommend.All',
        title: 'Summary',
    },
    {
        name: 'Recommend.MA',
        title: 'Moving Averages',
    },
    {
        name: 'RSI',
        title: 'Relative Strength Index (14)',
    },
    {
        name: 'Stoch.K',
        title: 'Stochastic %K (14, 3, 3)',
        alts: [
            'Stoch.D',
            'Stoch.K[1]',
            'Stoch.D[1]',
        ],
    },
    {
        name: 'CCI20',
        title: 'Commodity Channel Index (20)',
        alts: [
            'CCI20[1]',
        ],
    },
    {
        name: 'ADX',
        title: 'Average Directional Index (14)',
        alts: [
            'ADX DI',
            'ADX-DI',
            'ADX DI[1]',
            'ADX-DI[1]',
        ],
    },
    {
        name: 'AO',
        title: 'Awesome Oscillator',
        alts: [
            'AO[1]'
        ],
    },
    {
        name: 'Mom',
        title: 'Momentum (10)',
        alts: [
            'Mom[1]'
        ],
    },
    {
        name: 'MACD.macd',
        title: 'MACD Level (12, 26)',
        alts: [
            'MACD.signal'
        ],
    },
    {
        name: 'Stoch.RSI.K',
        title: 'Stochastic RSI Fast (3, 3, 14, 14)',
        alts: [
            'Rec.Stoch.RSI'
        ],
    },
    {
        name: 'W.R',
        title: 'Williams Percent Range (14)',
        alts: [
            'Rec.WR'
        ],
    },
    {
        name: 'BBPower',
        title: 'Bull Bear Power',
        alts: [
            'Rec.BBPower'
        ],
    },
    {
        name: 'UO',
        title: 'Ultimate Oscillator (7, 14, 28)',
        alts: [
            'Rec.UO'
        ],
    },
    {
        name: 'EMA5',
        title: 'Exponential Moving Average (5)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA5',
        title: 'Simple Moving Average (5)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA10',
        title: 'Exponential Moving Average (10)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA10',
        title: 'Simple Moving Average (10)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA20',
        title: 'Exponential Moving Average (20)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA20',
        title: 'Simple Moving Average (20)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA30',
        title: 'Exponential Moving Average (30)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA30',
        title: 'Simple Moving Average (30)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA50',
        title: 'Exponential Moving Average (50)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA50',
        title: 'Simple Moving Average (50)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA100',
        title: 'Exponential Moving Average (100)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA100',
        title: 'Simple Moving Average (100)',
        alts: [
            'close'
        ],
    },
    {
        name: 'EMA200',
        title: 'Exponential Moving Average (200)',
        alts: [
            'close'
        ],
    },
    {
        name: 'SMA200',
        title: 'Simple Moving Average (200)',
        alts: [
            'close'
        ],
    },
    {
        name: 'Ichimoku.BLine',
        title: 'Ichimoku Cloud Base Line (9, 26, 52, 26)',
        alts: [
            'Rec.Ichimoku'
        ],
    },
    {
        name: 'VWMA',
        title: 'Volume Weighted Moving Average (20)',
        alts: [
            'Rec.VWMA'
        ],
    },
    {
        name: 'HullMA9',
        title: 'Hull Moving Average (9)',
        alts: [
            'Rec.HullMA9'
        ],
    },
];
exports.scanMetrics = scanMetrics;
//# sourceMappingURL=scanValues.js.map