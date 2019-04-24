

//За допомогою fs створити папаку students
// В ній створити 2 папкм JS та Java
// В кожній з низ створити ще 2 папаки. 1800 та 2000
// У кожній папці мають бути txt файли які х-ють кожного студента.
// Імя Фамілія Вік
// файлм має називатись відповідно до дати, коли цей файл був створений.
// Імя Фамілія та вік має бути одне з значень мисиву, names, surnames та ages відповідно.
// Наприклад
// let names = [Viktor, Vova, Dima]
// let surnames = [Pupkin, Frolov, Gagarin]
// let ages = [22,44,66]
// І файл виглядає так 23042019.txt -> Dima Gagarin 22
//
// Потім за допомогою fs перенести студентів з JS до студентів Java, а студентів Java на місце студентів JS
//
// Потім за допомогою стрімів продублювати їх в папці backup

let fs = require('fs');
let path = require("path");
let names = ["Viktor", "Vova", "Dima"];
let surnames = ["Pupkin", "Frolov", "Gagarin"];
let ages = [22,44,66];
const dirJs = './students/JS';
const dirJava = './students/Java';

function createAll (){
    fs.mkdirSync("./students",err => {
        console.log(err);});
    fs.mkdirSync("./students/JS",err => {
        console.log(err);});
    fs.mkdirSync("./students/Java",err => {
        console.log(err);});
    fs.mkdirSync("./students/Java/1800",err => {
        console.log(err);});
    fs.mkdirSync("./students/Java/2000",err => {
        console.log(err);});
    fs.mkdirSync("./students/JS/1800",err => {
        console.log(err);});
    fs.mkdirSync("./students/JS/2000",err => {
        console.log(err);});


    createTxt(dirJava);
    createTxt(dirJs);

}
createAll();



function createTxt(folder) {
    fs.readdir(folder, (err, files) => {
        console.log(files[0]);
        for (let i = 0; i < files.length; i++) {
            const date = Date.now();
            let data = `${names[i]} ${surnames[i]} ${ages[i]} ${folder} [${files[i]}]`;
            console.log(data);
            fs.writeFile(`${folder}/${files[i]}/${date}.txt`, data, err1 => {
                console.log(err1);
            });
        }
    });
    setTimeout(function(){
    moveFiles(folder)
    },300);
}
// Потім за допомогою fs перенести студентів з JS до студентів Java, а студентів Java на місце студентів JS

function moveFiles(folder) {

    fs.readdir(folder, (err, files) => {

        for (let i = 0; i < files.length; i++) {
            let file;
            let path1 = `${folder}/${files[i]}/`;
            file = files;
            fs.readdir(path1, (err, files) => {
                let path2 = `${path1}${files[0]}`;
                if (folder === dirJava) {
                    let whereTo = `${dirJs}/${file[i]}/${files[0]}`;
                    fs.rename(path2, whereTo, err => {
                        console.log(err);
                    })
                } else {
                    let whereTo = `${dirJava}/${file[i]}/${files[0]}`;
                    fs.rename(path2, whereTo, err => {
                        console.log(err);
                    })
                }
            });
        }
    });
    // duplicateStream();
}
//
// function duplicateStream() {
//     let stream =new fs.ReadStream("./students",);
//
// }
