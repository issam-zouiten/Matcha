const express = require('express');
const bodyParser = require("body-parser");
const rout = require('./routes/route');
const cors = require("cors");
const session = require("express-session");


const app = express();

const cookieParser = require("cookie-parser");


//database connection
const con = require('./Config/db_conn');

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

module.exports = app;