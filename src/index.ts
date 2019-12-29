import Indicators from './utils/Indicators'

/**
 * Main Function
 */

async function main() {
	const ind = new Indicators()
	await ind.initSession()
	await ind.getData('SPY', '15min')
}

// Run

main()