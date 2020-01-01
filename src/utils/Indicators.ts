import axios from 'axios'
import { scanColumns } from './scanValues'
import { recommendation } from './indCompute'
import { intervals, endpoints, currentUserAgent } from './values'
var scanMetrics = require('./scanValues').scanMetrics
var scanRequestArgs = require('./values').scanRequestArgs
const session = axios.create()

/**
 * Indicators Class
 */

export default class Indicators {

	log: boolean
	constructor(log?: boolean) {
		this.log = log == null ? true : log
	}

	/**
	 * Initialize Session
	 */

	async initSession() {
		session.defaults.headers.common = {
			...session.defaults.headers.common,
			'User-Agent': currentUserAgent,
			'Content-Type': 'application/json',
		}
		try {
			const res = await session.head(endpoints.home)
			this.print('Session initialized')
			return true
		}
		catch (error) {
			return false
		}
	}

	/**
	 * Get Data
	 */

	async getData(ticker: string, interval: string) {
		const data = await this.getRawData(ticker, interval)
		const indData = this.parseData(data)
		this.logData(indData)
		return indData
	}

	/**
	 * Print Output
	 */

	private print(text: string) {
		if (this.log) {
			console.log(text)
		}
	}

	/**
	 * Log Data
	 */

	private logData(data: any) {
		if (this.log) {
			const signalTypes: any = {
				'-1': 'Sell',
				'0': 'Neutral',
				'1': 'Buy',
			}
			for (let ind in data) {
				let val = data[ind]
				if (val.value != val.rec) {
					console.log(`${val.title}: ${val.value} | ${signalTypes[String(val.rec)]}`)
				}
				else {
					console.log(`${val.title}: ${val.value} | ${recommendation(val.rec)}`)
				}
			}
		}
	}

	/**
	 * Get Raw Data
	 */

	private async getRawData(ticker: string, interval: string) {
		if (!Object.keys(intervals).includes(interval)) {
			throw new Error('Invalid interval')
		}
		var scanArgs: Array<string> = []
		for (let column of scanColumns) {
			scanArgs.push(`${column}|${intervals[interval]}`)
		}
		scanRequestArgs.symbols.tickers[0] = `AMEX:${ticker.toUpperCase()}`
		scanRequestArgs.columns = scanArgs
		try {
			const res = await axios.post(
				endpoints.scan,
				scanRequestArgs,
			)
			this.print(`Fetched ${interval} data for $${ticker}`)
			return res.data.data[0].d
		}
		catch (error) {
			this.print(error)
			return false
		}
	}

	/**
	 * Parse Data
	 */

	private parseData(data: Array<number>) {
		var indVals: any = {}
		const indData: any = {}
		for (let index in data) {
			let value = data[index]
			indVals[scanColumns[index]] = value
		}
		for (let ind in indVals) {
			let value = indVals[ind]
			let curInd = scanMetrics[ind]
			let isArray = Array.isArray(curInd)
			if (curInd === Object(curInd) && !isArray) {
				curInd.values = [value]
			}
			else if (typeof(curInd) == 'string') {
				let ascInd = scanMetrics[curInd]
				ascInd.values.push(value)
			}
			else if (isArray) {
				for (let asc of curInd) {
					let ascInd = scanMetrics[asc]
					ascInd.values.push(value)
				}
			}
		}
		for (let ind in scanMetrics) {
			let curInd = scanMetrics[ind]
			let isArray = Array.isArray(curInd)
			if (curInd === Object(curInd) && !isArray) {
				if (curInd.method == null) {
					indData[ind] = {
						title: curInd.title,
						value: curInd.values[0],
						rec: curInd.values[0],
					}
				}
				else {
					indData[ind] = {
						title: curInd.title,
						value: curInd.values[0],
						rec: curInd.method(...curInd.values)
					}
				}
			}
		}
		return indData
	}

}