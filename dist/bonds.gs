"use strict";
exports.__esModule = true;
exports.NOMINAL_YIELD = exports.EFFECTIVE_YIELD = exports.YIELD_TO_MATURITY = exports.CURRENT_YIELD = void 0;
/**
 * @param {number} annualCashInflows - the amount of annual coupon payments
 * @param {number} currentPrice - the current price of the bond
 *
 * @returns the current yield (as a percentage)
 */
function CURRENT_YIELD(annualCashInflows, currentPrice) {
    return annualCashInflows / currentPrice;
}
exports.CURRENT_YIELD = CURRENT_YIELD;
function YIELD_TO_MATURITY(faceValue, currentPrice) {
    // TODO
    //
    return 0;
}
exports.YIELD_TO_MATURITY = YIELD_TO_MATURITY;
function EFFECTIVE_YIELD() {
}
exports.EFFECTIVE_YIELD = EFFECTIVE_YIELD;
function NOMINAL_YIELD() {
}
exports.NOMINAL_YIELD = NOMINAL_YIELD;
