const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
let UserModel = require('./models/User');

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

app.get('/', function (req, res) {
    res.render('index', {
        user: req.session.user
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

app.post('/login', async function (req, res) {
    let user = await UserModel.findOne({
        login: req.body.login,
        password: req.body.password
    });
    if (user) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.redirect('/');
    }
});

app.get('/private', function (req, res) {
    if (req.session.user)
        res.end('Authenticated');
    else
        res.end('Not Authenticated');
});

app.get('/logout', function (req, res) {
    req.session.user = null;
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listening...');
});
