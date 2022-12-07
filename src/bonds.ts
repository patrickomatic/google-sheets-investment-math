/**
 * @param {number} annualCashInflows - the amount of annual coupon payments
 * @param {number} currentPrice - the current price of the bond
 *
 * @returns the current yield (as a percentage)
 */
export function CURRENT_YIELD(annualCashInflows: number, currentPrice: number): number {
  return annualCashInflows / currentPrice;
}

export function YIELD_TO_MATURITY(faceValue, currentPrice): number {
  // TODO
  //
  return 0;
}

export function EFFECTIVE_YIELD() {
}

export function NOMINAL_YIELD() {
}
