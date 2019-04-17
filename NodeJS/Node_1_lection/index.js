// Створити модуль в якому буде міститися функція для генерування чисел
// Сотворите модуль в якому міститимуться певні функції для роботи з масивами
// (Вивід, сортування) а також обов’язково функція для заповнення масиву
// Рандомними числами(використати модуль описаний вище)

// Підключити ці 2 модулі в головному файлі і протестувати


// погратися з івент еміттером

let randomNumb = require("./1");
console.log(randomNumb.generateNum(1, 5));

let filterArr = require("./getFilteredArray");
let arrLog = require("./forEach");
let transformArr = require("./getTransformedArray");
let arr  = [3,4,5,61,23,34,55,2,15,33];

console.log("Start ForEach");
console.log("_____________________");

arrLog.forEach(arr,function (e) {
    console.log(e);
});

console.log("END forEach");
console.log("------------------");

console.log("Filter Arr");
console.log("_____________________");

let newArr = filterArr.getFilteredArray(arr,function (e) {
    return e>5;
});

console.log(newArr);
console.log("------------------");

console.log("Transform Arr ");
console.log("_____________________");

let newArr1 = transformArr.getTransformedArray(arr,function (el) {
  return  el *=2;
});

console.log(`Arr before transformation -  \n[ ${arr} ] \nAnd after(we get new Array) - \n[ ${newArr1} ]`);
console.log("------------------");