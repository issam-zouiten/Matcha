const express = require('express');
const app = express();
app.get('/', (req, res) => {
    con.query('Create Database Matcha', (err, result) => {
        if (err)
            console.log(err)
    })
    res.send("test")
})
// ------------- DB Connection  ------------- //
//const connection = require('./Config/db_conn');


