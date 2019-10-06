var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var crypt = require('./crypt');


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



exports.buyerSignup = (req,res)=>{

    console.log("Inside login post");
    

    var buyer={
        "fName":req.body.fName,
        "lName":req.body.lName,
        "email":req.body.email,
        "password":req.body.password,
        "phone":req.body.phone,
      }
    console.log(buyer);

    var sql1 = "SELECT * FROM buyer WHERE email = "+mysql.escape(buyer.email)+";"

    connection.query(sql1, function(err, results, fields){
        if(results.length != 0){
            res.status(202,{
                'Content-Type' : 'application/json'
                });
                console.log("email exists");
                res.send("Email exists");
        }
    else{
        crypt.createHash(buyer.password, function (res1) {
            buyer.password = res1;
            var sql = "INSERT INTO buyer SET "+mysql.escape(buyer) ;
    
    connection.query(sql, function(err,results, fields){
        if(err){
            res.writeHead(200,{
            'Content-Type' : 'application/json'
            });
            console.log(err);
            res.end("error");
        }

        else {
            res.writeHead(201,{
                'Content-Type' : 'application/json'
                });
                res.end("Success");
        }
    })
}
    
)}
})}


exports.ownerSignup = (req, res) => {
    console.log("Inside login post");


    var owner={
        "name":req.body.name,
        "restaurantName":req.body.restName,
        "email":req.body.email,
        "password":req.body.password,
        "zipCode":req.body.zCode,
        "cuisine": req.body.cuisine,
        "phone":req.body.phone
      }

    var sql1 = "SELECT * FROM grubhub.owner WHERE email = "+mysql.escape(owner.email)+";"
    connection.query(sql1, function(err, results, fields){
        if(results.length != 0){
            res.status(202,{
                'Content-Type' : 'application/json'
                });
                console.log("email exists");
                res.send("Email exists");
        }
    else{
      crypt.createHash(owner.password, function (res1) {
        owner.password = res1;
        var sql = "INSERT INTO owner SET "+mysql.escape(owner) ;
    
        connection.query(sql, function(err,results, fields){
            if(err){
                res.writeHead(200,{
                'Content-Type' : 'application/json'
                });
                console.log(err);
                res.end("error");
            }
    
            else {
                res.writeHead(201,{
                    'Content-Type' : 'application/json'
                    });
                    res.end("Success");
            }
        })
    }
    )}
})}
    
    
    
//       var sql = "INSERT INTO owner SET "+mysql.escape(owner) ;

//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");
//         }

//         else {
//             res.writeHead(201,{
//                 'Content-Type' : 'application/json'
//                 });
//                 res.end("Success");
//         }
//     })

// }


// app.post('/ownerSignup', function(req,res){

//     console.log("Inside login post");


//     var buyer={
//         "name":req.body.name,
//         "reataurantName":req.body.restName,
//         "email":req.body.email,
//         "password":req.body.password,
//         "zipCode":req.body.zCode
//       }

//     // var owner={
//     //     "name":"Tom",
//     //     "restaurantName":"Agave",
//     //     "email":"a@b.com",
//     //     "password":"tom",
//     //     "zipCode":"123456",
//     //   }

//     var sql = "INSERT INTO owner SET "+mysql.escape(owner) ;

//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");
//         }

//         else {
//             res.writeHead(201,{
//                 'Content-Type' : 'application/json'
//                 });
//                 res.end("Success");
//         }
//     })

// });





// app.listen(3002);
// console.log("Server Listening on port 3002")
// module.exports = app;