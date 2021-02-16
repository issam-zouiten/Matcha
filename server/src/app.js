const express = require('express');
const bodyParser = require("body-parser");
const rout = require('./routes/route');
const cors = require("cors");
const session = require("express-session");


const app = express();

const cookieParser = require("cookie-parser");


//database connection
const con = require('./Config/db_conn');

//middlewares
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(rout);

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