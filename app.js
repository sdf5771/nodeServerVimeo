var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

app.listen(19991, function() {
   console.log("Start! express server on port 19991");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // encoding 된 데이터 처리(아스키코드 형태의 데이터만 받을 수 있는데 다른 문자열로 치환)
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(router); // path가 없을 때 '/' 생략 가능.