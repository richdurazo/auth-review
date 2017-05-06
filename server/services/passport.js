const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
// a strategy attempts to authenticate a user in a particular way (JWT in this case)
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for JWT strategy 
const jwtOptions = {
    // we are are telling jwtStrategy that whenenever a request comes in and we want passport to handle it 
    // it needs to look at the request header (authorization) to find the token
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create JWT strategy
// payload is the decoded jwt token 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
// see if the user id and the payload exits in our db
// if yes, call done and let passport know who the user is
// otherwise, call done without user obj
    User.findById(payload.sub, function (err, user) {
        if (err) { 
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// passport use our strategy

passport.use(jwtLogin);