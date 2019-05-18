let express = require('express');
let path = require('path');
let app = express();
let mongoose = require("mongoose");
let userModel = require("./models/users");


app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/SocialNetwork',{useNewUrlParser: true});




async function addUser(login,mail,password) {
    await  userModel.create({
            login: login,
            mail: mail,
        password: password
    });
}



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/user', function (req, res) {
    const {login,mail,password}=req.body;
    if(!login && !password && !mail) res.json("Something went wrong,can't add user! Provide full info...");
    else {
        addUser(login,mail,password).then();
        res.json(`Your login ${login} and password ${password} have been added! Please,wait...`);
    }
});

// app.get(`/user/:id`,function (req,res) {
//     res.json(arr[req.url[req.url.length-1]]);
// });

app.get(`/users`,async (req,res)=>{
    res.json(await userModel.find({}));
});

app.get(`/search`,(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'searchPeople.html'));
});

app.get(`/people`,(req,res)=>{
    let strSearch = req.url.split('=')[1];
    console.log(strSearch);
    // let strSearch = req.url.split('=')[1];
    // let find = arr.filter(el => el.login.includes(strSearch));
    // req.query.search === "all" ? res.json(arr) : res.json(find);
});

app.listen(3000, function () {
    console.log('Listening...');
});

async function find (el) {
    let found = await userModel.find({});
    if (!el){
        return found;
    }
    found.filter(e => e.login.includes(el));
    return found;
}

