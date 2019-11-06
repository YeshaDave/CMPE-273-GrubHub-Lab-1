var mongoose = require('mongoose');

var Sections = mongoose.model('sections',{
    section : {
        type : String 
    },
    rName : {
        type : String
    }
});

module.exports = {Sections};

