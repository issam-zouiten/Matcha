const bcrypt = require("bcrypt");
const crypto = require('crypto');
const uti = require('../util/lib');
const user = require('../models/user');
const sendmail = require('./sendmail');
const saltRounds = 10;

Register = async (req, res) => {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    let GetUserByUsername = await user.getUser('GetUserByUsername', username);
    let GetUserByEmail = await user.getUser('GetUserByEmail', email);
    let data = {
        isValid: true,
        errUsername: null,
        errEmail: null,
    };
    if (GetUserByEmail) {
        data.errEmail = 'Email already exists';
    }
    if (GetUserByUsername) {
        data.errUsername = 'Username already exists';
    }
    if (!uti.isLastname(lastname) || !uti.isFirstname(firstname) || !uti.isUsername(username) || !uti.isEmail(email) || GetUserByEmail || GetUserByUsername || !uti.isPassword(password, confirmPassword)) {
        data.isValid = false;
    }
    else {
        let hashPassword = await bcrypt.hash(password, saltRounds);
        const vfToken = crypto.randomBytes(64).toString('hex');
        user.Register(lastname, firstname, username, email, hashPassword);
        user.UpdatvfToken(email, vfToken);
        sendmail.sendEmail(email, vfToken);
    }
    res.send(data);
};
module.exports = Register;