[trading-view-ind-ts - v1.0.2](../README.md) › [Globals](../globals.md) › ["utils/Indicators"](../modules/_utils_indicators_.md) › [Indicators](_utils_indicators_.indicators.md)

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

## Constructors

###  constructor

\+ **new Indicators**(`log?`: undefined | false | true): *[Indicators](_utils_indicators_.indicators.md)*

*Defined in [utils/Indicators.ts:15](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`log?` | undefined &#124; false &#124; true |

**Returns:** *[Indicators](_utils_indicators_.indicators.md)*

## Properties

###  log

• **log**: *boolean*

*Defined in [utils/Indicators.ts:15](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L15)*

## Methods

###  getData

▸ **getData**(`ticker`: string, `interval`: string): *Promise‹any›*

*Defined in [utils/Indicators.ts:44](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L44)*

Get Data

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |
`interval` | string |

**Returns:** *Promise‹any›*

___

### `Private` getRawData

▸ **getRawData**(`ticker`: string, `interval`: string): *Promise‹any›*

*Defined in [utils/Indicators.ts:88](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L88)*

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

*Defined in [utils/Indicators.ts:24](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L24)*

Initialize Session

**Returns:** *Promise‹boolean›*

___

### `Private` logData

▸ **logData**(`data`: any): *void*

*Defined in [utils/Indicators.ts:65](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L65)*

Log Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

### `Private` parseData

▸ **parseData**(`data`: Array‹number›): *any*

*Defined in [utils/Indicators.ts:116](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L116)*

Parse Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | Array‹number› |

**Returns:** *any*

___

### `Private` print

▸ **print**(`text`: string): *void*

*Defined in [utils/Indicators.ts:55](https://github.com/edmundpf/trading-view-ind-ts/blob/0c8d8f2/src/utils/Indicators.ts#L55)*

Print Output

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*
