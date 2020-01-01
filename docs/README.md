[trading-view-ind-ts - v1.0.2](README.md) › [Globals](globals.md)

# trading-view-ind-ts - v1.0.2

# trading-view-ind-ts
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
const indData = await ind.getData('SPY', '15min')
```

## Documentation
* [Package Docs](docs/globals.md)
