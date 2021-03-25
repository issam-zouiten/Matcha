const user = require('../../models/user');

const taGs =  (tag) => {
    if(!Array.isArray(tag) || !tag.length)
        return false
    if(tag.includes("", tag))
        return false
    return true
}

module.exports = taGs