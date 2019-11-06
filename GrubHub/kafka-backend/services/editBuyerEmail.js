var {Buyer} = require('../Models/buyer');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var email2 = msg.email2;
    var email1 = msg.email1

    //console.log(fName);
    
    Buyer.updateOne({email : email1},
        {$set: {email : email2}},
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