// створити сервер використовуючи модуль http
//
// створити наступні роути
//
// GET /
// повертатиме простий текст('Hi!')
//
// GET /user-form
// повертатиме сторінку на якій буде GET форма з полями:
//     name,password,age
// при submit надсилатиме дані на GET /create-user
//
// GET /create-user
// прийматиме дані з форми і дописуватиме їх в вигляді JSON
// в файлик ./users.txt
// 	і повертатиме текст('created')
//
// GET /pet-form
// повертатиме сторінку на якій буде POST форма з полями:
//     name, color, age, kind
// при submit надсилатиме дані на POST /create-pet
//
// POST /create-pet
// прийматиме дані з форми і дописуватиме їх в вигляді JSON
// в файлик ./pets.txt
// 	і повертатиме текст('created')
//
// GET /users
// повертатиме дані з файлика ./users.txt на клієнт
//
// GET /pets
// повертатиме дані з файлика ./pets.txt на клієнт
//
// GET /delete-form
// повертатиме сторінку на якій буде POST форма з полями:
//     file
// при submit надсилатиме дані на POST /delete-file
//
// POST /delete-file
// прийматиме дані з форми і видалятиме відповідний файл
// повертатиме текст('deleted')
//
// ////////////////////////////////////
//
// переписати завданн€ описане вище на express
//
// підключити стилі

let fs = require("fs");
let path = require("path");
let http = require("http");
let server = http.createServer();
let querystring = require("querystring");
let url = require("url");
let userCount = 0;
let petsCount = 0;



function render(page,response){
    let pathToPage = path.join(__dirname, "Public", page);
    fs.readFile(pathToPage,function (err,data) {
        response.end(data);
        console.log(err);
    })
}

server.on("request", function (req, res) {
    let userStream = fs.createWriteStream("users.txt", {flags:'a'});
    let petStream = fs.createWriteStream("pets.txt", {flags:'a'});
    let parsedUrl = url.parse(req.url);

    switch (parsedUrl.pathname) {
        case '/' : {
            fs.readFile(path.join(__dirname,"Static","index.html"), (err, data) => {
                res.end(data);
                console.log(err);
            });
            break;
        }
        case '/user-form': {
            render("user-form.html",res);
            break;
        }
        case '/create-user' : {
            let data = JSON.stringify(querystring.parse(parsedUrl.query));
            userStream.write(data);
            userCount++;
            res.end(`Successfully created! You are currently ${userCount} user. Your data is stored in file named users.txt`);
            break;
        }
        case '/pet-form' :{
            render('pet-form.html',res);
            break;
        }
        case  '/create-pet':{
            req.on('data',function (body) {
                let data = querystring.parse(body.toString());
                console.log(data);
                petStream.write(JSON.stringify(data));
                petsCount++;
                res.end(`Successfully created! You have currently ${petsCount} pets. Your data is stored in file named pets.txt`);
            });
            break;
        }
        case '/delete-form':{
            render('delete-form.html',res);
            break;
        }
        case '/delete-file':{
            req.on('data',function (body) {
                let data = body.toString().split("=");
                    if(fs.existsSync(`./${data[1]}`)) {
                        fs.unlink(`./${data[1]}`, err => {
                            if (err) console.log(err);
                        });
                        res.end(`Successfully deleted file ${data[1]}`);
                    }
                    else res.end(`Error.This file can't be deleted. Bad input / file doesn't exist`);
            });
            break;
        }
        case  '/users' :{
            fs.readFile("./users.txt",(err, data) => {
               res.end(data);
                console.log(err);
            });
            break;
        }
        case  '/pets' : {
            fs.readFile("./pets.txt",(err, data) => {
                res.end(data);
                console.log(err);
            });
            break;
        }
        default : {
            res.end("Not Found!");
        }
    }
});
server.listen(3000,function () {
    console.log("listening");
});

