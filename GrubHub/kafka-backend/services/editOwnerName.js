var {Owner} = require('../Models/owner');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var name = msg.name;
    var email = msg.email

    console.log(fName);
    
    Buyer.updateOne({email : email},
        {$set: {fName : fName}},
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