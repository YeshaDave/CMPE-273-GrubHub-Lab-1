var mongoose = require('../controllers/connection');

var Buyer = mongoose.model('buyer',{
    fName :{
        type : String
    },
    lName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String 
    },
    phone : {
        type : String
    }
});

module.exports = {Buyer};

