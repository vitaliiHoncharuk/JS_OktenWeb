let express = require('express');
let path = require('path');
let app = express();
// let querystring = require("querystring");


app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let arr =["",];
app.post('/user', function (req, res) {
    const {login,password}=req.body;
    if(!login && !password) res.json("Something went wrong,can't add user! Provide full info...");
    else {
        arr.push({login, password, id: arr.length});
        res.json(`Your login ${login} and password ${password} have been added! Please,wait...`);
    }
});

app.get(`/user/:id`,function (req,res) {
    res.json(arr[req.url[req.url.length-1]]);
});


app.listen(3000, function () {
    console.log('Listening...');
});
