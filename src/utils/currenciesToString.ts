

export function currenciesToString(country) {
    let currencyList: string = ""
    country.currencies.map( currencies => {
      return currencyList += currencies.name;
    })
    return currencyList
 }