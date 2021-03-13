const IMAGES = require('../models/pics');

delPics = async (req, res) => {
    const data = req.body;
    const isProfilePic = data.isProfilePic;
    IMAGES.delPics(data)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
    if(isProfilePic == 1)
    {
        IMAGES.setFirstProfilePic(data)
        .catch((error) => {
            console.log(error);
        });
    }
};
module.exports = delPics;