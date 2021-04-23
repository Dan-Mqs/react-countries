export function getCoordinatesLat(country) {
    if (country.latlng[0] == undefined) {
        return '0'
    } else {
    return country.latlng[0]
    }
}