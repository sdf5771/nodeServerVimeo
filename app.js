var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(19991, function() {
   console.log("Start! express server on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // encoding 된 데이터 처리(아스키코드 형태의 데이터만 받을 수 있는데 다른 문자열로 치환)

//url routing
app.get('/', function(req,res){
    //res.send("<h1>Hi Friend!</h1>");
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/main', function(req,res){
    //res.send("<h1>Hi Friend!</h1>");
    res.sendFile(__dirname + '/public/main.html');
});

app.post('/email_post', function(req,res){
    //get : req.param('email');
    console.log(req.body.email);
    res.send(`<h1> welcome ! ${req.body.email}</h1>`);
});