const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: "192.168.99.103",
    port: "3306",
    user: "root",
    password: "pikala",
    database: "db_matcha",
});
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

// });

// app.get('/',(req,res)=>{
//     con.query('Create Database db_matcha',(err,result)=>{
//         if (err)
//             console.log(err)
//     })
//     res.send("running !")
// })
app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    con.query(
        'INSERT INTO users (username, password) VALUES (?,?)',
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    con.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running on port 3001");
});