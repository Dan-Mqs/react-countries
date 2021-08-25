

export function currenciesToString(country) {
    let currencyList: string = ""
    
    if (country.currencies.length == 1) {
      country.currencies.map( currencies => {
        if (currencies.symbol != null) {
          return currencyList += `${currencies.symbol} - ${currencies.name}`;
        }
        else {
          return currencyList += currencies.name;
        }
      })
    }

    if (country.currencies.length > 1) {
      country.currencies.map( currencies => {
        if (currencies.symbol != null) {
          return currencyList += `${currencies.symbol} - ${currencies.name} / `;
        }
        else {
          return currencyList += currencies.name;
        }
      })
      currencyList = currencyList.slice(0, -3);
    }

    
    return currencyList
 }