[trading-view-ind-ts - v1.0.3](README.md) › [Globals](globals.md)

# trading-view-ind-ts - v1.0.3

# trading-view-ind-ts
[![Build Status](https://travis-ci.org/edmundpf/trading-view-ind-ts.svg?branch=master)](https://travis-ci.org/edmundpf/trading-view-ind-ts)
[![npm version](https://badge.fury.io/js/trading-view-ind-ts.svg)](https://badge.fury.io/js/trading-view-ind-ts)
> Trading View Technical Indicator Recommendations

## Install
``` bash
$ npm i trading-view-ind-ts
```

## Usage
``` javascript
const Indicators = require('trading-view-ind-ts')
const ind = new Indicators()
await ind.initSession()
const indData = await ind.getData({
	ticker: 'SPY',
	exchange: 'AMEX',
	interval: '15min'
})
```

## Documentation
* [Package Docs](docs/globals.md)
