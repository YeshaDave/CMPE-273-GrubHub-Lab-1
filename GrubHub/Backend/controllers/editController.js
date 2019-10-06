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


  exports.editBuyerPhone = (req, res) => {

    var phone = req.body.phone;
    var email = req.body.email

    var sql = "UPDATE buyer SET phone = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(email);

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




  exports.editBuyerName = (req, res) => {

    var fName = req.body.firstname;
    var lName = req.body.lastname;
    var email = req.body.email
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";

    var sql = "UPDATE buyer SET fName = "+mysql.escape(fName)+" , lName = "+mysql.escape(lName)+" WHERE email = "+mysql.escape(email);

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



  exports.editBuyerEmail = (req, res) => {

    var email1 = req.body.email1;
    // var fName = "R";
    // var lName = "V";
    //var password = req.body.currentPassword;
    //var id = "2";
    var email2 = req.body.email2

    var sql = "UPDATE buyer SET email = "+mysql.escape(email1)+" WHERE email = "+mysql.escape(email2);

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
