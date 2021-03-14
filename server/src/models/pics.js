const con = require('../Config/db_conn');
const queries = require("../Config/queries");
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;
const DELETE = queries.DELETE;
module.exports = {
    insertPic : function (value) {
        let isProfilePic = 0;
        return new Promise ((resolve, reject) => {
            con.query(SELECT.GetPics, [value.user_id],(errr,ress) => {
                if(ress)
                {
                    if(ress.length == 0)
                    isProfilePic = 1;
                    con.query(INSERT.AddPic, [value.user_id,value.path,isProfilePic],(err,res) => {
                        if(err)
                            reject(err);
                        else
                            resolve(true);
                    }); 
                }
            });  
        })            
    },
    getPics : function (user_id) {
        return new Promise ((resolve, reject) => { 
            con.query(SELECT.GetPics, [user_id],(err,res) => {
                // console.log("mochikla hakki")
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            }); 
        })            
    },
    getProfilPic : function (user_id) {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.GetProfilePic, [user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            }); 
        })            
    },
    delPics : function (data) {
        return new Promise ((resolve, reject) => {
            con.query(DELETE.delPics, [data.img_id,data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(res);
                }
            }); 
        })            
    },
    setProfilePic : function (data) {
        return new Promise ((resolve, reject) => {
            con.query(UPDATE.resetProfilePic, [data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    con.query(UPDATE.setProfilePic, [data.img_id,data.user_id],(err,res) => {
                        if(err)
                            reject(err);
                        else
                            resolve(res);
                    }); 
                }
            }); 
        }) 
    },
    setFirstProfilePic : function (data) {
        return new Promise ((resolve, reject) => {
            con.query(UPDATE.setFirstProPic, [data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(res);
                }
            }); 
        }) 
    }
};