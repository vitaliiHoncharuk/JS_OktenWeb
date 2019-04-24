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


let fs = require("fs");
// let http = require("http");



//TASK
// створити функцію  яка буду приймати count
// всередині потрібно створити таку кількість файлів як count і записуватиме всередину рандомні числа
//
// видалити ті файли в яких всередині число менше 500
//
// перейменувати ті в яких число всередині менше 1000
//
// до всіх файлів які залишились дописати всередині фразу The end...

const maxNumb = 1500;
const folderName = "files";
const numOfFiles = 15;




amountOfFiles(numOfFiles,folderName)
    .then(() => deleteFileWithNumLower(500,folderName,numOfFiles))
    .then(() => renameFileWithNumLower(1000,folderName,numOfFiles));




function amountOfFiles (count,folderName) {
    return new Promise(((resolve, reject) => {
        fs.mkdir(`./${folderName}`,function (e) {
            reject("Error: function amountOfFiles");
            console.log(e);
        });
        for (let i = 1; i <= count; i++) {
            fs.writeFile(`./${folderName}/newfile${i}.txt`,randomNum(0,maxNumb),function (err) {
                console.log(err);
            });
        }
        resolve();
    }))

}

function deleteFileWithNumLower(num,folderName,filesCount) {
    return new Promise(((resolve, reject) => {
        for (let i = 1;i <= filesCount ; i++) {
            (fs.readFile(`./${folderName}/newfile${i}.txt`, (err,data) => {
                console.log(data.toString());
                if (data.toString() < num) {
                    fs.unlink(`./${folderName}/newfile${i}.txt`,(err)=> {
                        if (err) reject("Error: function deleteFileWithNumLower");
                        console.log(`File with number ${i} is now deleted!`);
                    })
                }
            }));
        }
        resolve();
    }));

}



function renameFileWithNumLower(num,folderName,filesCount) {
    return new Promise(((resolve, reject) => {
        for (let i = 1; i <= filesCount; i++) {
            if (fs.existsSync(`./${folderName}/newfile${i}.txt`)) {
                (fs.readFile(`./${folderName}/newfile${i}.txt`, (err, data) => {
                    if (data.toString() < num) {
                        fs.rename(`./${folderName}/newfile${i}.txt`, `./${folderName}/RenamedFileHERE${i}.txt`, (err) => {
                            if (err) reject("Error: function renameFileWithNumLower");
                            console.log('Rename completed!');
                        })
                    }
                }))
            }
        }
        resolve();
    }))
}


function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
