let blocks = document.getElementsByClassName("block");
let leftClick = document.getElementById("left");
let rightClick = document.getElementById("right");

let k = 0;
console.log(blocks);
blocks[k].style.display = "block";

leftClick.onclick = function () {

    blocks[k].style.display = "none";


    k--;
    if (k < 0) k = blocks.length - 1;
    blocks[k].style.display = "block";
};

rightClick.onclick = function () {

    blocks[k].style.display = "none";

    k++;
    if (k > blocks.length - 1) k = 0;
    blocks[k].style.display = "block";
};


//Зробити симулятор друкарської машинки.
// У вас інпут, куди потрібно ввести текст і кнопка submit
// При натисканні на кнопку Submit спрацьовує функція, яка з інтервалом від 0.2 до 0.7 секунди пише 1 символ на екран.
// Має бути ефект ніби це пише людина.
// Коли весь текст введено видати будь яке сповіщення на екран, яке вкаже, що дію завершено.

let textInput = document.getElementsByTagName("input")[0];
console.log(textInput);
let submitBtn = document.getElementsByTagName("input")[1];
console.log(submitBtn);


submitBtn.onclick = () => {
    let arr = textInput.value;
    textInput.value = null;
    let i = 0;

    let k = setInterval(() => {
        if (i === arr.length) {
            clearInterval(k);
            alert("Finished");
            return;
        }
        textInput.value += arr[i];


        i++;
    }, 1000);
    k;
};


let sb = document.getElementById('sb'