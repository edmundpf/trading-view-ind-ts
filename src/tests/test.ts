import Indicators from '../'
import chai from 'chai'
const should = chai.should()
const assert = chai.assert

/**
 * Indicators Class
 */

describe('Indicators', function() {
	var ind: any = null
	before(async function() {
		this.timeout(15000)
		ind = new Indicators()
		await ind.initSession()
		await ind.getData('SPY', '15min')
  })
	it('Is function', function() {
		Indicators.should.be.a('function')
	})
	it('Returns recommendations', async function() {
		assert.equal(ind.data.RSI != null, true)
	})
})