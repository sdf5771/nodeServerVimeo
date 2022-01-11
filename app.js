var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var main = require('./router/main');
var email = require('./router/email');

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '520496',
    database : 'email'
});

connection.connect();

app.listen(19991, function() {
   console.log("Start! express server on port 19991");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // encoding 된 데이터 처리(아스키코드 형태의 데이터만 받을 수 있는데 다른 문자열로 치환)
app.set('view engine', 'ejs');

app.use('/main', main);
app.use('/email', email);

//url routing
app.get('/', function(req,res){
    //res.send("<h1>Hi Friend!</h1>");
    res.sendFile(__dirname + '/public/main.html');
});

