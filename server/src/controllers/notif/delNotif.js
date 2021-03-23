const user = require('../../models/user');

delNotif = async (req, res) => {
    const notif_id = req.body.notif_id;
    user.delete('delNotif', notif_id)
    .then( async (resp) => {
        let arr = [];
        // console.log('okiiiiiiiii')
        res.send(arr);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = delNotif;
