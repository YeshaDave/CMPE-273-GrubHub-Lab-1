var {Orders} = require('../Models/orders')

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var orderID = msg.orderID;
    var status = msg.status

    //console.log(fName);
    
    Orders.updateOne({orderID : orderID},
        {$set: {status : status}},
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