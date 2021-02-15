const bcrypt = require("bcrypt");
const user = require('../models/user');
const saltRounds = 10;

Register = async (req, res) => {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

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
    else {
        let hashPassword = await bcrypt.hash(password, saltRounds);
        user.Register(lastname, firstname, username, email, hashPassword);
    }
    res.send(data);
};
module.exports = Register;