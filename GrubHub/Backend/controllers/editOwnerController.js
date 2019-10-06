var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host    : "database-1.cjzfppa66uuh.us-east-1.rds.amazonaws.com",
    user    : "admin",
    password: "yesha123",
    port    : "3306",
    database : "grubhub"
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
    
  });


  exports.editOwnerPhone = (req, res) => {

    var phone = req.body.phone;
    var email = req.body.email

    var sql = "UPDATE owner SET phone = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }



  exports.editOwnerName = (req, res) => {

    var name = req.body.name;
   
    var email = req.body.email
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";

    var sql = "UPDATE owner SET name = "+mysql.escape(name)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }


  exports.editRestName = (req, res) => {

    var rName = req.body.rest;
   
    var email = req.body.email
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";

    var sql = "UPDATE owner SET restaurantName = "+mysql.escape(rName)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }



  exports.editOwnerEmail = (req, res) => {

    var email1 = req.body.email1;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email2 = req.body.email2

    var sql = "UPDATE owner SET email = "+mysql.escape(email1)+" WHERE email = "+mysql.escape(email2);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }



  exports.editCuisine = (req, res) => {

    var cuisine = req.body.cuisine;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email = req.body.email

    var sql = "UPDATE owner SET cuisine = "+mysql.escape(cuisine)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }


  exports.editZip = (req, res) => {

    var zip = req.body.zip;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email = req.body.email

    var sql = "UPDATE owner SET zipCode = "+mysql.escape(zip)+" WHERE email = "+mysql.escape(email);

    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }
        else{
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
            res.end("Success");
        }
    });

  }