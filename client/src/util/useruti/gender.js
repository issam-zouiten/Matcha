const isEmpty = require('../func/isEmpty')

const isGender = (gender) => {
    if(isEmpty(gender))
        return false
    if(gender !== 'male' && gender !== 'female')
        return false

    return true
}

module.exports = isGender
