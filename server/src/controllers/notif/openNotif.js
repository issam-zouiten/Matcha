const user = require('../../models/user');

openNotif = async (req, res) => {
    const user_id = req.body.user_id;
    user.update('openNotif', user_id)
    .then(resp => {
        if(resp)
            res.send(true);
    })
};
module.exports = openNotif;