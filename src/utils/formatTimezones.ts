export function formatTimezones(country) {
    let timezonesString: string = ""
    country.timezones.map( timezone => {
        return timezonesString += timezone + " / ";
      })

    return timezonesString
}