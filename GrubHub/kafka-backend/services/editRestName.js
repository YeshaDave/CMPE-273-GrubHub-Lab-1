var {Owner} = require('../Models/owner');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var email = msg.email;
    var rest = msg.rest

    //console.log(fName);
    
    Owner.updateOne({email : email},
        {$set: {rest : rest}},
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