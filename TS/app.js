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
        var foundUser = this.Clients.find(function (el) {
            return el.name === clientName;
        });
        if (foundUser != undefined)
            return foundUser;
        else
            console.log("No user with such name,sorry");
    };
    Bank.prototype.addUserMoney = function (clientName, sum) {
        this.minusCash(sum);
        if (this.Cash < 0 || sum < 0) {
            console.log("Sorry,bank has not enough money to afford this or sum is less than 0");
            this.addCash(sum);
        }
        else if (this.findUser(clientName) === undefined)
            console.log("No user with such name,sorry...");
        else {
            this.findUser(clientName).cash += sum;
            console.log("Transaction successfull! " + sum + " were added to " + clientName + " ");
        }
    };
    Bank.prototype.minusUserMoney = function (clientName, sum) {
        console.log(this.findUser(clientName));
        if (this.findUser(clientName) === undefined || sum < 0)
            console.log("No user with such name or sum is unapropriate");
        else {
            this.minusCash(sum);
            if (this.Cash < 0) {
                console.log("Sorry,bank lost all your money,can't give them back to you... Now we're bankrupts");
                this.addCash(sum);
            }
            else {
                this.findUser(clientName).cash -= sum;
                if (this.findUser(clientName).cash < 0) {
                    console.log("Some shit happend, user has not enough money...");
                    this.findUser(clientName).cash += sum;
                }
                else
                    console.log("Transaction successfull! " + sum + " were subtracted from " + clientName + " ");
            }
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
console.log("Before adding money : ");
console.log(george);
console.log(myBank);
myBank.addUserMoney(george.name, 25000);
console.log("After adding money : ");
console.log(george);
console.log(myBank);
