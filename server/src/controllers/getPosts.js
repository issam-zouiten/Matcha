const user = require('../../models/user');
const img = require('../../models/pics');
const filtreUsers = require('./filtre');
const checkLikes= require('./checkLikes')
getUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const indice = req.body.indice;
    const filtre = req.body.filtre;
    const users = await filtreUsers(user_id,filtre,indice);
    
    for (var i = 0; i < users.length; i++) {
        const images = await img.getPics(users[i].id);
        console.log(images);
        
        Da[i]= {
            user :  users[i],
            images : images, 
        }
    }
   res.send(Da);
    
};
 
module.exports = getUsers;