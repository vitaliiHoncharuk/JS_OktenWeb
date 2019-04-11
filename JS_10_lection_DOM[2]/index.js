//    1
// - створити блок з id, class та текстом в середені. Зчитати окремо цей текст за селекторів по
// id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - створити функцію яка змінюватиме розміри та колір цього блоку згідно з визначиними аргументами
//
//2
// - створити дві форми , по два інпути в кожній
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих форм
//
//3
// - Створити функцію, яка генерує таблицю, перший аргумент визначає кількість строк,
//     а другий параметр визначає кліькіть ячеєк в кожній строці.
//     третій параметр визначає елемент в який потрібно таблицю додати
//
//4
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//5
// - Робимо попередню логіку цікавішею.
//     Все те саме, але тепер потрібно перевіряти чи не містить ціле речення в собі погані слова
//
/////////////////////////////////    6
// 6.1 Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// 6.2 Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// 6.3 створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// 6.4 Створити інпут з бігунком та блок 200*200, при переміщені бігунка блок збільшує свою ширину пропорційно.
//     Задати бігунку мінімальні значення в 200 максимальне в 600
//
// 6.5 Создайте меню, которое раскрывается/сворачивается при клике

//6 Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.
// 7 Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// 8 Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// 9 Створити 4 инпута. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк, четвертий -кнопка
// при натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// Після побудови таблички, при подвійному натисканні на будь-яку ячейку з'являється новий інпут, в якому з'являється поточне значення ячейки на яку ви натискали.
// Змінюючи інформацію в цьому інпуті, ви змінюєте інформацію в самій ячейці
//
//
//
//
// 10 создать скрипт, который берет считывает на странице (ее даю я) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

//11 Зробити симулятор друкарської машинки.
// У вас інпут, куди потрібно ввести текст і кнопка submit
// При натисканні на кнопку Submit спрацьовує функція, яка з інтервалом від 0.2 до 0.7 секунди пише 1 символ на екран.
// Має бути ефект ніби це пише людина.
// Коли весь текст введено видати будь яке сповіщення на екран, яке вкаже, що дію завершено.



let task = taskNumb();
task();
let idSelect = document.getElementById("block");
console.log(idSelect);
let classSelect =document.getElementsByClassName("block")[0];
console.log(classSelect);
let tagSelect = document.getElementsByTagName("div")[0];
console.log(tagSelect);

let idFunc = function(){
    idSelect.innerHTML = `<h1>I'm text from id Selector </h1>`;
};

let classFunc = function(){
    idSelect.innerHTML = `<h1>I'm text from class Selector </h1> `;
};
let tagFunc = function(){
    idSelect.innerHTML = `<h1>I'm text from tag Selector</h1>`;
};

    setInterval(idFunc, 3000);
    setInterval(classFunc, 6000);
    setInterval(tagFunc, 8000);





let inputHeight = createItem("input","Height : ");
let heightLabel = labelFor(inputHeight,"Height : ");


let inputWidth = createItem("input","Width : ");
let widthLabel = labelFor(inputWidth,"Width : ");

let inputBg = createItem("input","Background-color : ")
let bgLabel = labelFor(inputBg,"Background-color : ");

let btn = createItem("button","_","Submit");

append(heightLabel);
append(inputHeight);

append(widthLabel);
append(inputWidth);

append(bgLabel);
append(inputBg);
append(btn);


document.getElementsByTagName("button")[0].onclick = function(){
    let input = document.getElementsByTagName("input");
    idSelect.style.height = input[0].value+"px";
    idSelect.style.width = input[1].value + "px";
    idSelect.style.backgroundColor = (input[2].value).toString();
};





// - TASK 2 -
// - створити дві форми , по два інпути в кожній
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих форм
task();
let f1 = createItem("form","form1");
let f2 = createItem("form","form2");
append(f1);
append(f2);

let inputForm1_1 = createItem("input","input1_form1");
let inputForm1_2 = createItem("input","input2_form1");
let inputForm2_1 = createItem("input","input1_form2");
let inputForm2_2 = createItem("input","input2_form2");
getName("form1")[0].append(inputForm1_1,inputForm1_2);
getName("form2")[0].append(inputForm2_1,inputForm2_2);

let submit =createItem("input","submit");
submit.type="submit";
append(submit);
document.getElementsByName("submit")[0].onclick= function () {
  console.log(`First input value [first form] = ${inputForm1_1.value} , 
  second input value [first form] = ${inputForm1_2.value} , 
  first input value [second form] = ${inputForm2_1.value} ,
  second input value [second form] = ${inputForm2_2.value}`);
};


//TASK 3
// - Створити функцію, яка генерує таблицю, перший аргумент визначає кількість строк,
//     а другий параметр визначає кліькіть ячеєк в кожній строці.
//     третій параметр визначає елемент в який потрібно таблицю додати
task();
let p = createItem("div");
append(p);

