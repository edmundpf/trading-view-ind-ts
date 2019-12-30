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
await ind.getData('SPY', '15min')
```

## Documentation
* [Package Docs](docs/globals.md)
