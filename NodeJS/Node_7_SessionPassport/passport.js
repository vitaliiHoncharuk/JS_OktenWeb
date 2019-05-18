const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
let UserModel = require('./models/User');

require('./config/passport_config');
let passport = require('passport');

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'sw3irjwer6546786a7dasd',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
    res.render('index', {
        user: req.user
    });
});

app.post('/register', async function (req, res) {
    let alreadyExists = await UserModel.countDocuments({login: req.body.login});
    if (alreadyExists > 0) {
        res.redirect('/');
    } else {
        await UserModel.create(req.body);
        res.redirect('/');
    }
});

app.post('/login', passport.authenticate('login'), function (req, res) {
    res.redirect('/');
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listening...');
});
