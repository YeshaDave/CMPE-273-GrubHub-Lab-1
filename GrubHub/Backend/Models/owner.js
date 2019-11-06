var mongoose = require('../controllers/connection');

var Owner = mongoose.model('owner',{
    name :{
        type : String
    },
    restaurantName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String 
    },
    zipCode : {
        type : String
    }
});

module.exports = {Owner};

