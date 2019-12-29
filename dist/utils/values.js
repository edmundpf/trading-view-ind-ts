"use strict";
/**
 * Current User Agent
 */
Object.defineProperty(exports, "__esModule", { value: true });
const currentUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36';
exports.currentUserAgent = currentUserAgent;
/**
 * Endpoints
 */
const endpoints = {
    home: 'https://www.tradingview.com',
    scan: 'https://scanner.tradingview.com/america/scan',
};
exports.endpoints = endpoints;
/**
 * Signal Types
 */
const signal = {
    'BUY': 1,
    'NEUTRAL': 0,
    'SELL': -1,
};
exports.signal = signal;
/**
 * Scan Request Args
 */
const scanRequestArgs = {
    symbols: {
        tickers: [],
        query: {
            types: [],
        },
    },
    columns: [],
};
exports.scanRequestArgs = scanRequestArgs;
/**
 * Intervals
 */
const intervals = {
    '1min': '1',
    '5min': '5',
    '15min': '15',
    '1h': '60',
    '4h': '240',
    'day': '',
    'week': '1W',
    'month': '1M',
};
exports.intervals = intervals;
//# sourceMappingURL=values.js.map