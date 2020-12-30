var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "segredo123",
    database: "db_sfc_cgj"
});

router.post('/login', async function(req, res, next) {
    try {
        console.log("req.body = " + req.body);
        let {email, password} = req.body;
        console.log("email = " + email);
        console.log("password = " + password);
        //const hashed_password = md5(password.toString());
        const sql = `SELECT * FROM oficiais WHERE e_mail_principal = ? AND senha_oficial = ?`;
        con.query(sql, [email,password],function(err,result,fields) {
            if (err) {
                res.send({status: 0, data: err});
            } else {
                let token = jwt.sign({data: result}, 'secret');
                res.send({status: 1, data: result, token: token});
            }
        });
    } catch (error) {
        res.send({status: 0, error: error});
    }
});

module.exports=router;