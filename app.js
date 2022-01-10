var express = require('express');
var app = express();
app.listen(19991, function() {
   console.log("Start! express server on port 3000");
});

app.get('/', function(req,res){
    res.send("<h1>Hi Friend!</h1>");
});