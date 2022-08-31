import {OptionPositionType} from './types';

function isBlank(value): boolean {
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
export function CAPITAL_NEEDED(
  type: OptionPositionType,
  strikePrice: number,
  contracts: number,
): number {
  if (type.toLowerCase() === "sell put") {
    return contracts < 0 ? strikePrice * 100 * Math.abs(contracts) : 0;
  } else {
    // assume ecerything else is covered - maybe this will change
    return 0;
  }
}

// for schwab at $0.65 a trade
export function COMMISSION(closePrice) {
  return (isBlank(closePrice) || closePrice === 0) ? 0.65 : 1.30;
}

export function PROFIT(
  openPrice: number,
  closePrice: number | null,
  contracts: number,
  commissions: number,
): number {
  const finalPrice = isBlank(closePrice) ? 0 : closePrice;
  return ((finalPrice - openPrice) * 100 * contracts) - commissions;
}
