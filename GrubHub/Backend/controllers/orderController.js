var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
//var crypt = require('./crypt.js');

var connection = mysql.createConnection({
    host: "database-1.cjpg8vnddvnl.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "yesha123",
    port: "3306",
    database: "grubhub"
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server. of order controller');

});

exports.getOldOrders = (req,res) => {
    console.log("inside past orders");

    var rName = "A";
    var status = "delivered";
    var sql = "SELECT * FROM grubhub.order WHERE rName = "+mysql.escape(rName)+" AND status = "+mysql.escape(status)+";"
    console.log("backend")
    console.log(sql);


    connection.query(sql, function(err, results, fields){
    
        console.log("inside query")
        console.log(results)
        //var items = results.items.split(",");
        //console.log(results.items)
          if(results.length != 0){
              console.log("inside if success")
              
              res.status(200, {'Content-Type' : 'application/json'
          });
          res.send(results);
          }
          else{
              console.log("error")
              res.status(204,{'Content-Type' : 'application/json'});
              res.send("Error!!");
          }
    })
}


exports.getUpcomingOrders = (req,res) => {
    console.log("inside get upcoming orders");

    var rName = "A";
    var status = "delivered";
    var sql = "SELECT * FROM grubhub.order WHERE rName = "+mysql.escape(rName)+" AND status != "+mysql.escape(status)+";"
    console.log("backend")
    console.log(sql);


    connection.query(sql, function(err, results, fields){
    
        console.log("inside query")
        console.log(results)
        //var items = results.items.split(",");
        //console.log(results.items)
          if(results.length != 0){
              console.log("inside if success")
              
              res.status(200, {'Content-Type' : 'application/json'
          });
          res.send(results);
          }
          else{
              console.log("error")
              res.status(204,{'Content-Type' : 'application/json'});
              res.send("Error!!");
          }
    })
}


exports.changeStatus = (req, res) => {

    var oId = req.body.id;
    var status = req.body.status

    var sql = "UPDATE grubhub.order SET status = "+mysql.escape(status)+" WHERE id = "+mysql.escape(oId)+";"
    console.log(oId)
    console.log(status)
    console.log(sql)
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


  exports.deleteOrder = (req, res) => {

    var oId = req.body.id;
    

    var sql = "DELETE from grubhub.order WHERE id = "+mysql.escape(oId)+";"
    console.log(oId)
    console.log(status)
    console.log(sql)
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