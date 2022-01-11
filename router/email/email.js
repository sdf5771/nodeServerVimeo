var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var path = require('path');

//DataBase Setting
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '520496',
    database : 'email'
});

connection.connect();

//Router
router.post('/form', function(req,res){
    console.log(req.body.email);
    res.render('email.ejs', {'email' : req.body.email});
   // res.send(`<h1> welcome ! ${req.body.email}</h1>`);
});

router.post('/ajax', function(req, res){
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('SELECT name FROM user WHERE email="' + email + '"', function(err,rows){
        if(err) throw err;
        if(rows[0]){
            responseData.result= "ok";
            responseData.name= rows[0].name;
            console.log('DataBase responese : ' + rows[0].name);
        }else{
            responseData.result= "none";
            responseData.name= "";
        }
        //console.log('The solution is: ', rows[0].solution);
        res.json(responseData);
    });
}); 

module.exports = router;