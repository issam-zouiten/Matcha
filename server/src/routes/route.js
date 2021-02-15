const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');

router.post('/login', Login);
router.post('/register', Register);

module.exports = router;