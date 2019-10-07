var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
//var cors = require('cors');
// app.set('view engine', 'ejs');
var mysql = require('mysql');
var connection = require('./config')


//   var menu = [
//     {"name" : "Fries", "price" : "3.5", "image" : "Author 1"},
//     {"name" : "Quesedilla", "price" : "4", "image" : "Author 2"},
//     {"name" : "Pizza", "price" : "10", "image" : "Author 3"}
// ]
exports.getMenu = (req, res) => {
    console.log("inside get menu");

    var rid = "1";

    var sql = "SELECT * FROM menu WHERE rid = " + mysql.escape(rid) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].section;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}




exports.getSections = (req, res) => {
    console.log("inside get sections");

    var rName = "ABC";

    var sql = "SELECT * FROM sections WHERE rName = " + mysql.escape(rName) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        if (results.length != 0) {
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(results);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}



exports.getRestaurants = (req, res) => {
    console.log("inside get sections");

    

    var sql = "SELECT * FROM owner;"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        if (results.length != 0) {
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(results);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}




exports.getMenu1 = (req, res) => {
    console.log("inside get menu");

    var rid = "1";

    var sql = "SELECT * FROM menu;"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].section;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}


exports.getMenu = (req, res) => {
    console.log("inside get menu");

    var rid = "1";

    var sql = "SELECT * FROM menu WHERE rid = " + mysql.escape(rid) + ";"
    console.log("backend")


    connection.query(sql, function (err, results, fields) {
        //console.log(results)
        // console.log(results[1].section)
        // console.log("length",results.length)
        if (results.length != 0) {
            var obj = {};
            for (let l = 0; l < results.length; l++) {
                console.log("index",l)
                var key = results[l].section;
                var itemArr = [];
                //console.log("key",key)
                //console.log("results.section",results[l].section)
                
                if (Object.keys(obj).includes(key)) {
                    //itemArr.push(obj)
                    itemArr = obj[key]
                    itemArr.push(results[l])
                   // console.log("item array",itemArr)
                }else{
                    console.log("in else")
                    obj[key] = [results[l]]
                    //console.log(Object.keys(obj))
                }
            }
            
            res.status(200, {
                'Content-Type': 'application/json'
            });
            res.send(obj);
        }
        else {
            res.status(204, { 'Content-Type': 'application/json' });
            res.send("Error!!");
        }
    })
}


exports.postMenu = (req, res) => {
    console.log("inside post menu")

    var item = {
        "name": req.body.name,
        "desc": req.body.desc,
        "image": req.body.image,
        "price": req.body.price,
        "section": req.body.section,
        "rName": req.body.rName
    }



    var sql = "SELECT * FROM menu WHERE rName = " + mysql.escape(rName) + ";"

    connection.query(sql, function (err, results, fields) {
        if (results.length != 0) {
            res.status(204, {
                'Content-Type': 'application/json'
            });
            res.send("Item exixts");
        }
        else {
            var sql1 = "INSERT INTO menu SET " + mysql.escape(item);

            connection.query(sql, function (err, results, fields) {
                if (err) {
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    console.log(err);
                    res.send("error");
                }

                else {
                    res.writeHead(201, {
                        'Content-Type': 'application/json'
                    });
                    res.send("Success");
                }
            })
        }
    })
}



exports.addSection = (req, res) => {
    console.log("inside post section")

    var item = {
        "section": req.body.section,
        //"rName": req.body.rName
        "rName": "ABC"
    }


    console.log(item.rName)
    var sql = "SELECT * FROM sections WHERE section = " + mysql.escape(item.section) + ";"
    console.log(sql)

    connection.query(sql, function (err, results, fields) {
        if (results.length != 0) {
            res.status(204, {
                'Content-Type': 'application/json'
            });
            res.send("Item exixts");
        }
        else {
            var sql1 = "INSERT INTO sections SET " + mysql.escape(item);
            console.log(sql1)
            connection.query(sql1, function (err, results, fields) {
                if (err) {
                    console.log("error")
                    res.status(200, {
                        'Content-Type': 'application/json'
                    });
                    console.log(err);
                    res.send("error");
                }

                else {
                    console.log("success")
                    res.status(201, {
                        'Content-Type': 'application/json'
                    });
                    res.send("Success");
                }
            })
        }
    })
}




exports.addtoCart = (req, res) => {
    console.log("ADD TO CART")

    var item = {
        "items" : req.body.itemList,
        "price": req.body.total,
        "status": "new",
    }

   

    
    
    console.log(items);

    //var sql1 = 

    var sql = "INSERT INTO `grubhub`.`order` (`bEmail`, `rName`, `items`, `total`, `status`, `address`) VALUES ("+ mysql.escape(email)+", "+ mysql.escape(rName)+", "+ mysql.escape(items)+", "+ mysql.escape(total)+", "+ mysql.escape(status)+", "+ mysql.escape(address)+");"

            console.log(sql)
            connection.query(sql, function (err, results, fields) {
                if (err) {
                    console.log("error")
                    res.status(200, {
                        'Content-Type': 'application/json'
                    });
                    console.log(err);
                    res.send("error");
                }

                else {
                    console.log("success")
                    res.status(201, {
                        'Content-Type': 'application/json'
                    });
                    res.send("Success");
                }
            
        }
    )
}





