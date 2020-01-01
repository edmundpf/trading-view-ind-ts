[trading-view-ind-ts - v1.0.3](../README.md) › [Globals](../globals.md) › ["utils/Indicators"](../modules/_utils_indicators_.md) › [Indicators](_utils_indicators_.indicators.md)

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

*Defined in [utils/Indicators.ts:16](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`log?` | undefined &#124; false &#124; true |

**Returns:** *[Indicators](_utils_indicators_.indicators.md)*

## Properties

###  log

• **log**: *boolean*

*Defined in [utils/Indicators.ts:16](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L16)*

## Methods

###  getData

▸ **getData**(`args`: [DataArgs](../interfaces/_utils_types_.dataargs.md)): *Promise‹any›*

*Defined in [utils/Indicators.ts:45](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L45)*

Get Data

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DataArgs](../interfaces/_utils_types_.dataargs.md) |

**Returns:** *Promise‹any›*

___

### `Private` getRawData

▸ **getRawData**(`args`: [DataArgs](../interfaces/_utils_types_.dataargs.md)): *Promise‹any›*

*Defined in [utils/Indicators.ts:93](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L93)*

Get Raw Data

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DataArgs](../interfaces/_utils_types_.dataargs.md) |

**Returns:** *Promise‹any›*

___

###  initSession

▸ **initSession**(): *Promise‹boolean›*

*Defined in [utils/Indicators.ts:25](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L25)*

Initialize Session

**Returns:** *Promise‹boolean›*

___

### `Private` logData

▸ **logData**(`data`: any): *void*

*Defined in [utils/Indicators.ts:70](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L70)*

Log Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

### `Private` parseData

▸ **parseData**(`data`: Array‹number›): *any*

*Defined in [utils/Indicators.ts:121](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L121)*

Parse Data

**Parameters:**

Name | Type |
------ | ------ |
`data` | Array‹number› |

**Returns:** *any*

___

### `Private` print

▸ **print**(`text`: string): *void*

*Defined in [utils/Indicators.ts:60](https://github.com/edmundpf/trading-view-ind-ts/blob/0e4ec01/src/utils/Indicators.ts#L60)*

Print Output

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*
