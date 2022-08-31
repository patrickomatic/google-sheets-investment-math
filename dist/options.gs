"use strict";
exports.__esModule = true;
exports.PROFIT = exports.COMMISSION = exports.CAPITAL_NEEDED = void 0;
function isBlank(value) {
    return value == null || value === "";
}
/**
 * Given a strike price and amount of contracts, calculates the capital needed if assigned on a position
 *
 * @param {string} tradeType - "sell put" | "sell call" | "buy put" | "buy call"
 * @param {number} strikePrice - the strike price of the contract
 * @param {number} contracts - the number of contracts
 *
 * @return the capital needed (in dollars)
 */
function CAPITAL_NEEDED(type, strikePrice, contracts) {
    if (type.toLowerCase() === "sell put") {
        return contracts < 0 ? strikePrice * 100 * Math.abs(contracts) : 0;
    }
    else {
        // assume ecerything else is covered - maybe this will change
        return 0;
    }
}
exports.CAPITAL_NEEDED = CAPITAL_NEEDED;
// for schwab at $0.65 a trade
function COMMISSION(closePrice) {
    return (isBlank(closePrice) || closePrice === 0) ? 0.65 : 1.30;
}
exports.COMMISSION = COMMISSION;
function PROFIT(openPrice, closePrice, contracts, commissions) {
    var finalPrice = isBlank(closePrice) ? 0 : closePrice;
    return ((finalPrice - openPrice) * 100 * contracts) - commissions;
}
exports.PROFIT = PROFIT;
