var {Buyer} = require('../Models/buyer');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var phone = msg.phone;
    var email = msg.email

    //console.log(fName);
    
    Buyer.updateOne({email : email},
        {$set: {phone : phone}},
        function(err, result){
    if(err){
        callback(msg,"Error");
    }
    else{
        callback(msg,"Success");
    }
}
); 

}

exports.handle_request = handle_request;