const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const checkConfirmToken = require('../controllers/confirmToken')

router.post('/login', Login);
router.post('/register', Register);
router.post('/confirmEmail', checkConfirmToken);

module.exports = router;