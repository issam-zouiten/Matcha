const app = require('./src/app');
// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const badyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

// const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");
// const { response } = require("express");
// const saltRounds = 10;

// const jwt = require("jsonwebtoken");

// const app = express();

// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods:["GET", "POST"],
//     credentials: true
// }));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true}));

// app.use(session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60 * 60 * 24,
//     },
// }))

// const con = mysql.createConnction({
//     host: "192.168.99.100",
//     port: "3306",
//     user: "root",
//     password: "pikala",
//     database: "db_matcha",
// });
// // con.connect(function (err) {
// //     if (err) throw err;
// //     console.log("Connected!");

// // });

// // app.get('/',(req,res)=>{
// //     con.query('CREATE DATABASE IF NOT EXISTS db_matcha',(err,result)=>{
// //         if (err)
// //             console.log(err)
// //     })
// //     res.send("running !")
// // })
// app.post('/register', (req, res) => {

//     const username = req.body.username;
//     const password = req.body.password;

//     bcrypt.hash(password, saltRounds, (err, hash) => {

//         if(err){
//             console.log(err)
//         }
//         con.query(
//             'INSERT INTO users (username, password) VALUES (?,?)',
//             [username, hash],
//             (err, result) => {
//                 if(err){
//                     console.log(err);
//                 }
//             }
//         );
//     });
// });

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

// app.post('/login', (req, res) => {

//     const username = req.body.username;
//     const password = req.body.password;

//     con.query(
//         'SELECT * FROM users WHERE username = ?;',
//         username,
//         (err, result) => {
//             if (err) {
//                 res.send({ err: err });
//             }
//             if (result.length > 0) {
//                 bcrypt.compare(password, result[0].password, (error, response) => {
//                     if(response){
//                         const id = result[0].id;
//                         const token = jwt.sign({id}, "jwtSecret", {
//                             expiresIn: 300,
//                         })
//                         req.session.user = result;

//                         res.json({auth: true, token: token, result: result});
//                     } else {
//                         res.json({
//                             auth: false,
//                             message: "wrong user name password combination!" 
//                         });
//                     }
//                 })
//             } else {
//                 res.json({ auth: false, message: "No user exists!" });
//             }
//         }
//     );
// });

const server = app.listen(3001, () => {
    console.log("running on port 3001");
});

const io = require("socket.io").listen(server);

io.on('connection', socket => {
    socket.once('join', function (data) {
        socket.join(data.id);
    });

    socket.on('chatMessage', function(data){
        delete data.by.id;
        io.to(data.receiver).emit('new_msg', {sender: data.sender, receiver: data.receiver, profilePic: data.profilePic, message: data.message});
        io.to(data.sender).emit('received', {sender: data.sender, receiver: data.receiver, profilePic: data.profilePic, message: data.message});
        io.to(data.receiver).emit('new_notif', {by: {...data.by}, content: data.content});
    });

    socket.on('userLiked', async function(data){
        const relation = await checkLikes(data.by.id, data.receiver);
        delete data.by.id;
        if(relation === 'match')
            io.to(data.receiver).emit('new_notif', {by: {...data.by}, content: `You are matched with ${data.by.username}`});
        else
            io.to(data.receiver).emit('new_notif', {by: {...data.by}, content: data.content});
    });

    socket.on('userUnliked', async function(data){
        const relation = await checkLikes(data.by.id, data.receiver);
        delete data.by.id;
        if(relation === 'heLiked')
            io.to(data.receiver).emit('new_notif', {by: {...data.by}, content: data.content});
    });

    socket.on('profileViewed', function(data){
        delete data.by.id;
        console.log(data);
        io.to(data.receiver).emit('new_notif', {by: {...data.by}, content: data.content});
    });

    socket.on('openNotif', function (data){
        io.to(data.id).emit('openedNotif', data.id);
    });
})