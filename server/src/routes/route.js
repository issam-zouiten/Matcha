const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const logout = require('../controllers/logout');
const checkConfirmToken = require('../controllers/confirmToken');
const sendResetEmail = require('../controllers/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');
const addInfo = require('../controllers/completInfo');
const getLocation = require('../controllers/getLocation');
const getTags = require('../controllers/getTags');
const createTag = require('../controllers/createTag');
const updateStep = require('../controllers/updateStep');
const getPics = require('../controllers/getPics');
const deleteImages = require('../controllers/delPics');
const location = require('../controllers/location');
const setProfilePicture = require ('../controllers/setProfilePicture')
const editProfile = require ('../controllers/editProfile')



router.post('/login', Login);
router.post('/register', Register);
router.post('/logout', logout);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/addInfo', addInfo);
router.post('/getTags', getTags);
router.post('/createTag', createTag);
router.post('/updateStep',updateStep);
router.post('/getLocation', getLocation);
router.post('/getPics', getPics);
router.post('/delPics',deleteImages);
router.post('/setProfilePicture',setProfilePicture);
router.post('/location', location);
router.post('/editProfile', editProfile);


module.exports = router;