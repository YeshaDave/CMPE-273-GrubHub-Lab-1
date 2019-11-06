var crypt = require('./crypt1');
var {Buyer} = require('../Models/buyer');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var buyer = {
        "fName":msg.fName,
        "lName":msg.lName,
        "email":msg.email,
        "password":msg.password,
        "phone":msg.phone,
      }
    console.log(buyer);
    
    Buyer.findOne({email : buyer.email}, function(err, result){
        if(err){
          console.log("Error in signup", +err)
          callback(msg,"Error");
        }
        else if(result){
          console.log("User exists")
          callback(msg,"User exists");
        }
        else{
          crypt.createHash(buyer.password, function (res1) {
            buyer.password = res1;
            console.log("res",res1)
                 var Buyer1 = new Buyer({
                    fName : buyer.fName,
                    lName : buyer.lName,
                    email : buyer.email,
                    password : res1,
                    phone : buyer.phone
                 })

                 Buyer1.save().then((buyer) => {
                   console.log("Signing up", buyer)
                  //  callback(null, buyer)
                 })
                 callback(msg,"Success");
            })
        }
    })






    // mongo.connect(function(err,db){
    //     if(err){
    //         callback(null,"Cannot connect to db");
    //     }
    //     else{
            // console.log('Connected to mongodb');
            // var query = {Email : msg.username};
            // var dbo = db.db('usersignup');
            // dbo.collection("usersignup").find(query).toArray(function(err,result){
            //     if(err){
            //         //throw err;
            //         callback(err,"Error");
            //     }
            //     if(result.length > 0){
            //         var hash = result[0].Password;
            //         bcrypt.compare(msg.password,hash,function(err,doesMatch){
            //             if(doesMatch){
            //                 console.log("Inside result.length",result[0].userID);
                          
            //                 callback(null,result);
            //             } else {
            //                 callback(null,[]);
            //             }
            //         });
            //     }
            //     else{
            //         callback(null,[]);
            //     }
            // });
      //  }
    }

    /*if(msg.username == "bhavan@b.com" && msg.password =="a"){
        res.code = "200";
        res.value = "Success Login";

    }
    else{
        res.code = "401";
        res.value = "Failed Login";
    }
    callback(null, res);*/


exports.handle_request = handle_request;