// Все робити через функції масивів (foreach, map ...тд)
//
// 1 створити масив з 10 елементів, заповнити його парними значеннями (2 4 6 8 10 ...).
// 2 створити масив з 10 елементів, заповнити його цілими рандомними значеннями(Math.random)
//
// 3 є масив
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - виконати певні фільтрації(по вікові, імені...)
// - зробити всіх старшими на рік
// - знайти перший/останній індекс об'єкта в якого ім'я макс
// - удалити всіх в проміжку інексів від 3 до 6
// - замінити 5 елемент на інший
//
// організувати власні функції масивів
// - foreach
// - filter
// - map
// - some
// - every



//Math.floor(Math.random() * (100 - 1)) + 1


//Task # 1
//1 створити масив з 10 елементів, заповнити його парними значеннями (2 4 6 8 10 ...).
{
    let arr = new Array(10);
    arr.fill(0, 0, 10);
    console.log("filled arr");
    console.log(arr);


    let k = 2;
    arr.forEach(function (item, index, arr) {
        arr[index] = k;
        k += 2;
    });
    console.log(arr);
}
//TASK #2
// 2 створити масив з 10 елементів, заповнити його цілими рандомними значеннями(Math.random)
{
    let arr = new Array(10);
    arr.fill(0, 0, 10);
    console.log("filled arr");
    console.log(arr);


    arr.forEach(function (item, index, arr) {
        arr[index] = Math.floor(Math.random() * 100);
    });
    console.log(arr);

}



//  TASK #3
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - виконати певні фільтрації(по вікові, імені...)
// - зробити всіх старшими на рік
// - знайти перший/останній індекс об'єкта в якого ім'я макс
// - удалити всіх в проміжку інексів від 3 до 6
// - замінити 5 елемент на інший
//


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//
// let sortByAge = users.sort(function (a,b) {
//     return a.age - b.age;
// });
// console.log(sortByAge);
//
//
//
// let sortByAgeDesc = users.sort(function (a,b) {
//     return b.age - a.age;
// });
// console.log(sortByAgeDesc);

// let sortByNameLength = users.sort(function (a,b) {
//     return b.name.length - a.name.length;
// });
//
//
// console.log(sortByNameLength);



// let sortByNameLengthDesc = users.sort(function (a,b) {
//     return a.name.length - b.name.length;
// });
//
//
// console.log(sortByNameLengthDesc);


// let sortByStatusOk = users.sort(function (a,b) {
//     return b.status - a.status;
// });
//
// console.log(sortByStatusOk);

// let sortByStatusFalse = users.sort(function (a,b) {
//     return a.status - b.status;
// });
//
// console.log(sortByStatusFalse);


// let sortByStatus_age = users.sort(function (a,b) {
//     if (a.status > b.status) return 1;
//     if (a.status < b.status) return -1;                                         //Status  - > true
//     if(a.age > b.age) return -1;
//     if(a.age < b.age) return 1;                                               //     Age [biggest -> lowest]
//     return 0;
// });
//
// console.log(sortByStatus_age);

// - зробити всіх старшими на рік


// forEach(users,function (elem) {
//     elem.age +=1;
// });
// console.log(users);


// - знайти перший/останній індекс об'єкта в якого ім'я макс

// users.forEach(function (elem,i) {
//     if (elem.name == "max") console.log(i);
// });




//
//
// //// - удалити всіх в проміжку інексів від 3 до 6
// users.splice(3,3);
// console.log(users);


// - замінити 5 елемент на інший

//
// users.fill(null,5,6);
// console.log(users);





//foreach
function forEach(Arr, func) {
    for (let i = 0; i < Arr.length; i++) {
        func(Arr[i]);
    }
}



// - filter
function getFilteredArray(Arr, callback) {
    let newFilteredArray = [];
    forEach(Arr, function (elem) {
        if (callback(elem)) {
            newFilteredArray.push(elem);
        }
    });
    return newFilteredArray;
}



// - map
function myMap(Arr,callback) {
    let newMappedArray = [];
    forEach(Arr, function (elem) {
       newMappedArray =
    });
    return newFilteredArray;

}


// - some
// - every