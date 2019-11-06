'use strict';
var chai = require('chai'), chaiHttp = require('chai-http')
chai.use(chaiHttp);
const expect = require('chai').expect;
const app = require('../index.js');
var supertest = require("supertest");
global.request = supertest(app);
var user_id = '';
var phone = 11111111;

var email = "test" + Math.random() + '@gmail.com';

describe("Test Case", function () {
    it('Sign Up buyer Test', function () {
        request.post('/buyerSignup1')
            .send({
                fName: "test",
                lName: "test",
                email: "tt@a.com",
                password: '111',
                phone: "1111111"
            })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);

            });
    })

    it('Sign Up owner Test', function () {
        request.post('/ownerSignup1')
            .send({
                name: "y",
	            restaurantName: "d",
	            email: "y@d.com",
	            password: "111",
	            zipCode: "112233"

            })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);

            });
    })

    
    it('Log In buyer Test', function () {
        request.post('/buyerLogin1')
            .send({
                email: "tt@a.com",
                password: "111",
            })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
            });
    })

    it('Log In owner Test', function () {
        request.post('/ownerLogin1')
            .send({
                email: "y@d.com",
                password: "111",
            })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
            });
    })


    it('Search for restaurants by food name Test', function () {
        request.post('/getRestaurants1')
            .send({
               item: 'pizza'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
            });
    })

    

})

