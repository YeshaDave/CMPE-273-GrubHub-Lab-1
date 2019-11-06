var crypt = require('./crypt1');
var {Buyer} = require('../Models/buyer');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var buyer = {
        "email":msg.email,
        "password":msg.password
      }
    console.log("Buyer: ",buyer);
    var b = {}
    Buyer.findOne({email : buyer.email}, function(err, result){
        console.log("RESULTS : ",result)
        if(err){
            console.log("Error", +err)
            callback(msg,"Error");
          }
          else if(result != null ){
            crypt.compareHash(buyer.password, result.password, function (err, isMatch) {
                if (isMatch && !err) {
                    b.email = result.email;
                    b.fName = result.fName;
                    b.lName = result.lName;
                    b.phone = result.phone;
                    console.log("logged in")
                    callback(msg, b);
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