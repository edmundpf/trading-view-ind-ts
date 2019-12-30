[trading-view-ind-ts - v1.0.0](../README.md) › [Globals](../globals.md) › ["utils/Indicators"](../modules/_utils_indicators_.md) › [Indicators](_utils_indicators_.indicators.md)

# Class: Indicators

Indicators Class

## Hierarchy

* **Indicators**

## Index

### Constructors

* [constructor](_utils_indicators_.indicators.md#constructor)

### Properties

* [data](_utils_indicators_.indicators.md#data)
* [log](_utils_indicators_.indicators.md#log)

### Methods

* [getData](_utils_indicators_.indicators.md#getdata)
* [getRawData](_utils_indicators_.indicators.md#private-getrawdata)
* [initSession](_utils_indicators_.indicators.md#initsession)
* [logData](_utils_indicators_.indicators.md#private-logdata)
* [parseData](_utils_indicators_.indicators.md#private-parsedata)
* [print](_utils_indicators_.indicators.md#private-print)

## Constructors

###  constructor

\+ **new Indicators**(`log?`: undefined | false | true): *[Indicators](_utils_indicators_.indicators.md)*

*Defined in [utils/Indicators.ts:16](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`log?` | undefined &#124; false &#124; true |

**Returns:** *[Indicators](_utils_indicators_.indicators.md)*

## Properties

###  data

• **data**: *any*

*Defined in [utils/Indicators.ts:16](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L16)*

___

###  log

• **log**: *boolean*

*Defined in [utils/Indicators.ts:15](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L15)*

## Methods

###  getData

▸ **getData**(`ticker`: string, `interval`: string): *Promise‹void›*

*Defined in [utils/Indicators.ts:46](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L46)*

Get Data

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |
`interval` | string |

**Returns:** *Promise‹void›*

___

### `Private` getRawData

▸ **getRawData**(`ticker`: string, `interval`: string): *Promise‹any›*

*Defined in [utils/Indicators.ts:89](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L89)*

Get Raw Data

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |
`interval` | string |

**Returns:** *Promise‹any›*

___

###  initSession

▸ **initSession**(): *Promise‹boolean›*

*Defined in [utils/Indicators.ts:26](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L26)*

Initialize Session

**Returns:** *Promise‹boolean›*

___

### `Private` logData

▸ **logData**(): *void*

*Defined in [utils/Indicators.ts:66](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L66)*

Log Data

**Returns:** *void*

___

### `Private` parseData

▸ **parseData**(`data`: Array‹number›): *void*

*Defined in [utils/Indicators.ts:117](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L117)*

Parse Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | Array‹number› |

**Returns:** *void*

___

### `Private` print

▸ **print**(`text`: string): *void*

*Defined in [utils/Indicators.ts:56](https://github.com/edmundpf/trading-view-ind-ts/blob/610b569/src/utils/Indicators.ts#L56)*

Print Output

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*
