"use strict";
exports.__esModule = true;
exports.PROFIT = exports.COMMISSION = exports.CAPITAL_NEEDED = void 0;
var utils_1 = require("./utils");
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
/**
 * Calculate the commission charged on a trade.
 *
 * @param {number} closePrice - The price the contract closed at
 * @param {string} broker - Currently only 'Schwab' is supported
 *
 * @return the estimated commission charged
 *
 */
function COMMISSION(closePrice, broker) {
    if (broker === void 0) { broker = 'Schwab'; }
    // TODO implement logic for more brokers
    if (broker !== 'Schwab') {
        console.error("Unknown broker: ".concat(broker, ".  Commission will be $0"));
        return 0;
    }
    var costPerTrade = 0.65;
    return ((0, utils_1.isBlank)(closePrice) || closePrice === 0)
        ? costPerTrade
        : costPerTrade * 2;
}
exports.COMMISSION = COMMISSION;
/**
 * Determine the profit on a closed options contract
 *
 * @param {number} openPrice - The price the contract was opened for
 * @param {number | null} closePrice - The price the contract was opened for
 * @param {number} contracts - The number of contracts
 *
 * @return the profit (in dollars)
 */
function PROFIT(openPrice, closePrice, contracts, commissions) {
    var finalPrice = (0, utils_1.isBlank)(closePrice) ? 0 : closePrice;
    return ((finalPrice - openPrice) * 100 * contracts) - commissions;
}
exports.PROFIT = PROFIT;
