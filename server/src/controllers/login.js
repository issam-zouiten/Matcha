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
    const username = req.body.username;
    const password = req.body.password;

    let dataUser = await user.getUser('GetUserByUsername', username);
    if (dataUser) {
        bcrypt.compare(password, dataUser.password)
            .then((response) => {
                if (response) {
                    const id = result[0].id;
                    const token = jwt.sign({ id }, "jwtSecret", {
                        expiresIn: 300,
                    })
                    req.session.user = result;

                    res.json({ auth: true, token: token, result: result });
                } else {
                    res.json({
                        auth: false,
                        message: "wrong user name password combination!"
                    });
                }
            })
            .catch(err => console.log(err))
    }
    else
        res.json({ auth: false, message: "No user exists!" });
}

module.exports = Login;
