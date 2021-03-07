const user = require('../models/user');

getTags = async (req, res) => {
     user.getTags()
    .then((response) => {
        let tags = [];
        Object.keys(response).forEach(function() {
            for (var i = 0; i < response.length; i++) {
                tags[i] = {
                  value: response[i].tag,
                  label: response[i].tag,
                };
            }
        });
        res.send(tags);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = getTags;