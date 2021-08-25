export function formatTimezones(country) {
    let timezonesString: string = ""

    if (country.timezones.length > 1) {
      country.timezones.map( timezone => {
          return timezonesString += timezone + " / ";
        })
      timezonesString = timezonesString.slice(0, -3)
    }

    if (country.timezones.length == 1) {
      country.timezones.map( timezone => {
        return timezonesString += timezone;
      })
    }

    return timezonesString
}