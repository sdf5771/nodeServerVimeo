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
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../../public/join.html'));
});

router.post('/', function(req,res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var passwd = body.password;

    var query = connection.query(`INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${passwd}")`, function(err, rows){
        if (err) throw err;
        console.log('create user');
    });
    
});

module.exports = router;