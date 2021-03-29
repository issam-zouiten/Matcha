const user = require('../../models/user');
const { sendEmail } = require('../sendmail');

delNotif = async (req, res) => {
    const notif_id = req.body.notif_id;
    user.delete('delNotif', notif_id)
    .then( async (resp) => {
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = delNotif;
