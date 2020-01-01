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
/**
 * Indicators Class
 */
class Indicators {
    constructor(log) {
        this.log = log == null ? true : log;
    }
    /**
     * Initialize Session
     */
    initSession() {
        return __awaiter(this, void 0, void 0, function* () {
            session.defaults.headers.common = Object.assign(Object.assign({}, session.defaults.headers.common), { 'User-Agent': values_1.currentUserAgent, 'Content-Type': 'application/json' });
            try {
                const res = yield session.head(values_1.endpoints.home);
                this.print('Session initialized');
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
    /**
     * Get Data
     */
    getData(ticker, interval) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getRawData(ticker, interval);
            const indData = this.parseData(data);
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
                if (val.value != val.rec) {
                    console.log(`${val.title}: ${val.value} | ${signalTypes[String(val.rec)]}`);
                }
                else {
                    console.log(`${val.title}: ${val.value} | ${indCompute_1.recommendation(val.rec)}`);
                }
            }
        }
    }
    /**
     * Get Raw Data
     */
    getRawData(ticker, interval) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Object.keys(values_1.intervals).includes(interval)) {
                throw new Error('Invalid interval');
            }
            var scanArgs = [];
            for (let column of scanValues_1.scanColumns) {
                scanArgs.push(`${column}|${values_1.intervals[interval]}`);
            }
            scanRequestArgs.symbols.tickers[0] = `AMEX:${ticker.toUpperCase()}`;
            scanRequestArgs.columns = scanArgs;
            try {
                const res = yield axios_1.default.post(values_1.endpoints.scan, scanRequestArgs);
                this.print(`Fetched ${interval} data for $${ticker}`);
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
    parseData(data) {
        var indVals = {};
        const indData = {};
        for (let index in data) {
            let value = data[index];
            indVals[scanValues_1.scanColumns[index]] = value;
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
                }
            }
        }
        for (let ind in scanMetrics) {
            let curInd = scanMetrics[ind];
            let isArray = Array.isArray(curInd);
            if (curInd === Object(curInd) && !isArray) {
                if (curInd.method == null) {
                    indData[ind] = {
                        title: curInd.title,
                        value: curInd.values[0],
                        rec: curInd.values[0],
                    };
                }
                else {
                    indData[ind] = {
                        title: curInd.title,
                        value: curInd.values[0],
                        rec: curInd.method(...curInd.values)
                    };
                }
            }
        }
        return indData;
    }
}
exports.default = Indicators;
