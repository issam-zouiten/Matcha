const express = require('express');
const bodyParser = require("body-parser");
const rout = require('./routes/route');
const cors = require("cors");
const upload = require('./controllers/uploadFile')


const app = express();
app.use(express.static('pics'));
//database connection
const con = require('./Config/db_conn');

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use(rout);
app.use(upload)

//error
app.use((req, res, next) => {
    var err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err)
    const status = err.status || 500;
    const error = err.message || 'Error processing your request';
    res.status(status).send({
        error
    })
})

module.exports = app;