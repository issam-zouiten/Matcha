const mysql = require("mysql");

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
//     con.query('CREATE DATABASE IF NOT EXISTS db_matcha',(err,result)=>{
//         if (err)
//             console.log(err)
//     })
//     res.send("running !")
// })
module.exports = con;
