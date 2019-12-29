/**
 * Current User Agent
 */

const currentUserAgent: string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'

/**
 * Endpoints
 */

const endpoints: any = {
	home: 'https://www.tradingview.com',
	scan: 'https://scanner.tradingview.com/america/scan',
}

/**
 * Signal Types
 */

const signal: any = {
	'BUY': 1,
	'NEUTRAL': 0,
	'SELL': -1,
}

/**
 * Scan Request Args
 */

const scanRequestArgs: any = {
	symbols: {
		tickers: [],
		query: {
			types: [],
		},
	},
	columns: [],
}

/**
 * Intervals
 */

const intervals: any = {
	'1min': '1',
	'5min': '5',
	'15min': '15',
	'1h': '60',
	'4h': '240',
	'day': '',
	'week': '1W',
	'month': '1M',
}

// Exports

export {
	currentUserAgent,
	scanRequestArgs,
	endpoints,
	intervals,
	signal,
}