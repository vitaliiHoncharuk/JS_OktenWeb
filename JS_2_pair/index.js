// let cars = [ {
// 	mark : "Folcvagen",
// 	engine: 1.6,
// 	owner :{
// 		Name : "Vasya",
// 		Age : 21,
// 		Experience: 1 
// 	},
// 	price: 21000,
// 	year :1976
// }, 
// {
// 	mark : "BMW",
// 	engine: 3.0,
// 	owner :{
// 		Name : "Alex",
// 		Age : 35,
// 		Experience: 1 
// 	},
// 	price: 221000,
// 	year :2016
// },
// {
// 	mark : "Niva",
// 	engine: 1.8,
// 	owner :{
// 		Name : "Oleg",
// 		Age : 25,
// 		Experience: 3 
// 	},
// 	price: 33000,
// 	year :1999
// },
// {
// 	mark : "Lada",
// 	engine: 2.60,
// 	owner :{
// 		Name : "Evgen",
// 		Age : 66,
// 		Experience: 2
// 	},
// 	price: 3000,
// 	year :1956
// },
// {
// 	mark : "Audi",
// 	engine: 2.6,
// 	owner :{
// 		Name : "Valera",
// 		Age : 22,
// 		Experience: 3 
// 	},
// 	price: 74000,
// 	year :2006
// },
// {
// 	mark : "Mercedes",
// 	engine: 3.0,
// 	owner : {
// 		Name : "Arsen",
// 		Age : 44,
// 		Experience: 21 
// 	},
// 	price: 201000,
// 	year :2015
// },
// {
// 	mark : "Porshe",
// 	engine: 3.2,
// 	owner :{
// 		Name : "Vitalii",
// 		Age : 23,
// 		Experience: 2 
// 	},
// 	price: 2001000,
// 	year :2019
// },];

// class owner {
//     constructor(name,age,experience){
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
// }
//
// class car {
//     constructor(mark,engine,price,year){
//         this.owner = new owner();
//         this.mark = mark;
//         this.engine = engine;
//         this.price = price;
//         this.year = year;
//     }
// }
//
// let first = new car("Porshe",3.2,200100,2019);
// let petya = new owner("Petya",29,3);
// first.owner=petya;
//
//
//
// console.log(first);

// let ownerNames = ["Katya","Tanya","Olena","Nastya","Galya","Olya","Alina",];

// for(let i = 0; i < cars.length ;i+=2)
// {
// 	console.log(`cars ${i + 1} engine is ${cars[i].engine}`);
// 	cars[i].engine = Add_percent(cars[i].engine,10);
// 	console.log(` now cars ${i} engine is ${cars[i].engine}`);
// 	console.log(` cars ${i} price is ${cars[i].price}`);
// 	cars[i].price = Add_percent(cars[i].price,10);
// 	console.log(` cars ${i} price is ${cars[i].price}`);
// 	cars[i].owner.Name = ownerNames[i];
// 	console.log(` now owners of ${i} car is ${cars[i].owner.Name}`);
// }




// console.log("_____________________________________________________________");


// for (let i = 0; i < cars.length; i++) {
// if (cars[i].owner.Experience < 5 && cars[i].owner.Age > 25) {
// 		console.log(`We are sending ${cars[i].owner.Name} for upgrading his qualification,his experience is ${cars[i].owner.Experience}`);
// 		cars[i].owner.Experience += 1;
// 		console.log(`Now he got ${cars[i].owner.Experience++} years of experience`);
//  	}
// }

// let sumOfCars = 0;
// for (let i = 0; i < cars.length; i++){
// 	sumOfCars += cars[i].price;
// }
// console.log(`Price of all cars is ${sumOfCars} $`)

// function Add_percent(value, howMuchToIncrease) {
// 	return value / 100 * howMuchToIncrease + value;
// }
// console.log(cars[1]);




// let x = +prompt("Input first value",0);
// let y = +prompt("Input second value",0);
// let z = +prompt("Input third value",0);
//
// if (x > y && x > z)
// {
//     if (y > z)
//     {
//         console.log(x + ", " + y + ", " + z);
//     }
//     else
//     {
//         console.log(x + ", " + z + ", " +y);
//     }
// }
// else if (y>x && y >z)
// {
//     if (x>z)
//     {
//         console.log(y + ", " + x + ", " +z);
//     }
//     else
//     {
//         console.log(y + ", " + z + ", " +x);
//     }
// }
// else if (z>x && z>y)
// {
//     if (x>y)
//     {
//         console.log(z + ", " + x + ", " +y);
//     }
//     else
//     {
//         console.log(z + ", " + y + ", " +x);
//     }
// }







