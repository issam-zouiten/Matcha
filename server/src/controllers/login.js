const bcrypt = require("bcrypt");
const user = require('../models/user');

// const verifyJWT = (req, res, next) =>{
//     const token = req.headers["x-access-token"]

//     if(!token) {
//         res.send("Yo, we need a token, please give it to us next time!")
//     } else {
//     jwt.verify(token, "jwtSecret", (err, decoded) => {
//         if(err){
//             res.json({auth:false, message:" You failed to authenticate"});
//         } else {
//             req.userId = decoded.id;
//             next();
//         }
//     })
//     }
// }

// app.get('/isUserAuth', verifyJWT ,(req, res) =>{
//     res.send("yo, u are authenticated Congrats!")
// })

// app.get('/login', (req, res) => {
//     if(req.session.user) {
//         res.send({loggedIn: true, user: req.session.user})
//     } else {
//         res.send({ loggedIn: false })
//     }
// })

Login = async (req, res) => {
    const { username, password } = req.body;
    let dataUser = await user.getUser('GetUserByUsername', username);
    if (dataUser) {
        bcrypt.compare(password, dataUser.password)
            .then((response) => {
                if (response) {
                    if (dataUser.verif === 1) {
                        user.update('UpdateOnline', [dataUser.id])
                        dataUser.Online = 1;
                        delete dataUser.vfToken;
                        delete dataUser.password;
                        res.send({ isValid: true, user: dataUser });
                    }
                    else
                        res.send({ isValid: false, errorField: 'Please confirm your e-mail' });
                }
                else {
                    res.send({isValid : false, errorField : 'password no exist!'});

                }
            })
            .catch(err => console.log(err))
    }
    else
        res.send({isValid: false, errorField : "No user exists!"});

}

module.exports = Login;
