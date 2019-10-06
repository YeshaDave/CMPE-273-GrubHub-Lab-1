'use strict';
var bcrypt = require('bcrypt-nodejs');

var crypt1 = {};

crypt1.createHash = function (data, successCallback, failureCallback) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            failureCallback(err);
            return;
        }
        bcrypt.hash(data, salt, null, function (err, hash) {
            if (err) {
                failureCallback(err);
                return;
            }
            successCallback(hash);
        });
    });
};

crypt1.compareHash = function (data, encrypted, successCallback, callback1) {
    bcrypt.compare(data, encrypted, function (err, isMatch) {
        if (err) {
            callback1(err);{
            return;}
        }
        successCallback(err, isMatch);
    });
};

module.exports = crypt1;
