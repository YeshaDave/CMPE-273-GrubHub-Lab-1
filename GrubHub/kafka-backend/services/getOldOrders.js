var {Menu} = require('../Models/menu');

function handle_request(msg, callback){
    var res = {};
    
    console.log("In handle request:"+ JSON.stringify(msg));


Menu.find({$and :[
    {rName : item.rName,
    status : "delivered"}]}, function (err, results, fields) {
    //console.log(results)
    // console.log(results[1].section)
    // console.log("length",results.length)
    console.log(results)
    if (results != null) {
        console.log(results.length)
        var itemL = Object.values(results)
        console.log(itemL)
        var obj = {};
        console.log(typeof(itemL))
        console.log("length: ",itemL.length)
        for (let l = 0; l < itemL.length; l++) {
            console.log("index",l)
            console.log("item at position :",itemL)
            var key = itemL[l].orderID;
            console.log("key",key)
            var itemArr = [];
            //console.log("key",key)
            //console.log("results.section",results[l].section)
            
            if (Object.keys(obj).includes(key)) {
                //itemArr.push(obj)
                itemArr = obj[key]
                itemArr.push(results[l])
               // console.log("item array",itemArr)
            }else{
                console.log("in else")
                obj[key] = [results[l]]
                //console.log(Object.keys(obj))
            }
        }
        console.log(obj)
        callback(msg,obj);

    }
    else {
        callback(msg,"Error");
    }
})

}

exports.handle_request = handle_request;