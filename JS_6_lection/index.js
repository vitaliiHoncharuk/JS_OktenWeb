// Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// - выводит только парные елементы
// - выводит только элементы с парными индексами
//
//
// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров
// 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
//     создать 10 различных экземпляров
//
//
// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин
//
//
// 1
// Протокол пошуку попелюшки
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// Створити 10 попелюшок
// Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//     Знайти яка попелюшка його)


let task = (function () {
    let counter = 1;
    return function task () {
        console.log("--------------------------------");
        console.log("Task Number "+counter);
        console.log("--------------------------------");
        counter++;
    }
})();




task();

let arr = [1,2,3,4,5];

// ------------------------------------------
//Task 1
// ------------------------------------------
// Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// ------------------------------------------



Array.prototype.printArr = function(){
    console.log(this);
};

arr.printArr();


task();
// ------------------------------------------
// - выводит только парные елементы
// ------------------------------------------



Array.prototype.printOddElements = function () {
    console.log(this.filter(function (a) {
        return a % 2 === 0;
    }));
};

arr.printOddElements();

task();



// ------------------------------------------
// - выводит только элементы с парными индексами
// ------------------------------------------

Array.prototype.elementsOddIndex = function(){
    this.forEach(function (el,index,array) {
        if (array[index] % 2 ===0) console.log(el);
    })
};

arr.elementsOddIndex();

task();


// ------------------------------------------
//TASK 2
// ------------------------------------------

// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров


class Car {
    constructor(mark,engine,price,year){
        this.mark = mark;
        this.engine = engine;
        this.price = price;
        this.year = year;
    }
    info (){
        console.log("The car model is "+ this.mark+", with "+this.engine+", "+this.year+" year and it's price is "+this.price+" $");
    }
}




const MARKS = ["Honda","Mersedes","Maybah","BMW","Fiat","Kia","Porshe","Volkswagen","Moskvich","Mitsubishi"];
const OWNER_names = ["Vitalii","Oleksiy","Tanya","Olenka","Oleg","Vitya","Volodya","Roman","Viktor","Sadam"];


//Creating Arr with engines

let arrEngineSwap = Array.from(new Array(10));
let engine = arrEngineSwap.map(function (el) {
   return el = +(Math.random() * (3.0 - 1.0) + 1.0).toFixed(2);
});
console.log(engine);

//Creating Arr with prices

let arrPriceSwap = Array.from(new Array(10));
let price = arrPriceSwap.map(function (el) {
    return el = generateNumber(10000,500000);
});
console.log(price);

//Creating Arr with years

let arrYearSwap = Array.from(new Array(10));
let year = arrYearSwap.map(function (el) {
    return el = generateNumber(1950,2019);
});
console.log(year);



//Creating 10 objects

let carsArr = [];
let i = 9;
do{
    carsArr[i] = new Car(MARKS[i],engine[i],price[i],year[i]);
    i--;
}while (i >= 0);
console.log(carsArr);
carsArr[1].info();




task();

// ------------------------------------------

//  Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
//     создать 10 различных экземпляров

// ------------------------------------------


class SuperCar extends Car{
    constructor(ownerName,ownerAge,ownerExperience){
        super(Car);
        this.ownerName = ownerName;
        this.ownerAge = ownerAge;
        this.ownerExperience = ownerExperience;
    }
}


//Creating Arr with Owners Age

let arrAgeSwap = Array.from(new Array(10));
let age = arrAgeSwap.map(function (el) {
    return el = generateNumber(18,55);
});
console.log(age);

//Creating Arr with Owners Experience

let arrExpSwap = Array.from(new Array(10));
let exp = arrExpSwap.map(function (el) {
    return el = generateNumber(18,55);
});
console.log(exp);


//Filling in Array

let superCarsArr = [];
let k = 9;
do{
    superCarsArr[k] = new SuperCar(OWNER_names[k],age[k],exp[k]);
    superCarsArr[k].mark = MARKS[k];
    superCarsArr[k].engine = engine[k];
    superCarsArr[k].price = price[k];
    superCarsArr[k].year = year[k];
    k--;
}while (k >= 0);
console.log(superCarsArr);



task();

//-------------------------------------------

// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин

// ------------------------------------------



class Product {
    constructor(productName,productPrice,productExpireTime,productType){
        this.name = productName;
        this.price = productPrice;
        this.expireTime = productExpireTime;
        this.type = productType;

    }

    get info () {
        return this.name + " price: \n" + this.price +"$ \n\nExpire time:\n" +this.expireTime +"days \n\nType of product:\n"+ this.type;
    }
    set time(date){
        this.currentDate = new Date();
        this.currentDate.setFullYear(date.year,date.month,date.day);
    }

    get date (){
        return "The product '"+this.name+"' was received on -> " +this.currentDate+" <-";
    }
    // countExpireTime (){
    //     let expireTime= new Date().setDate(this.currentDate.getFullYear() - this.expireTime);
    //     return expireTime.toString();
    // }
}

let milk = new Product("milk",3,2,"milk");
console.log(milk.info);

let milkDate = {
    year : 2019,
    month : 3,
    day : 17
};

milk.time = milkDate;
// console.log(milk.countExpireTime());
console.log(milk.date);



let snikers = new Product("Snikers",2,365,"Sweets");
let SnikersDate ={
    year:2018,
    month: 1,
    day: 3
};
snikers.time = SnikersDate;

console.log(snikers.info);
console.log(snikers.date);


task();
// ------------------------------------------

// 1
// Протокол пошуку попелюшки
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// Створити 10 попелюшок
// Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//     Знайти яка попелюшка його)

// ------------------------------------------


class Cinderella {
    constructor(name,age,shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

class Prince {
    constructor(name,age,shoeFound){
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}




let tanya = new Cinderella("Tanya",18,36.7);
let olya = new Cinderella("Olya",23,34.7);
let vika = new Cinderella("Vika",21,37.0);
let nadia = new Cinderella("Nadia",45,38.2);
let bozhena = new Cinderella("Bozhena",33,33.3);
let nastia = new Cinderella("Nastia",25,37.5);
let polina = new Cinderella("Polina",14,41.2);
let olena = new Cinderella("Olena",32,34.7);
let taya = new Cinderella("Taya",28,42.7);


let oleh = new Prince("Oleh",26,33.3);

const CINDERELLAS = [tanya,olya,vika,nadia,bozhena,nastia,polina,olena,taya];

CINDERELLAS.forEach(function (el) {
    if (el.shoe === oleh.shoeFound) console.log(el);
});





function generateNumber(min,max,numType,toFix)
{

    let num = Math.floor(Math.random() * (max - min)+min);
    if (toFix > 0) num = +num.toFixed(toFix);
    if (numType === "even") {
        num +=  min;
        if ((num % 2) === 0) {
            return num + 1;
        } else {
            return num;
        }
    }
    else if(numType === "odd"){
        num *= 2;
        return num;
    }
    else
        return num;
}


const users = [{name: "Taras",surname:"Shevchenko",year : 1984},
    {name: "Ananas",surname:"Shevchenko",year : 2000},
    {name: "Oleh",surname:"Shevchenko",year : 2014},
    {name: "Andriy",surname:"Shevchenko",year : 1994},
    {name: "Vanya",surname:"Shevchenko",year : 1934},
    {name: "Taras",surname:"Shevchenko",year : 1984},
];
let c = users.filter(function (el) {
    return (el.name ==="Taras" && el.year ===1984);
});
console.log(c);