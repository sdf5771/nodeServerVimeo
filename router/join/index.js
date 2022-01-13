var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
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
    res.render('join.ejs');
});

passport.use('local-join', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback : true
    }, function(req, email, password, done){
        console.log('local-join callback called');
}));

// router.post('/', function(req,res){
//     var body = req.body;
//     var email = body.email;
//     var name = body.name;
//     var passwd = body.password;

//     var sql = {name: name, email: email, password: passwd};

//     var query = connection.query(`INSERT INTO user set ?`, sql, function(err, rows){
//         if (err) throw err;
//         console.log(`Create the User ID : ${rows.insertId}, Name : ${name} `);
//         res.render('welcome.ejs', {'name': name, 'id': rows.insertId});
//     });
    
// });

module.exports = router;