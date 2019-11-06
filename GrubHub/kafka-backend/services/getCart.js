var {Orders} = require('../Models/orders');

function handle_request(msg, callback){
    var res = {};
    
    console.log("In handle request:"+ JSON.stringify(msg));

    var total = 0;
    var obj = {};
    Orders.find({orderID : msg.orderID}, function (err, results, fields) {
        if (results != null) {
            console.log(results)
            results.forEach(element => {
                total = +total + +element.price 
            });
            Object.assign(results, {total: total});
            console.log("total: ",total)
            console.log("Results :", results)
            callback(msg,results);

        }
        else {
            callback(msg,"Error");
        }
    })

}

exports.handle_request = handle_request;