function generateTable(amountOfRows,amountOfCells,parentNodeTagName) {
    let table = document.createElement("table");
    table.title = `Table with ${amountOfRows} and ${amountOfCells}`;
    table.style.border="1";
    table.style.width = "100%";
    table.style.cellpadding = "3";
    table.style.cellspacing = "3";
    document.getElementsByTagName(parentNodeTagName)[document.getElementsByTagName(parentNodeTagName).length-1].appendChild(table);
    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    for (let i = 1; i <= amountOfRows; i++){
        let row = document.createElement("tr");
        row.innerHTML = "Row #"+ i;
        row.style.backgroundColor = randomColor(colorArray)();
        setInterval(function () {
            row.style.backgroundColor = randomColor(colorArray)();
        },4000);
        table.appendChild(row);
        for (let k = 1; k <= amountOfCells; k++){
            let cell = document.createElement("th");
            cell.innerHTML  = "Cell #"+k;
            row.appendChild(cell);
        }
    }
    function randomColor(arr) {
        return function getRandomArbitrary() {
            let min = 1;
            let max = arr.length;
            let randomN = parseInt(Math.random() * (max - min) + min);
            return arr[randomN];
        }
    }


}
generateTable(3,3,"p");




//  TASK --4--
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
task();

let badWords = ['blyat','fuck',"shit","bitch","motherfucker"];

let inputWordsChecker = createItem("input","CheckWords");
 let wordsCheckerLabel = labelFor(inputWordsChecker,"Don't type in bad words! ");
append(wordsCheckerLabel);
append(inputWordsChecker);




// inputWordsChecker.oninput = ()=> {
//     console.log(inputWordsChecker.value);
//     let value = inputWordsChecker.value;
//     if (badWords.includes(value)) alert('FUCK !!!!')
// };





//TASK 5


//5
// - Робимо попередню логіку цікавішею.
//     Все те саме, але тепер потрібно перевіряти чи не містить ціле речення в собі погані слова

task();

function containsAny(str, substrings) {
    for (let i = 0; i !== substrings.length; i++) {
        let substring = substrings[i];
        if (str.indexOf(substring) !== - 1) {
            return substring;
        }
    }
    return null;
}
inputWordsChecker.oninput = ()=> {

    let value = inputWordsChecker.value;
    if (containsAny(value,badWords)) alert('FUCK me');
};





// TASK 6
/////////////////////////////////    6
// 6.1 Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
task();
let elemHide = document.createElement("div");
elemHide.style.width = "300px";
elemHide.style.height = "300px";
elemHide.style.backgroundColor = "red";
append(elemHide);
let btnHide = document.createElement("button");
btnHide.innerText="HIDE";
append(btnHide);
btnHide.onclick = ()=> elemHide.style.display = "none";

// 6.2 Создайте кнопку, при клике на которую, она будет скрывать сама себя.
task();
let btn1 = document.createElement("button");
btn1.innerText = "Hide myself";
append(btn1);
btn1.onclick = () => btn1.style.display = "none";

// 6.3 створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

task();
let inpt = document.createElement("input");
inpt.type= "number";
append(inpt);

let btn2 = document.createElement("button");
btn2.innerText = "Get Value";
append(btn2);

btn2.onclick = () => {
    let x = btn2.value;
    x <= 18 ? alert(`You are 18 y.o. or older!`) :alert( "You're too young!");
};


// 6.5 Создайте меню, которое раскрывается/сворачивается при клике
let li = document.getElementsByTagName("li");
let a = document.getElementsByTagName("a");
let btn3 =document.getElementsByTagName("button")[0];
console.log(btn3);
console.log(li);
console.log(btn3.innerHTML);
btn3.onclick = () => {
    for (let i = 0;i < li.length;i++ ){
        if(li[i].classList === undefined || li[i].classList.contains("hide_elem")) {
            li[i].className = "show_elem";
        }
        else  li[i].className = "hide_elem";
    }
};

// functions to make this hw easier
function createItem(itemTypeName,itemName,innerHtml) {
    let createdItem = document.createElement(itemTypeName);
    createdItem.name = itemName;
    if(innerHtml) createdItem.innerHTML = innerHtml;
    return createdItem;
}

function labelFor (forItem,content){
    let label = document.createElement("label");
    label.htmlFor = forItem;
    label.innerHTML = content;
    return label;
}


function append(child) {
    return document.body.appendChild(child);
}



function getName(el) {
    return document.getElementsByName(el);
}



function taskNumb() {
    let taskCount = 1;
    return function () {
        let c = document.createElement("p");
        c.innerHTML = "Task № "+ taskCount++;
        append(c);
    }
}