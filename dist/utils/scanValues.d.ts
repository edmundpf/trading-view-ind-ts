import * as methods from './indCompute';
/**
 * Scan Columns
 */
declare const scanColumns: string[];
/**
 * Scan Metrics
 */
declare var scanMetrics: {
    'Recommend.Other': {
        title: string;
    };
    'Recommend.All': {
        title: string;
    };
    'Recommend.MA': {
        title: string;
    };
    'RSI': {
        title: string;
        method: typeof methods.RSI;
    };
    'RSI[1]': string;
    'Stoch.K': {
        title: string;
        method: typeof methods.stochastic;
    };
    'Stoch.D': string;
    'Stoch.K[1]': string;
    'Stoch.D[1]': string;
    'CCI20': {
        title: string;
        method: typeof methods.commodityChannelIndex;
    };
    'CCI20[1]': string;
    'ADX': {
        title: string;
        method: typeof methods.averageDirectionalIndex;
    };
    'ADX+DI': string;
    'ADX-DI': string;
    'ADX+DI[1]': string;
    'ADX-DI[1]': string;
    'AO': {
        title: string;
        method: typeof methods.awesomeOscillator;
    };
    'AO[1]': string;
    'Mom': {
        title: string;
        method: typeof methods.momentum;
    };
    'Mom[1]': string;
    'MACD.macd': {
        title: string;
        method: typeof methods.MACD;
    };
    'MACD.signal': string;
    'Stoch.RSI.K': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.Stoch.RSI': string;
    'W.R': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.WR': string;
    'BBPower': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.BBPower': string;
    'UO': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.UO': string;
    'EMA5': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA5': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA10': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA10': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA20': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA20': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA30': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA30': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA50': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA50': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA100': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA100': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'EMA200': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'SMA200': {
        title: string;
        method: typeof methods.movingAverage;
    };
    'close': string[];
    'Ichimoku.BLine': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.Ichimoku': string;
    'VWMA': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.VWMA': string;
    'HullMA9': {
        title: string;
        method: typeof methods.simpleSignal;
    };
    'Rec.HullMA9': string;
};
export { scanColumns, scanMetrics, };
