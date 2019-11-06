var mongoose = require('mongoose');

var Menu = mongoose.model('menu',{
    name :{
        type : String
    },
    desc : {
        type : String
    },
    price : {
        type : String
    },
    section : {
        type : String 
    },
    rName : {
        type : String
    }
});

module.exports = {Menu};

