const mysql = require('mysql');


module.exports = conn;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "myrootpass"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});