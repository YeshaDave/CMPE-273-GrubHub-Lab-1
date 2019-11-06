var {Orders} = require('../Models/orders');

function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));

    var item = {
        "orderID": msg.orderID,
        "item" : msg.itemList,
        "price": msg.price,
        "status": "new",
        "bEmail": msg.email,
        "bName": msg.bName,
        "rName": msg.rName
    }
    console.log(item);
    
            var item1 = new Orders({
                orderID : item.orderID,
                item : item.item,
                price : item.price,
                bName : item.bName,
                status : item.status,
                bEmail : item.bEmail,
                rName : item.rName
             })

             item1.save().then((orders) => {
                console.log("Placing order", orders)
               //  callback(null, buyer)
              })
              callback(msg,"Success");

}
exports.handle_request = handle_request;