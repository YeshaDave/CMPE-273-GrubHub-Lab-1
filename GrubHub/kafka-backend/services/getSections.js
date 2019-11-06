var { Sections } = require('../Models/sections');
var { Owner } = require('../Models/owner')


function handle_request(msg, callback) {
    var res = {};


    console.log("In handle request:" + JSON.stringify(msg));
    var rName = msg.rName
    //console.log(fName);
    var results11 = [];

    Sections.find({ rName: rName },
        function (err, results, fields) {
            //console.log("Results: ",results)
            if (results != null) {
                callback(msg, results);
            }
            else{
                callback(msg,"Error")
            }
        })



}

exports.handle_request = handle_request;