import {Broker, OptionPositionType} from './types';
import {isBlank} from './utils';

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

/**
 * Calculate the commission charged on a trade.
 *
 * @param {number} closePrice - The price the contract closed at
 * @param {string} broker - Currently only 'Schwab' is supported
 *
 * @return the estimated commission charged
 *
 */
export function COMMISSION(
  closePrice: number,
  broker: Broker = 'Schwab',
): number {
  // TODO implement logic for more brokers
  if (broker !== 'Schwab') {
    console.error(`Unknown broker: ${broker}.  Commission will be $0`);
    return 0;
  }
  const costPerTrade = 0.65;
  return (isBlank(closePrice) || closePrice === 0)
    ? costPerTrade
    : costPerTrade * 2;
}

/**
 * Determine the profit on a closed options contract
 *
 * @param {number} openPrice - The price the contract was opened for
 * @param {number | null} closePrice - The price the contract was opened for
 * @param {number} contracts - The number of contracts
 *
 * @return the profit (in dollars)
 */
export function PROFIT(
  openPrice: number,
  closePrice: number | null,
  contracts: number,
  commissions: number,
): number {
  const finalPrice = isBlank(closePrice) ? 0 : closePrice;
  return ((finalPrice - openPrice) * 100 * contracts) - commissions;
}
