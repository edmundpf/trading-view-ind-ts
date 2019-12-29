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
const __1 = __importDefault(require("../"));
const should = require('chai').should();
const assert = require('chai').assert;
/**
 * Indicators Class
 */
describe('Indicators', function () {
    it('Is function', function () {
        __1.default.should.be.a('function');
    });
    it('Returns recommendations', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const ind = new __1.default();
            yield ind.initSession();
            yield ind.getData('SPY', '15min');
            assert.equal(ind.data.RSI != null, true);
        });
    });
});
//# sourceMappingURL=test.js.map