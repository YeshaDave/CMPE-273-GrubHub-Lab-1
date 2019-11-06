var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@52.53.224.192:27017/grubhub', { useNewUrlParser: true},{userMongoClient : true}, {userUnifiesTopology : true});

module.exports = mongoose;