"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const scanValues_1 = require("./scanValues");
const indCompute_1 = require("./indCompute");
const values_1 = require("./values");
var scanMetrics = require('./scanValues').scanMetrics;
var scanRequestArgs = require('./values').scanRequestArgs;
const session = axios_1.default.create();
const scanKeys = Object.keys(scanValues_1.scanColumns);
/**
 * Indicators Class
 */
class Indicators {
    constructor(log) {
        this.log = log == null ? true : log;
        this.initSession();
    }
    /**
     * Initialize Session
     */
    initSession() {
        session.defaults.headers.common = Object.assign(Object.assign({}, session.defaults.headers.common), { 'User-Agent': values_1.currentUserAgent, 'Content-Type': 'application/json' });
        return true;
    }
    /**
     * Get Data
     */
    getData(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = Object.assign({ exchange: 'NYSE' }, args);
            const data = yield this.getRawData(args);
            const indData = this.parseData(args.ticker, data);
            this.logData(indData);
            return indData;
        });
    }
    /**
     * Print Output
     */
    print(text) {
        if (this.log) {
            console.log(text);
        }
    }
    /**
     * Title Case
     */
    titleCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    /**
     * Log Data
     */
    logData(data) {
        if (this.log) {
            const signalTypes = {
                '-1': 'Sell',
                '0': 'Neutral',
                '1': 'Buy',
            };
            for (let ind in data) {
                let val = data[ind];
                if (val === Object(val)) {
                    if (val.value != val.rec) {
                        console.log(`${val.title}: ${val.value} | ${signalTypes[String(val.rec)]}`);
                    }
                    else {
                        console.log(`${val.title}: ${val.value} | ${indCompute_1.recommendation(val.rec)}`);
                    }
                }
                else {
                    console.log(`${this.titleCase(ind)}: ${val}`);
                }
            }
        }
    }
    /**
     * Get Raw Data
     */
    getRawData(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!Object.keys(values_1.intervals).includes(args.interval)) {
                throw new Error('Invalid interval');
            }
            var scanArgs = [];
            var reqArgs = JSON.parse(JSON.stringify(scanRequestArgs));
            for (let column of scanKeys) {
                scanArgs.push(`${column}${args.interval != 'day' ? '|' : ''}${values_1.intervals[args.interval]}`);
            }
            reqArgs.symbols.tickers[0] = `${(_a = args.exchange) === null || _a === void 0 ? void 0 : _a.toUpperCase()}:${args.ticker.toUpperCase()}`;
            reqArgs.columns = scanArgs;
            try {
                const res = yield session.post(values_1.endpoints.scan, reqArgs);
                this.print(`Fetched ${args.interval} data for $${args.ticker}`);
                return res.data.data[0].d;
            }
            catch (error) {
                this.print(error);
                return false;
            }
        });
    }
    /**
     * Parse Data
     */
    parseData(ticker, data) {
        var close = 0;
        var indVals = {};
        const indData = {};
        for (let index in data) {
            let value = data[index];
            indVals[scanKeys[index]] = value;
        }
        for (let ind in indVals) {
            let value = indVals[ind];
            let curInd = scanMetrics[ind];
            let isArray = Array.isArray(curInd);
            if (curInd === Object(curInd) && !isArray) {
                curInd.values = [value];
            }
            else if (typeof (curInd) == 'string') {
                let ascInd = scanMetrics[curInd];
                ascInd.values.push(value);
            }
            else if (isArray) {
                for (let asc of curInd) {
                    let ascInd = scanMetrics[asc];
                    ascInd.values.push(value);
                    if (ind == 'close') {
                        close = value;
                    }
                }
            }
        }
        for (let ind in scanMetrics) {
            let curInd = scanMetrics[ind];
            let isArray = Array.isArray(curInd);
            if (curInd === Object(curInd) && !isArray) {
                let indKey = scanValues_1.scanColumns[ind] == null ? ind : scanValues_1.scanColumns[ind];
                if (curInd.method == null) {
                    indData[indKey] = {
                        title: curInd.title,
                        value: curInd.values[0],
                        rec: curInd.values[0],
                    };
                }
                else {
                    indData[indKey] = {
                        title: curInd.title,
                        value: curInd.values[0],
                        rec: curInd.method(...curInd.values)
                    };
                }
            }
        }
        indData.ticker = ticker;
        indData.close = close;
        return indData;
    }
}
exports.default = Indicators;
