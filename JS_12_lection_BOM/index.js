// - Дан textarea.
//     В него вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
// -Дан текстареа.
//     В него можно ввести данные, затем поредактировать их, затем еще поредактировать.
//     Пусть текстареа хранит историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории.




//TASK 1
const myName = document.querySelector('#myName');
const myAddress = document.querySelector('#myAddress');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const obj = {
        name: myName.value,
        address: myAddress.value,
    };

    window.localStorage.setItem('obj', JSON.stringify(obj));

});


let localData = JSON.parse(window.localStorage.getItem('obj'));

myName.value = localData.name;
myAddress.value = localData.address;

localData && localData.name ? myName.value = localData.name : myName.value = null;
localData && localData.address ? myAddress.value = localData.address : myAddress.value = null;




//
// document.onload = () => {
//
// };
