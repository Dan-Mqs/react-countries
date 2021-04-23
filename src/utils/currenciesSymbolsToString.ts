
export function currenciesSymbolsToString(country) {
    let currencySymbols: string = ""
    country.currencies.map( currencies => {
      return currencySymbols += currencies.symbol;
    })
  return currencySymbols
 }