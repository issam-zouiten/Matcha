const IMAGES = require('../models/pics');

getPics = async (req, res) => {
    const user_id = req.body.user_id;
     IMAGES.getPics(user_id)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = getPics;