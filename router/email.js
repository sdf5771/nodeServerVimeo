var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.post('/form', function(req,res){
    //get : req.param('email');
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