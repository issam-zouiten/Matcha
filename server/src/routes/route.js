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
const setProfilePicture = require ('../controllers/setProfilePicture');
const editProfile = require ('../controllers/editProfile');
const getMatchedUsers = require('../controllers/chat/matchs');
const loadMessages = require('../controllers/chat/loadMessages');
const sendMessages = require('../controllers/chat/sendMessage');


router.post('/login', Login);
router.post('/register', Register);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);

const checkToken = require('../controllers/checkToken');
router.use(async function (req,res,next) {
    const token = req.headers.authorization;
    console.log('ok')
    if(token !== 'undefined')
    {
        const isValid = await checkToken(token);
        if(isValid)
            next();
        else
            console.log('Token is invalid'); 
    }else
        console.log('token is undefined')
    
})

router.post('/getTags', getTags);
router.post('/addInfo', addInfo);
router.post('/logout', logout);
router.post('/createTag', createTag);
router.post('/updateStep',updateStep);
router.post('/getLocation', getLocation);
router.post('/getPics', getPics);
router.post('/delPics',deleteImages);
router.post('/sendMessage', sendMessages);
router.post('/setProfilePicture',setProfilePicture);
router.post('/location', location);
router.post('/editProfile', editProfile);
router.post('/getMatchs', getMatchedUsers);
router.post('/loadMessages', loadMessages);


module.exports = router;