const tools = require('../tools');
const user = require('../models/user');

addInfo = async (req, res) => {
    const info = req.body;
    if(tools.date_Birthday(info.date_birthday) && tools.isGender(info.gender) && tools.isOrient(info.Sexual_orientation) && tools.isBio(info.biography) && tools.istags(info.tags))
    {
        user.deleteUserInter(info.id);
        user.updateInfo(info.gender, info.Sexual_orientation, info.date_birthday, tools.age(info.date_birthday), info.biography, info.id);
        info.tags.forEach( element => {
            user.getInterId(element)
            .then(tag => {
                if(tag){
                    user.insertUserInter(info.id, tag[0].tag_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        user.update('UpdateStep', [1, info.id]);
        const getuser = await user.getUser('GetUserById',info.id);
        if(getuser) delete getuser.password;
        res.send({ added: true , getuser});
    }
    else
        res.send({ added:false });
};

module.exports = addInfo;