var crypt = require('./crypt1');
var {Owner} = require('../Models/owner');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var owner = {
        "name":msg.name,
        "restaurantName":msg.restName,
        "email":msg.email,
        "password":msg.password,
        "zipCode":msg.zCode,
      }
    console.log(owner);
    
    Owner.findOne({email : owner.email}, function(err, result){
        if(err){
          console.log("Error in signup", +err)
          callback(msg,"Error");
        }
        else if(result){
          console.log("User exists")
          callback(msg,"User exists");
        }
        else{
          crypt.createHash(owner.password, function (res1) {
            owner.password = res1;
            console.log("res",res1)
                 var Owner1 = new Owner({
                  name : owner.name,
                  restaurantName : owner.restaurantName,
                  email : owner.email,
                  password : res1,
                  zipCode : owner.zipCode
                 })

                 Owner1.save().then((owner) => {
                   console.log("Signing up", owner)
                  //  callback(null, buyer)
                 })
                 callback(msg,"Success");
            })
        }
    })

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