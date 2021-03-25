const isNumeric = require('../func/isNumeric')
const isFloat = require('../func/isFloat')

const isLatitude = latitude => ((isNumeric(latitude) || isFloat(latitude))
&& latitude >= -90 && latitude <= 90)


module.exports = isLatitude
