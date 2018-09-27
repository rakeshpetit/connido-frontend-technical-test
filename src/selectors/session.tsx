const area = (state: any) => state.session;

export function getSourceCurrencyAmount(state: any) {
  const sourceCurrency = getSourceCurrency(state);
  if(area(state).data)
    return area(state).data.rates[sourceCurrency] || undefined;
  return undefined;
}

export function getDestinationCurrencyAmount(state: any) {
    const destinationCurrency = getDestinationCurrency(state);
    if(area(state).data)
      return area(state).data.rates[destinationCurrency] || undefined;
    return undefined;
}

export function getCalculatedSourceAmount(state: any) {
    const sourceCurrencyAmount = getSourceCurrencyAmount(state);
    const destinationCurrencyAmount = getDestinationCurrencyAmount(state);
    const userDestinationAmount = getUserDestinationAmount(state);
    const calcValue = (sourceCurrencyAmount * userDestinationAmount)/destinationCurrencyAmount;
    return Math.round(calcValue * 1000)/1000;
}
  
  export function getCalculatedDestinationAmount(state: any) {
    const sourceCurrencyAmount = getSourceCurrencyAmount(state);
    const destinationCurrencyAmount = getDestinationCurrencyAmount(state);
    const userSourceAmount = getUserSourceAmount(state);
    const calcValue = (destinationCurrencyAmount * userSourceAmount)/sourceCurrencyAmount;
    return Math.round(calcValue * 1000)/1000;
  }

export function getSourceCurrency(state: any) {
    const { sourceCurrency } = area(state);
    return sourceCurrency;
}


export function getDestinationCurrency(state: any) {
    const { destinationCurrency } = area(state);
    return destinationCurrency;
}

export function getUserSourceAmount(state: any) {
    const { userSourceAmount } = area(state);
    return userSourceAmount === undefined ? getSourceCurrencyAmount(state) : userSourceAmount;
}


export function getUserDestinationAmount(state: any) {
    const { userDestinationAmount } = area(state);
    return userDestinationAmount === undefined ? getDestinationCurrencyAmount(state) : userDestinationAmount;
}

export function getSymbols(state: any){
    const { symbolData } = area(state);
    const { symbols } : any = symbolData || {};
    let symbolsList = [];
    if(symbols){
        for (const key in symbols) {
            symbolsList.push({ key, value: symbols[key] });
        }
    }
    return symbolsList;    
}