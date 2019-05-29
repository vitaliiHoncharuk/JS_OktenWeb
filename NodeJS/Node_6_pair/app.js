const express = require('express');
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/users");

// const session = require("express-session");

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/SocialNetwork',{ useNewUrlParser: true});

const createBratishka = require("./controllers/user/createUser");






app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/user',createBratishka);

app.get(`/user/:id`,async function (req,res,next) {
    try {
        let user = await userModel.findOne({ _id : req.params.id });
        console.log(user);
        console.log(!user);
        user ? res.json(user) : res.json("Not found!");
    }

    catch (e) {
        next(e);
    }
});

app.get(`/users`,async (req,res)=>{
    res.json(await userModel.find({}));
});

app.get(`/search`,(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'searchPeople.html'));
});

app.get(`/people`,async (req,res)=>{
    if (req.query.search === "all"){
        let users= await userModel.find({});
        res.json(users);
    }
   else {
        let strSearch = req.url.split('=')[1];
        console.log(strSearch);
        find(strSearch)
            .then(e => {
                console.log(e);
                res.json(e);
            });
    }
});

app.listen(3000, function () {
    console.log('Listening...');
});

async function find (el) {
    let found = await userModel.find({});
    if (!el){
        return found;
    }
    else return found.filter(e => e.login.includes(el));
}

app.use((err ,req , res) => {
    console.log(err);
    res.status(404);
});
