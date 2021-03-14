const user = require('../models/user');
const util = require('../util/lib');

locationUser = async (req, res) => {
    const info = req.body;
    if(util.latitude(parseFloat(info.localisation.lat)) && util.longitude(parseFloat(info.localisation.lng))){
        user.update('UpdateLocation', [info.localisation.lat, info.localisation.lng, info.id])
        .then(resp => {
            if(resp)
                res.send('updated');
        })
        .catch(err => console.log(err));
    }
    else
        res.send(false)
};

module.exports = locationUser;