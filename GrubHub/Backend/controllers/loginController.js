var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var crypt = require('./crypt.js');


var connection = mysql.createConnection({
    host: "database-1.cjzfppa66uuh.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "yesha123",
    port: "3306",
    database: "grubhub"
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');

});



exports.buyerlogin = (req, res) => {

    console.log("Inside login post");

    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);
    // var email = "d@a.com";
    // var password = "dkd";
    //var table = req.body.table;
    
    var sql = "SELECT * FROM buyer WHERE email = " + mysql.escape(email);
    var b = {}
    connection.query(sql, function (err, results) {
        if (err) {
            console.log("user does not exist")
            callback(err, " User does not exist ... ")
        } else {
            if (results.length > 0) {
                //var v2 = crypt.createHash(password)
                //console.log(v2)
                crypt.compareHash(password, results[0].password, function (err, isMatch) {
                    //console.log(' The entered password and db : ', msg.password, ' ', results[0].password)
                    if (isMatch && !err) {
                        b.email = results[0].email;
                        b.fName = results[0].fName;
                        b.lName = results[0].lName;
                        b.phone = results[0].phone;
                        console.log("logged in")
                        res.status(201, {
                            'Content-Type': 'application/json'
                        });
                        res.send(b);
                    } else {
                        console.log("match not found")
                        // callback(null, "Email or Password does not match!");
                        res.writeHead(202, {
                            'Content-Type': 'application/json'
                        });
                        res.end("Credentials don't match");
                    }
                }, function (err) {
                    if (err) {
                        console.log("callback")
                        callback(null, []);
                    }
                })
            }
            else {
                console.log("user does not exist");
                res.writeHead(205, {
                    'Content-Type': 'application/json'
                });
                res.end("User does not exist");
            }
        }
    })
}






// exports.ownerlogin = (req, res) => {
//     console.log("Inside owner login post");

//     var email1 = req.body.email;
//     var password1 = req.body.password;
//     console.log(email1);
//     console.log(password1);
//     // var email = "d@a.com";
//     // var password = "dkd";


//     var sql1 = "SELECT * FROM grubhub.owner WHERE email = " + mysql.escape(email1) + ";"
//     var b1 = {}
//     console.log(sql1)
//     connection.query(sql1, function (err, results1) {
//         if (err) {
//             console.log("user does not exist")
//             callback(err, " User does not exist ... ")
//         } else if (results1.length > 0) {
//             // var v1 = crypt.compareHash(password1)
//             //nsole.log(v1)
//             console.log(results1[0].password)
//             crypt.compareHash(password1, results1[0].password, function (err, isMatch) {
//                 console.log("match", isMatch)
//                 //console.log(' The entered password and db : ', msg.password, ' ', results[0].password)
//                 if (isMatch && !err) {
//                     b1.email = results1[0].email;
//                     b1.name = results1[0].name;
//                     b1.restaurantName = results1[0].restaurantName;
//                     b1.zipCode = results1[0].zipCode;
//                     console.log("logged in")
//                     console.log(b1)
//                     res.status(201, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.send(b1);
//                 } else {
//                     console.log("match not found")
//                     // callback(null, "Email or Password does not match!");
//                     res.writeHead(202, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.end("Credentials don't match");
//                 }
//             }), function (err) {
//                 if (err) {
//                     console.log("callback")
//                     callback(null, []);
//                 }

//             }
//         }
//         else {
//             console.log("user does not exist");
//             res.writeHead(205, {
//                 'Content-Type': 'application/json'
//             });
//             res.end("User does not exist");
//         }
//     })
// }










//                 if(results[0].password == password){
//                     res.writeHead(201,{
//                         'Content-Type' : 'application/json'
//                         });
//                         res.end("Success");
//                 }
//                 else{
//                     res.writeHead(202,{
//                         'Content-Type' : 'application/json'
//                     });
//                     res.end("Credentials don't match");
//                 }
//             }

//             else{
//             res.writeHead(203,{
//             'Content-Type' : 'application/json'
//             });
//             res.end("Email does not exist!");
//         }
//         }
//     });
//   }

// app.post('/ownerlogin',function(req,res){
//     console.log("Inside login post");

//     var email = req.body.email;
//     var password = req.body.password;

//     var sql = "SELECT * FROM owner WHERE email = "+mysql.escape(email)+" AND password = "+mysql.escape(password);

//     connection.query(sql, function(err,results, fields){
//         if(err){
//             res.writeHead(200,{
//             'Content-Type' : 'application/json'
//             });
//             console.log(err);
//             res.end("error");

//         }
//         else{
//             if(results.length>0){
//                 if(results[0].password == password){
//                     res.writeHead(201,{
//                         'Content-Type' : 'application/json'
//                         });
//                         res.end("Success");
//                 }
//                 else{
//                     res.writeHead(202,{
//                         'Content-Type' : 'application/json'
//                     });
//                     res.end("Credentials don't match");
//                 }
//             }

//             else{
//             res.writeHead(203,{
//             'Content-Type' : 'application/json'
//             });
//             res.end("Email does not exist!");
//         }
//         }
//     });

// })

//connection.end();

// if(err){
//     res.writeHead(400,{
//     'Content-Type' : 'application/json'
//     });
//     console.log(err);
//     res.end("error");
// }
// else{
//     if(results.length>0){
//         console.log(results)
//         crypt.compareHash(password, results[0].password, function (err, isMatch) {
//             console.log(isMatch);
//         if(!isMatch && !err){
//             res.writeHead(202,{
//                 'Content-Type' : 'application/json'
//                 });
//                 res.end("Credentials don't match");
//         }
//         else{
//             res.status(201).json({
//                 email: results[0].email
//             });
//         }
//      })
//     }
//     else{
//     res.writeHead(203,{
//     'Content-Type' : 'application/json'
//     });
//     res.end("Email does not exist!");
//     }
// }