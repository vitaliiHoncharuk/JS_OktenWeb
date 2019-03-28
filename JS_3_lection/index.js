// створити методи які :
//     1. приймає три числа та виводить та повертає найменьше.
// 2. приймає три числа та виводить та повертає найбільше.
// 3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// 4. виводить масив
// 5. повертає найбільше число з масиву
// 6. повертає найменьше число з масиву
// 7. виводить масив, але напрямок вивденння(сходження\ спадання)
// 8. приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
taskNum(1);
task("Метод,який приймає три числа та виводить та повертає найменше");
function getMin(a,b,c) {
    if ( typeof(a) === "number" && typeof (b)=== "number" && typeof (c)=== "number" ){
        console.log(Math.min(a, b, c));
        return Math.min(a, b, c);
    } else
        console.error("Sorry,all inputed values should be numbers")
    return false;

}
getMin(3,5,1);

getMin(3,"5",1);
taskNum(2);
task("приймає три числа та виводить та повертає найбільше.")
function getMax(a,b,c) {
    if ( typeof(a) === "number" && typeof (b)=== "number" && typeof (c)=== "number" ){
        console.log(Math.max(a, b, c));
        return Math.max(a, b, c);
    } else
        console.error("Sorry,all inputed values should be numbers");
    return false;

}
getMax(3,5,1);

getMax(3,"5",1);

taskNum(3);
task("приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше")

function getMaxMin(a,b,c) {
    let max,min = arguments[0];
  for (let k=0 ; k < arguments.length; k++) {
      if (typeof (arguments[k]) === "number") {
          if( arguments[k] > arguments[k+1]) {
              max = arguments[k];
              min = arguments[k+1];
          }
      }
      else console.error("Sorry,all inputed values should be numbers");
  }
  console.log(max);
  return min;
}

let min = getMaxMin(12,5,3,4,6,7,231,3232,312,312345,2);
console.log(min);

taskNum(4);
task("виводить масив")
function giveVa() {
    
}



taskNum(5);
task("повертає найбільше число з масиву");

function MaxArrayNum(arr) {
    if (Array.isArray(arr)) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i+1]) max=arr[i+1];
        }
        return max;
    }
}
let arr=[1,3,6,12,-55,-123,44,33,22,11];
console.log(MaxArrayNum(arr));


taskNum(6);
task("повертає найменьше число з масиву");

function MinArrayNum(arr) {
    if (Array.isArray(arr)) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) min = arr[i];
        }
        return min;
    }
}
let arr1=[13,56,432,12,2,1234,-53,234,342];
console.log(MinArrayNum(arr1));

taskNum(7);
task("виводить масив, але в напрямку спадання)");
function fallingArr(arr) {
    if (Array.isArray(arr))
     return  arr.sort(function(a, b) {
           return b-a;
       });
}
console.log(fallingArr(arr1));
taskNum(8);
task( "приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі 'i' на 'i+1'");

function changeArrItem(arr,i) {
    if (Array.isArray(arr)) {
           let el = arr[i];
           arr[i] = arr[i+1];
           arr[i+1] = el;
        return arr;
        }
}

let arr2 = [1,5,7,8];
changeArrItem(arr2,1);
console.log(arr2);



function taskNum(taskNumber) {
    console.log("Task number " + taskNumber);
}

function task(text) {
    console.log("Завдання : " + text)
}


function task(text) {
    console.log("Завдання : " + text)
}




function bubbleSort(arr) {
    for (let i = 0; i < arr.length ; i++) {
        for(let j = 0 ; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr3=[5,4,3,12,321,320,55,1,33];
console.log(bubbleSort(arr3));





class owner {
    constructor(name,age,experience){
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
}

class car extends  owner{
    constructor(mark,engine,price,year) {
        super();
        this.mark = mark;
        this.engine = engine;
        this.price = price;
        this.year = year;
    }
}

let first = new car("Porshe",3.2,200100,2019);
let petya = new owner("Petya",29,3);

