// REVIEWED AND UPDATED

var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the Account model var family is the collection in the database from model accounts.js

//SHOULD IT BE email or user!!!!!!!!
var family = require('../models/accounts');
var settings = require('../passport/setting'); // get settings file

module.exports = function(passport) {
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = settings.secret;
passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
        family.findOne({ id: jwt_payload.id }, function(err, email) {
            if (err) {
                return done(err, false);
            }
            if (email) {
                done(null, email);
            } else {
                done(null, false);
            }
        });
    })
);
};
