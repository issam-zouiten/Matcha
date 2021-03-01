const con = require('../Config/db_conn');
const queries = require("../Config/queries");
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;
// const DELETE = queries.DELETE;

module.exports = {
    Register: function (lastname, firstname, username, email, password) {
        con.query(INSERT.AddUser, [lastname, firstname, username, email, password], (err, res) => {
            if (err) {
                throw err;
            }
        });
    },
    getUser:  function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(SELECT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else {
                    const data = JSON.parse(JSON.stringify(res));
                    if (data[0]) {
                        resolve(data[0]);
                    } else {
                        resolve(null)
                    }
                }
            });
        })
    },
    update: function (type, value){
        return new Promise ((resolve, reject) => {
            con.query(UPDATE[type], value,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (JSON.parse(JSON.stringify(res)));
            });
        })
    },
    select: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(SELECT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },
    UpdatvfToken: function (email, token) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.UpToken, [token, email], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    verif: function (email) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.verif, email, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    non_verif: function (email) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.non_verif, email, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    ResetPassword : function (password, token) {
        return new Promise ((resolve, reject) => {
            con.query(UPDATE.ResetPassword, [password, token],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },
};