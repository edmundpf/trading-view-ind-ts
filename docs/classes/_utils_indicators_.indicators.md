[trading-view-ind-ts - v1.0.6](../README.md) › [Globals](../globals.md) › ["utils/Indicators"](../modules/_utils_indicators_.md) › [Indicators](_utils_indicators_.indicators.md)

# Class: Indicators

Indicators Class

## Hierarchy

* **Indicators**

## Index

### Constructors

* [constructor](_utils_indicators_.indicators.md#constructor)

### Properties

* [log](_utils_indicators_.indicators.md#log)

### Methods

* [getData](_utils_indicators_.indicators.md#getdata)
* [getRawData](_utils_indicators_.indicators.md#private-getrawdata)
* [initSession](_utils_indicators_.indicators.md#initsession)
* [logData](_utils_indicators_.indicators.md#private-logdata)
* [parseData](_utils_indicators_.indicators.md#private-parsedata)
* [print](_utils_indicators_.indicators.md#private-print)
* [titleCase](_utils_indicators_.indicators.md#private-titlecase)

## Constructors

###  constructor

\+ **new Indicators**(`log?`: undefined | false | true): *[Indicators](_utils_indicators_.indicators.md)*

*Defined in [utils/Indicators.ts:17](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`log?` | undefined &#124; false &#124; true |

**Returns:** *[Indicators](_utils_indicators_.indicators.md)*

## Properties

###  log

• **log**: *boolean*

*Defined in [utils/Indicators.ts:17](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L17)*

## Methods

###  getData

▸ **getData**(`args`: [DataArgs](../interfaces/_utils_types_.dataargs.md)): *Promise‹any›*

*Defined in [utils/Indicators.ts:40](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L40)*

Get Data

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DataArgs](../interfaces/_utils_types_.dataargs.md) |

**Returns:** *Promise‹any›*

___

### `Private` getRawData

▸ **getRawData**(`args`: [DataArgs](../interfaces/_utils_types_.dataargs.md)): *Promise‹any›*

*Defined in [utils/Indicators.ts:104](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L104)*

Get Raw Data

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DataArgs](../interfaces/_utils_types_.dataargs.md) |

**Returns:** *Promise‹any›*

___

###  initSession

▸ **initSession**(): *boolean*

*Defined in [utils/Indicators.ts:27](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L27)*

Initialize Session

**Returns:** *boolean*

___

### `Private` logData

▸ **logData**(`data`: any): *void*

*Defined in [utils/Indicators.ts:76](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L76)*

Log Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

### `Private` parseData

▸ **parseData**(`ticker`: string, `data`: Array‹number›): *any*

*Defined in [utils/Indicators.ts:133](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L133)*

Parse Data

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |
`data` | Array‹number› |

**Returns:** *any*

___

### `Private` print

▸ **print**(`text`: string): *void*

*Defined in [utils/Indicators.ts:58](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L58)*

Print Output

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*

___

### `Private` titleCase

▸ **titleCase**(`text`: string): *string*

*Defined in [utils/Indicators.ts:68](https://github.com/edmundpf/trading-view-ind-ts/blob/8d62b33/src/utils/Indicators.ts#L68)*

Title Case

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*
