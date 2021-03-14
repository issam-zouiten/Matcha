const isNumeric = require('../func/isNumeric')
const isFloat = require('../func/isFloat')

const isLongitude = longitude => ((isNumeric(longitude) || isFloat(longitude)) && longitude >= -180 && longitude <= 180)

module.exports = isLongitude
