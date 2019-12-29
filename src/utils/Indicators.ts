import axios from 'axios'
const intervals = require('values').intervals
import { currentUserAgent, endpoints } from './values'
import { scanColumns, scanMetrics } from './scanValues'
const session = axios.create()

/**
 * Indicators Class
 */

export default class Indicators {

	constructor() {
		this.initSession()
	}

	/**
	 * Initialize Session
	 */

	async initSession() {
		session.defaults.headers.common['User-Agent'] = currentUserAgent
		await session.head(endpoints.home)
	}

	/**
	 * Get Results
	 */

	getResults(ticker: string, interval: string) {
		if (!intervals.includes(interval)) {
			throw new Error('Invalid interval')
		}
		// await session.get()
	}


}