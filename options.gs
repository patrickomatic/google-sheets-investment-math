function isBlank(value) {
  return value == null || value === "";
} 

function CAPITAL_NEEDED(type, strikePrice, contracts) {
  if (type.toLowerCase() === "sell put") {
    return contracts < 0 ? strikePrice * 100 * Math.abs(contracts) : 0;
  } else {
    // assume ecerything else is covered - maybe this will change 
    return 0;
  }
}

// for schwab at $0.65 a trade
function COMMISSION(closePrice) {
  return (isBlank(closePrice) || closePrice === 0) ? 0.65 : 1.30;
}

function PROFIT(openPrice, closePrice, contracts, commissions) {
  const finalPrice = isBlank(closePrice) ? 0 : closePrice;
  return ((finalPrice - openPrice) * 100 * contracts) - commissions;
}
