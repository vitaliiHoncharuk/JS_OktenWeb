let passport = require('passport');
let UserModel = require('../models/User');
let LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (_id, done) {
    try {
        let user = await UserModel.findById(_id);
        done(null, user);
    } catch (e) {
        done(e);
    }
});

let s = new LocalStrategy(
    {
        passwordField: 'password',
        usernameField: 'login',
        passReqToCallback: true
    },
    async function (req, login, password, done) {
        try {
            let user = await UserModel.findOne(
                {
                    login: login,
                    password: password
                }
            );
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (e) {
            done(e);
        }
    }
);

passport.use('login', s);
