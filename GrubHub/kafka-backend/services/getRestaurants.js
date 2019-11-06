var { Menu } = require('../Models/menu');
var { Owner } = require('../Models/owner')


function handle_request(msg, callback) {
    var res = {};


    console.log("In handle request:" + JSON.stringify(msg));
    var item = msg.item
    //console.log(fName);
    var results11 = [];

    Menu.find({ name: item },
        function (err, results, fields) {
            //console.log("Results: ",results)
            if (results != null) {
                callback(msg, results);
            }
            else{
                callback(msg,"Error")
            }
                //var restaurants = JSON.parse(results)
                // res.status(200, {
                //     'Content-Type': 'application/json'
                // });
                // res.send(results);
                //var sql2 = "SELECT * FROM grubhub.owner WHERE restaurantName =" + mysql.escape(results[0].rName)
                //console.log(sql2)results.array.forEach(element => {

                // var promise1 = new Promise(function(resolve, reject){
                //     resolve(
                //         results.forEach(element => {
                //             console.log(element)
                //             Owner.findOne({ restaurantName: element.rName }, function (err, results1, fields) {
                //                 if (results1 != null) {
                //                     results11.push(results1)
                //                     console.log(results1)
                //                     // callback(msg, results11);
                //                 }
                //             })
                //             console.log("here")
                //         })
                //     )
                // })

                // promise1.then(function () {
                //     console.log("final result" + results11);
                   
                //     // expected output: "foo"
                // });
                // results.forEach(element => {
                //     console.log(element)
                //     Owner.findOne({ restaurantName: element.rName }, function (err, results1, fields) {
                //         if (results1 != null) {
                //             results11.push(results1)
                //             console.log("details: ", results11)
                //             callback(msg, results11);
                //         }
                //     })
                // });
                // if (results11 != null) {
                //     console.log("in if")
                //     callback(msg, results11);
                // }
                // else {
                //     callback(msg, "Error");
                // }
            
        })



}

exports.handle_request = handle_request;