var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var stringMath = require('string-math');
// app.set('view engine', 'ejs');


app.use(cors({ origin: 'http://localhost:3003', credentials: true }));

app.use(session({
    secret              : 'cmpe273_kafka_passport_mongo',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.use(cookieParser()); 
let authFlag1 = false;  


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/operation', function (req, res, err) {
  console.log("In Calculations");
  var num = req.body.num;

  console.log("num",num)
  var result = stringMath(num)
  console.log("result", result)
  if(!err){
  res.status(201,{
    'Content-Type' : 'application/json'
    });
  res.end(JSON.stringify(result));
}else{

}

  
})





app.listen(3002);
console.log("Server Listening on port 3002")