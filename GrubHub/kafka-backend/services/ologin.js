var crypt = require('./crypt1');
var {Owner} = require('../Models/owner');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var owner = {
        "email":msg.email,
        "password":msg.password
      }
    console.log(owner);
    var b = {}
    Owner.findOne({email : owner.email}, function(err, result){
        if(err){
            console.log("Error", +err)
            callback(msg,"Error");
          }
          else if(result != null ){
            crypt.compareHash(owner.password, result.password, function (err, isMatch) {
                if (isMatch && !err) {
                    b.email = result.email;
                    b.name = result.name;
                    b.restaurantName = result.restaurantName;
                    //b.phone = result.phone;
                    b.zipCode = result.zipCode
                    console.log("logged in")
                    callback(msg,b);
                } else {
                    console.log("match not found")
                    // callback(null, "Email or Password does not match!");
                    callback(msg,"Match not found");
                }
            }, function (err) {
                if (err) {
                    console.log(err)
                }
            }
        )} 
        else{
            console.log("user does not exist");
            callback(msg,"User does not exist");
        }
    })
}

exports.handle_request = handle_request;