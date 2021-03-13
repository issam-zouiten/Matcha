const user = require('../models/user');

createTag = async (req, res) => {
    const {tag, id} = req.body;
    user.TagCreatedNbr(id)
    .then(ressultt => {
        if(ressultt[0].n > 5){
            res.send({ created: false, error: 'You can not create more than 6 tags !' });
        }
        else{
            if(tag.length < 20)
            {
                user.createTag(tag, id);
                res.send({ created: true, tags: {value: tag, label: tag} })
            }
            else
                res.send({ created: false, error: 'maximum is 20 characters !' })
        }
    }).catch(err => console.log(err));
};

module.exports = createTag;