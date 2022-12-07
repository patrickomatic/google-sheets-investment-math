"use strict";
exports.__esModule = true;
exports.OPTION_IS_IN_THE_MONEY = exports.COMMISSION = exports.CAPITAL_NEEDED = exports.OPTION_SYMBOL = void 0;
function isCallOption_(type) {
    return type.toLowerCase() === "call";
}
/**
 * Generate an OCC-defined option symbol of the format:
 *
 * "YHOO150416C00030000"
 *
 * @param {string} ticker - the ticker symbol
 * @param {number} strikePrice - the strike price of the contract
 * @param {Date} expirationDate - the expiration date of the contract
 * @param {"Call" | "Put"}  callOrPut - if the contract is a call or a put
 *
 * @return {string} the option symbol
 *
 * @see {@link https://help.yahoo.com/kb/SLN13884.html}
 *
 * @customfunction
 */
function OPTION_SYMBOL(ticker, strikePrice, expirationDate, callOrPut) {
    var date = new Date(expirationDate);
    return [
        ticker.trim(),
        date.getFullYear().toString().slice(-2),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        date.getDate().toString().padStart(2, '0'),
        callOrPut.substring(0, 1).toUpperCase(),
        (strikePrice * (Math.pow(10, 3))).toString().padStart(8, '0'),
    ].join('');
}
exports.OPTION_SYMBOL = OPTION_SYMBOL;
/**
 * Given a strike price and amount of contracts, calculates the capital needed if assigned on a position
 *
 * @param {string} tradeType - "sell put" | "sell call" | "buy put" | "buy call"
 * @param {number} strikePrice - the strike price of the contract
 * @param {number} contracts - the number of contracts
 *
 * @return the capital needed (in dollars)
 *
 * @customfunction
 */
function CAPITAL_NEEDED(type, strikePrice, contracts) {
    if (isCallOption_(type)) {
        return 0;
    }
    return contracts < 0 ? strikePrice * 100 * Math.abs(contracts) : 0;
}
exports.CAPITAL_NEEDED = CAPITAL_NEEDED;
/**
 * Calculate the commission charged on an option trade.
 *
 * @param {number} contracts - The quantity of contracts
 * @param {number} transactionPrice - The price of the option
 * @param {string} broker - Currently only 'Schwab' is supported
 *
 * @return the estimated commission charged
 *
 * @customfunction
 */
function COMMISSION(contracts, transactionPrice, broker) {
    if (broker === void 0) { broker = 'Schwab'; }
    // TODO implement logic for more brokers
    if (broker.toLowerCase() !== 'schwab') {
        throw new Error("Unknown broker: ".concat(broker));
    }
    if (transactionPrice == null || transactionPrice === 0) {
        return 0;
    }
    return Math.abs(contracts) * 0.65;
}
exports.COMMISSION = COMMISSION;
/**
 * Whether or not an options is in the money
 *
 * @param {"call" | "put"} type - "call" or "put"
 * @param {number} strikePrice - The strike price of the contract
 * @param {number} currentPrice - The current price of the stock. (You can use =GOOGLEFINANCE() to get it)
 *
 * @return the estimated commission charged
 *
 * @customfunction
 */
function OPTION_IS_IN_THE_MONEY(type, quantity, strikePrice, currentPrice) {
    var isCall = isCallOption_(type);
    return isCall
        ? currentPrice < strikePrice
        : currentPrice > strikePrice;
}
exports.OPTION_IS_IN_THE_MONEY = OPTION_IS_IN_THE_MONEY;
