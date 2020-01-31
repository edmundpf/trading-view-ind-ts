import axios from 'axios'
import { scanColumns } from './scanValues'
import { recommendation } from './indCompute'
import { DataArgs } from './types'
import { intervals, endpoints, currentUserAgent } from './values'
var scanMetrics = require('./scanValues').scanMetrics
var scanRequestArgs = require('./values').scanRequestArgs
const session = axios.create()
const scanKeys = Object.keys(scanColumns)

/**
 * Indicators Class
 */

export default class Indicators {

	log: boolean
	constructor(log?: boolean) {
		this.log = log == null ? true : log
		this.initSession()
	}

	/**
	 * Initialize Session
	 */

	initSession() {
		session.defaults.headers.common = {
			...session.defaults.headers.common,
			'User-Agent': currentUserAgent,
			'Content-Type': 'application/json',
		}
		return true
	}

	/**
	 * Get Data
	 */

	async getData(args: DataArgs) {
		args = {
			exchange: 'NYSE',
			...args
		}
		const data = await this.getRawData(args)
		const indData = this.parseData(
			args.ticker,
			data
		)
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
	 * Title Case
	 */

	private titleCase(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1)
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
				if (val === Object(val)) {
					if (val.value != val.rec) {
						console.log(`${val.title}: ${val.value} | ${signalTypes[String(val.rec)]}`)
					}
					else {
						console.log(`${val.title}: ${val.value} | ${recommendation(val.rec)}`)
					}
				}
				else {
					console.log(`${this.titleCase(ind)}: ${val}`)
				}
			}
		}
	}

	/**
	 * Get Raw Data
	 */

	private async getRawData(args: DataArgs) {
		if (!Object.keys(intervals).includes(args.interval)) {
			throw new Error('Invalid interval')
		}
		var scanArgs: Array<string> = []
		var reqArgs: any = JSON.parse(JSON.stringify(scanRequestArgs))
		for (let column of scanKeys) {
			scanArgs.push(`${column}${args.interval != 'day' ? '|' : ''}${intervals[args.interval]}`)
		}
		reqArgs.symbols.tickers[0] = `${args.exchange?.toUpperCase()}:${args.ticker.toUpperCase()}`
		reqArgs.columns = scanArgs
		try {
			const res = await session.post(
				endpoints.scan,
				reqArgs,
			)
			this.print(`Fetched ${args.interval} data for $${args.ticker}`)
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

	private parseData(ticker:string, data: Array<number>) {
		var close: number = 0
		var indVals: any = {}
		const indData: any = {}
		for (let index in data) {
			let value = data[index]
			indVals[scanKeys[index]] = value
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
					if (ind == 'close') {
						close = value
					}
				}
			}
		}
		for (let ind in scanMetrics) {
			let curInd = scanMetrics[ind]
			let isArray = Array.isArray(curInd)
			if (curInd === Object(curInd) && !isArray) {
				let indKey = scanColumns[ind] == null ? ind : scanColumns[ind]
				if (curInd.method == null) {
					indData[indKey] = {
						title: curInd.title,
						value: curInd.values[0],
						rec: curInd.values[0],
					}
				}
				else {
					indData[indKey] = {
						title: curInd.title,
						value: curInd.values[0],
						rec: curInd.method(...curInd.values)
					}
				}
			}
		}
		indData.ticker = ticker
		indData.close = close
		return indData
	}

}