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
const intervals = require('values').intervals;
const values_1 = require("./values");
const session = axios_1.default.create();
/**
 * Indicators Class
 */
class Indicators {
    constructor() {
        this.initSession();
    }
    /**
     * Initialize Session
     */
    initSession() {
        return __awaiter(this, void 0, void 0, function* () {
            session.defaults.headers.common['User-Agent'] = values_1.currentUserAgent;
            yield session.head(values_1.endpoints.home);
        });
    }
    /**
     * Get Results
     */
    getResults(ticker, interval) {
        if (!intervals.includes(interval)) {
            throw new Error('Invalid interval');
        }
        // await session.get()
    }
}
exports.default = Indicators;
//# sourceMappingURL=Indicators.js.map