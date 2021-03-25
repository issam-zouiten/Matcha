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
const loadMessages = require('../controllers/chat/loadMessages');
const sendMessages = require('../controllers/chat/sendMessage');
const getBlockUser = require('../controllers/getBlockUser');
const getLikeUser = require('../controllers/getLikeUser');
const getMatchedUsers = require('../controllers/chat/matchs');
const dislikeUser = require('../controllers/dislikeUser');
const reportUser = require('../controllers/reportUser');
const getNotif = require('../controllers/notif/getNotif');
const openNotif = require('../controllers/notif/openNotif');
const getViewProfileList = require('../controllers/getViewProfileList');
const getLikedByList = require('../controllers/getLikedBy');
const likeUser = require('../controllers/likeUser');
const deblockUser = require('../controllers/deblockUser');
const blockUser = require('../controllers/blockUser');
const getUsers = require('../controllers/getUsers');
const sortUsers = require('../controllers/sortUsers');
const delNotif = require('../controllers/notif/delNotif');

router.post('/login', Login);
router.post('/register', Register);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);

const checkToken = require('../controllers/checkToken');
router.use(async function (req,res,next) {
    const token = req.headers.authorization;
    // console.log('ok')
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
router.post('/likeUser',likeUser);
router.post('/getUsers',getUsers);
router.post('/blockUser',blockUser);
router.post('/deblockUser',deblockUser);
router.post('/sendMessage', sendMessages);
router.post('/getBlockUser',getBlockUser);
router.post('/dislikeUser',dislikeUser);
router.post('/reportUser',reportUser);
router.post('/getLikeUser',getLikeUser);
router.post('/getNotif', getNotif);
router.post('/openNotif', openNotif);
router.post('/delNotif', delNotif);
router.post('/sortUsers', sortUsers);
router.post('/setProfilePicture',setProfilePicture);
router.post('/location', location);
router.post('/getViewProfileList',getViewProfileList);
router.post('/getLikedByList', getLikedByList);
router.post('/editProfile', editProfile);
router.post('/getMatchs', getMatchedUsers);
router.post('/loadMessages', loadMessages);


module.exports = router;