//Closures

function myltiply(a) {
    return function (b) {
        return a * b;
    }
}

const  myltiplyByTwo = myltiply(2);
console.log(myltiplyByTwo(4));





//Incapsulation by closures



const user =(function () {
    let name = "Me";

    function getName() {
        return name;
    }

    function setName(val) {
        name = val;
    }

    return {
        getName : getName,
        setName :setName
    }
})();
console.log(user.getName());
user.setName("Valera");
console.log(user.getName());





const number =(function () {
    let numb = 0;

    function inc() {
        return numb++;
    }

    function decr() {
        return numb--;
    }

    function getNumb() {
        return numb;
    }

    return {
        inc : inc,
        decr : decr,
        getNumb : getNumb
    }

})();
console.log(number.getNumb());
number.inc();
number.inc();
number.inc();
number.inc();
number.inc();
console.log(number.getNumb());