// створити функцію  яка буду приймати count
// всередині потрібно створити таку кількість файлів як count і записуватиме всередину рандомні числа
//
// видалити ті файли в яких всередині число менше 500
//
// перейменувати ті в яких число всередині менше 1000
//
// до всіх файлів які залишились дописати всередині фразу The end...
//
// ====================================================
//
//     створити використовуючи стріми файлик обсягом мінімум 100мб
//
// і попробувати його зчитати
//
//  ====================================================
//
//     створити власний http сервер який на всі запити буде повертати index.html


// let fs = require("fs");
let http = require("http");

let server = http.createServer();
server.on('request',function (req,res) {
    res.end("hello");
});
server.listen('3000',()=>{
    console.log("linstening");
});
//TASK
// створити функцію  яка буду приймати count
// всередині потрібно створити таку кількість файлів як count і записуватиме всередину рандомні числа
//
// видалити ті файли в яких всередині число менше 500
//
// перейменувати ті в яких число всередині менше 1000
//
// до всіх файлів які залишились дописати всередині фразу The end...

// const maxNumb = 1500;
// const folderName = "files";
// const numOfFiles = 15;
//
//
//
//
// amountOfFiles(numOfFiles,folderName)
//     .then(() => deleteFileWithNumLower(500,folderName,numOfFiles))
//     .then(() => renameFileWithNumLower(1000,folderName,numOfFiles));
//
//
//
//
// function amountOfFiles (count,folderName) {
//     return new Promise(((resolve, reject) => {
//         fs.mkdir(`./${folderName}`,function (e) {
//             reject("Error: function amountOfFiles");
//             console.log(e);
//         });
//         for (let i = 1; i <= count; i++) {
//             fs.writeFile(`./${folderName}/newfile${i}.txt`,randomNum(0,maxNumb),function (err) {
//                 console.log(err);
//             });
//         }
//         resolve();
//     }))
//
// }
//
// function deleteFileWithNumLower(num,folderName,filesCount) {
//     return new Promise(((resolve, reject) => {
//         for (let i = 1;i <= filesCount ; i++) {
//             (fs.readFile(`./${folderName}/newfile${i}.txt`, (err,data) => {
//                 if (data.toString() < num) {
//                     console.log(`./${folderName}/newfile${i}.txt is going to be deleted! it's number is ${data.toString()}`);
//                     fs.unlink(`./${folderName}/newfile${i}.txt`,(err)=> {
//                         if (err) reject("Error: function deleteFileWithNumLower");
//                         console.log(`File with number ${i} is now deleted!`);
//                     })
//                 }
//             }));
//         }
//         resolve();
//     }));
//
// }
//
//
//
// function renameFileWithNumLower(num,folderName,filesCount) {
//     return new Promise(((resolve, reject) => {
//         for (let i = 1; i <= filesCount; i++) {
//             if (fs.existsSync(`./${folderName}/newfile${i}.txt`)) {
//                 (fs.readFile(`./${folderName}/newfile${i}.txt`, (err, data) => {
//                     if (data.toString() < num) {
//                         console.log(`newfile${i}.txt is going to be renamed,it's data is ${data.toString()}`);
//                         fs.rename(`./${folderName}/newfile${i}.txt`, `./${folderName}/RenamedFileHERE${i}.txt`, (err) => {
//                             if (err) reject("Error: function renameFileWithNumLower");
//                             console.log('Rename completed!');
//                         })
//                     }
//                     else {
//                         fs.appendFile(`./${folderName}/newfile${i}.txt`, " The end...",err1 => {
//                             console.log(err1);}
//                             )
//                     }
//                 }))
//             }
//         }
//         resolve();
//     }))
// }
//
//
//
// function randomNum(min,max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
