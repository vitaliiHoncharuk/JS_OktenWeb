//TASK
//створитти масив імен
// створити масив прикметників
// створити функцію яка буде з даних масивів вибирати радномні значення
// конкатинуватиме і повертатиме це значення (Golden Rick, Big Rom...)
//
// =========================================================================
var names = ['Vitalii', 'Tanya', 'Olena', 'Alex', 'Oleg', 'George', 'Inna', 'Ola', 'Ira'];
var adj = require("adjectives");
function generate() {
    return adj.map(function (el) {
        return el += " " + names[Math.floor(Math.random() * (names.length - 1) + 1)];
    });
}
var genArr = generate();
var Bank = /** @class */ (function () {
    function Bank(Cash, Name, Clients) {
        this.Cash = Cash;
        this.Name = Name;
        this.Clients = Clients;
    }
    Bank.prototype.addCash = function (cash) {
        if (cash > 0)
            this.Cash += cash;
    };
    Bank.prototype.minusCash = function (cash) {
        if (cash > 0)
            this.Cash -= cash;
    };
    Bank.prototype.addUser = function (client) {
        this.Clients.push(client);
    };
    Bank.prototype.findUser = function (clientName) {
        return this.Clients.find(function (el) {
            return el.name === clientName;
        });
    };
    Bank.prototype.addUserMoney = function (clientName, sum) {
        if (this.Cash - sum < 0 || sum < 0 || this.findUser(clientName) === undefined) {
            console.log("Sorry,some shit happend. Check inputs, if everything ok - bank has no money to afford it.");
        }
        else {
            this.minusCash(sum);
            this.findUser(clientName).cash += sum;
            console.log("Transaction successfull! " + sum + " were added to " + clientName + " ");
        }
    };
    Bank.prototype.minusUserMoney = function (clientName, sum) {
        if (this.findUser(clientName) === undefined || sum < 0 || this.Cash - sum < 0 || this.findUser(clientName).cash - sum < 0)
            console.log("Bad input, or someone has not enough money");
        else {
            this.minusCash(sum);
            this.findUser(clientName).cash -= sum;
            console.log("Transaction successfull! " + sum + " were subtracted from " + clientName + " ");
        }
    };
    return Bank;
}());
var firstClient = {
    name: "Tina",
    surname: "Blunarie",
    age: 23,
    cash: 24000
};
var secondClient = {
    name: "George",
    surname: "Rokford",
    age: 45,
    cash: 15000
};
var myBank = new Bank(1000000, "BigBank", []);
myBank.addCash(5);
myBank.addUser(firstClient);
myBank.addUser(secondClient);
// console.log(myBank.findUser("qwe"));
var george = myBank.findUser("George");
myBank.addUserMoney(george.name, 25000);
console.log(george);
console.log(myBank);
