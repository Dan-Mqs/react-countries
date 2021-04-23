export function getCoordinatesLong(country) {
    if (country.latlng[1] == undefined) {
        return '0'
    } else {
    return country.latlng[1]
    }
}