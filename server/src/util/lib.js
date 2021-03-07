
const isEmpty = require("./func/isEmpty")
const isDigit = require("./func/isDigit")
const isLowercase = require("./func/isLowercase")
const isUppercase = require("./func/isUppercase")
const isSpecial = require("./func/isSpecial")
const isAlpha = require("./func/isAlpha")
const isAlphaNumeric = require("./func/isAlphaNumeric")
const isNumeric = require("./func/isNumeric")
const isFloat = require("./func/isFloat")

const isUsername = require("./useruti/isUsername")
const isEmail = require("./useruti/isEmail")
const isFirstname = require("./useruti/isFirstname")
const isLastname = require("./useruti/isLastname")
const isPassword = require("./useruti/isPassword")

const date_Birthday = require("./useruti/date_Birthday")
const gender = require("./useruti/gender")
const Sexual_orientation = require("./useruti/Sexual_orientation")
const biography = require("./useruti/biography")

module.exports = {
    isEmpty, isDigit, isLowercase, isUppercase, isSpecial,
    isAlpha, isAlphaNumeric, isNumeric, isFloat, isUsername,
    isEmail, isFirstname, isLastname, isPassword, date_Birthday,
    gender, Sexual_orientation, biography,
};