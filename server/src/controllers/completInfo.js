const uti = require('../util/lib');
const user = require('../models/user');

addInfo = async (req, res) => {
    const add_info = req.body;
        if(uti.date_Birthday(add_info.date_birthday) && uti.gender(add_info.gender) && uti.Sexual_orientation(add_info.Sexual_orientation) && uti.biography(add_info.biography))
        {
            // user.deleteUserTag(add_info.id);
            user.updateInfo(add_info.gender, add_info.Sexual_orientation, add_info.date_birthday, add_info.biography, add_info.id);
        // user.update('UpdateStep', [1, add_info.id]);
        const getuser = await user.getUser('GetUserById',add_info.id);
        if(getuser) delete getuser.password;
        res.send({ complet_step1: true , getuser});
    }
    else
        res.send({ complet_step1:false });
};

module.exports = addInfo;