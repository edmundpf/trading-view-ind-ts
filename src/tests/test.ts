import Indicators from '../'
const should = require('chai').should()
const assert = require('chai').assert

/**
 * Indicators Class
 */

describe('Indicators', function() {
	it('Is function', function() {
		Indicators.should.be.a('function')
	})
	it('Returns recommendations', async function() {
		const ind = new Indicators()
		await ind.initSession()
		await ind.getData('SPY', '15min')
		assert.equal(ind.data.RSI != null, true)
	})
})