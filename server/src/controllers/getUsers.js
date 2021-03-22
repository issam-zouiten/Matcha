const user = require('../models/user');
const img = require('../models/pics');
const filtreUsers = require('./filtre');
const checkLikes= require('./checkLikes')
getUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const indice = req.body.indice;
    const filtre = req.body.filtre;
    const users = await filtreUsers(user_id,filtre,indice);
    
    for (var i = 0; i < users.length; i++) {
        users[i].like = await checkLikes(user_id,users[i].id);
        const images = await img.getPics(users[i].id);
        const tags  = await user.getUserTags(users[i].id); 
        Da[i]= {
            user :  users[i],
            images : images,   
            tags: tags,
        }
    }
   res.send(Da);
    
};

module.exports = getUsers;