let arr= new Array(50);
    // 1. заповнити його 50 парними числами за допомоги циклу
for(let i = 0; i < arr.length; i++)
{
    arr[i] = generateNumber(1,500,"odd");
}
taskNum(1);
console.log("Array, filled with Odd numbers using random");
console.log(arr);

// 2.заповнити його 50 непарними числами за допомоги циклу

for(let i = 0; i < arr.length; i++)
{
    arr[i] = generateNumber(1,500,"even");
}
taskNum(2);
console.log("Array, filled with even numbers using random : ");
console.log(arr);


//3.используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
for(let i = 0; i < arr.length; i++)
{
    arr[i] = generateNumber(8,732);
}
taskNum(3);
console.log("Array, filled with random numbers in range  [8 - 732] :");
console.log(arr);

//4.вывести на консоль  каждый третий елемент
taskNum(4);
console.log("Each 3-rd element of Array : ");

for (let i = 2; i < arr.length;i+=3){
console.log(arr[i]);
}
//5.вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным
taskNum(5);
console.log("Each 3-rd element of Array, if the number is odd : ")

for (let i = 2; i < arr.length;i+=3){
    if ((arr[i] % 2) === 0)
    console.log(arr[i]);
}
taskNum(6);
console.log("Each 3-rd element of Array, if the number is odd and give this numbers to another array : ")
// вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
let NewArr = [];
for (let i = 2; i < arr.length;i+=3){
    if ((arr[i] % 2) === 0)
        NewArr.push(arr[i]);
}
console.log("New array : ")
console.log(NewArr);

taskNum(7);
console.log("Вывести каждый елемент массива у которого соседний с права элемент - парный");
console.log(arr);
for (let i = 0; i < arr.length;i++){
    if ((arr[i+1] % 2) === 0) {
        console.log(`Сусід справа - ${arr[i + 1]}, сам елемент = ${arr[i]}`);
    }
}

taskNum(8);
console.log("масив з числами [100,250,50,168,120,345,188], " +
    "Які характеризують вартість окремої покупки. обрахувати середній чек.");
let purchasePrices= [100,250,50,168,120,345,188], avgPrice = 0 , sum=0;
for (let i = 0; i < purchasePrices.length; i++){
    sum+=purchasePrices[i];
}
avgPrice = (sum / purchasePrices.length).toFixed(2);
console.log(`The sum of all purchases = ${sum}, amount of products =${purchasePrices.length},and its
avarage price = ${avgPrice}`);

taskNum(9);
console.log("створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив");
{
    let numberOfArrItems = 56;
    let Arr = new Array(numberOfArrItems);
    let myArr = [];
    for (let i = 0; i < Arr.length; i++) {
        arr[i] = generateNumber(1, 999);
        myArr.push(arr[i]);
    }
    console.log(`Before multiplying arr :`);
    console.log(myArr);

    for (let k = 0; k<Arr.length; k++){
        myArr[k] *= 5;
    }
    console.log("new Array with random numbers multiplied by 5 : ")
    console.log(myArr);
}

taskNum(10);
    console.log("створити масив з будь якими значеннями (стрінги, числа, і тд...)." +
        " пройтись по ньому, і якщо об'єкт є числом,\n" +
        " додати його в інший масив.");
{
    let obj = {
        name : "Robot",
        version : 2,
        type : "Killer",
        price : 100500
    }
    let myArr = [];
    let arr = ["qweqwe",123,555,obj ,"12qewas", 333];
    for (let i = 0;i <arr.length; i++){
        if (typeof arr[i] =="number" ) myArr.push(arr[i]);
    }
    console.log("first array : " );
    console.log(arr);
    console.log("Array where are only numbers from previous array :");
    console.log(myArr);
}




function taskNum(number) {
    console.log(`Task number -> ${number} <-`)
}


function generateNumber(min,max,numType) {
    let num = Math.floor(Math.random() * (max - min)+min);

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