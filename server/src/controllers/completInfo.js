
const uti = require('../util/lib');
const user = require('../models/user');

addInfo = async (req, res) => {
    const add_info = req.body;
    let verif = false;
    if (add_info.tags.length) {
        // console.log("dkhaaaaaalllll")
        const result = await user.checkTags(add_info.tags)
        if (result[0].n !== add_info.tags.length)
            verif = false;
        else
            verif = true;
    }
    if (add_info.tags.length > 5) {
        verif = false;
        // console.log("fo9 _5")
        res.send({ complet_step1: false, error: 'You can not add more than 5 Tags !' });
        return;
    }
    if(uti.date_Birthday(add_info.birthday) && uti.gender(add_info.gender) && uti.Sexual_orientation(add_info.Sexual_orientation) && uti.biography(add_info.biography) && verif){
        user.deleteUserTag(add_info.id);
        user.updateInfo(add_info.lastname, add_info.firstname, add_info.gender, add_info.Sexual_orientation, add_info.birthday, add_info.biography, add_info.id);
        add_info.tags.forEach( element => {
            user.getTagId(element)
            .then(re => {
                if(re){
                    // console.log(add_info.tags.id);
                    user.insertUserTag(add_info.id, re[0].tag_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        user.update('UpdateStep', [1, add_info.id]);
        const getuser = await user.getUser('GetUserById', add_info.id);
        if (getuser) delete getuser.password;
        res.send({ complet_step1: true, getuser });
    }
    else
        res.send({ complet_step1: false,  error: 'error all!' });
};

module.exports = addInfo;