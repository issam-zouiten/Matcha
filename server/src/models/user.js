const con = require('../Config/db_conn');
const queries = require("../Config/queries");
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;
const DELETE = queries.DELETE;
var jwt = require('jsonwebtoken');
module.exports = {
    Register: function (firstname, lastname, username, email, password) {
        con.query(INSERT.AddUser, [firstname, lastname, username, email, password], (err, res) => {
            if (err) {
                throw err;
            }
        });
    },
    getUsers: function (id) {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.GetUsers, [id,id,id,id], (err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(JSON.parse(JSON.stringify(res)));
                }
            });
        })
    },
    getUser: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(SELECT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else {
                    const data = JSON.parse(JSON.stringify(res));
                    if (data[0]) {

                        this.getUserTags(data[0].id)
                            .then(async (response) => {
                                tags = response;
                                (data[0].date_birthday) ? data[0].date_birthday = data[0].date_birthday.split('T')[0] : data[0].date_birthday;
                                data[0].tags = tags;
                                let token = await jwt.sign(data[0], 'SecretKey');
                                data[0].token = token;
                                resolve(data[0]);
                            }).catch((error) => { console.log(error) })
                    } else {
                        resolve(null)
                    }
                }
            });
        })
    },

    notverfid: function (email) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.notverfid, email, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },

    update: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE[type], value, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },

    updateInfo: function (lastname, firstname, gender, Sexual_orientation, date_birthday, Age, biography, id) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.UpdateInfo, [lastname, firstname, gender, Sexual_orientation, date_birthday, Age, biography, id], (err, res) => {
                if (err)
                    reject(err);
                else {
                    resolve(res);
                }
            });
        })
    },

    TagCreatedNbr: function (id) {
        return new Promise((resolve, reject) => {
            con.query(SELECT.TagCreatedNbr, [id], (err, res) => {
                if (err)
                    reject(err);
                else {
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    checkTags: function (tag) {
        return new Promise((resolve, reject) => {
            con.query(SELECT.CheckTag, [tag], (err, res) => {
                if (err)
                    reject(err);
                else {
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    deleteUserTag: function (id) {
        return new Promise((resolve, reject) => {
            con.query(DELETE.DeleteUserTags, [id], (err, res) => {
                if (err)
                    reject(err);
                else {
                    resolve(res);
                }
            });
        })
    },

    getTags: function () {
        return new Promise((resolve, reject) => {
            con.query(SELECT.GetTags, (err, res) => {
                if (err)
                    reject(err);
                else {
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    getTagId: function (tag) {
        return new Promise((resolve, reject) => {
            con.query(SELECT.GetTagId, [tag], (err, res) => {
                if (err)
                    reject(err);
                else {
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    getUserTags: function (id) {
        return new Promise((resolve, reject) => {
            con.query(SELECT.GetUserTag, [id], (err, res) => {
                if (err)
                    reject(err);
                else {
                    const resArray = JSON.parse(JSON.stringify(res))
                    let options = [];
                    Object.keys(resArray).forEach(function () {
                        for (var i = 0; i < resArray.length; i++) {
                            options[i] = {
                                value: resArray[i].tag,
                                label: resArray[i].tag,
                            };
                        }
                    });
                    if (options.length > 0)
                        resolve(options);
                    else
                        resolve(null);
                }
            });
        })
    },
    insertUserTag: function (id, tag) {
        return new Promise((resolve, reject) => {
            con.query(INSERT.InsertUserTag, [id, tag], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },

    createTag: function (tag, id) {
        return new Promise((resolve, reject) => {
            con.query(INSERT.CreateTag, [tag, id], (err, res) => {
                if (err)
                    reject(err);
                else {

                    resolve(res);
                }
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
    delete: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(DELETE[type], value, (err, res) => {
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
    ResetPassword: function (password, token) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.ResetPassword, [password, token], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    insert: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(INSERT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },
};