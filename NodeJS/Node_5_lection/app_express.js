const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname,'static')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
let userStream = fs.createWriteStream("users.txt", {flags:'a'});
let petStream = fs.createWriteStream("pets.txt", {flags:'a'});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(3000,()=>{
    console.log("listening");
});
