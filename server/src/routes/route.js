const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const logout = require('../controllers/logout');
const checkConfirmToken = require('../controllers/confirmToken');
const sendResetEmail = require('../controllers/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');
const addInfo = require('../controllers/completInfo')
const getLocation = require('../controllers/getLocation');
const getTags = require('../controllers/getTags');

router.post('/login', Login);
router.post('/register', Register);
router.post('/logout', logout);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/addInfo', addInfo);
router.post('/getTags', getTags);
router.post('/getLocation', getLocation);

module.exports = router;