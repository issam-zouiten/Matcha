const uti = require('../util/lib');
const user = require('../models/user');

addInfo = async (req, res) => {
    const add_info = req.body;
    let check = false;
    if(info.tags.length > 5){
        check = false;
        res.send({complet_step1:false, error: 'You can not add more than 5 tags !' });
        return ;
    }
    if(uti.date_Birthday(add_info.date_birthday) && uti.gender(add_info.gender) && uti.Sexual_orientation(add_info.Sexual_orientation) && uti.biography(add_info.biography) && check)
    {
        user.deleteUserTag(add_info.id);
        user.updateInfo(add_info.gender, add_info.Sexual_orientation, add_info.date_birthday, add_info.biography, add_info.id);
        add_info.tags.forEach( element => {
            user.getTagId(element)
            .then(tag => {
                if(tag){
                    user.insertUserTag(add_info.id, tag[0].tag_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        user.update('UpdateStep', [1, add_info.id]);
        const getuser = await user.getUser('GetUserById',add_info.id);
        if(getuser) delete getuser.password;
        res.send({ complet_step1: true , getuser});
    }
    else
        res.send({ complet_step1:false });
};

module.exports = addInfo;