//TASK
//створитти масив імен
// створити масив прикметників
// створити функцію яка буде з даних масивів вибирати радномні значення
// конкатинуватиме і повертатиме це значення (Golden Rick, Big Rom...)
//
// =========================================================================


const names: string[] = ['Vitalii', 'Tanya', 'Olena', 'Alex', 'Oleg', 'George', 'Inna', 'Ola', 'Ira'];
const adj: string[] = require("adjectives");


function generate(): string[] {

    return adj.map((el) => {
        return el += " " + names[Math.floor(Math.random() * (names.length - 1) + 1)]
    });
}

let genArr = generate();
// console.log(genArr);


//створити інтерфейс Client(name,surname,age,cash)
//
// створити клас Bank
// з приватними полями полями Cash, Name, Clients
//
// добавити методи:
//   -addCash(number) -> добавлятиме гроші в поле cash
//   -minusCash(number) -> відніматиме гроші з поля cash
//   -addUser(client) добавлятиме користувача в Clients
//   -minusUser(clientName) видалятиме користувача з масиву
//   -findUser(clientName) знаходитиме користувача в масиві Clients і повертатиме його
//   -addUserMoney(clientName, sum) добавлятиме в поле користувача cash гроші і відніматиме їх з банку
//   -minusUserMoney(clientName, sum) відніматиме з поля користувача cash гроші і відніматиме їх з банку
// =========================================================================


interface Client {
    name: string,
    surname: string,
    age: number,
    cash: number
}

class Bank {
    constructor(private Cash: number, private Name: string, private Clients: Client[]) {

    }

    addCash(cash: number): void {
        if (cash > 0)
            this.Cash += cash;
    }

    minusCash(cash: number): void {
        if (cash > 0)
            this.Cash -= cash;
    }

    addUser(client: Client): void {
        this.Clients.push(client);
    }

    findUser(clientName: string): Client {
        return this.Clients.find(el => {
            return el.name === clientName
        });
    }

    addUserMoney(clientName: string, sum: number) {
        if (this.Cash - sum < 0 || sum < 0 || this.findUser(clientName) === undefined) {
            console.log("Sorry,some shit happend. Check inputs, if everything ok - bank has no money to afford it.");
        } else {
            this.minusCash(sum);
            this.findUser(clientName).cash += sum;
            console.log(`Transaction successfull! ${sum} were added to ${clientName} `);
        }
    }

    minusUserMoney(clientName: string, sum: number): void {
        if (this.findUser(clientName) === undefined || sum < 0 || this.Cash - sum < 0 || this.findUser(clientName).cash - sum < 0)
            console.log("Bad input, or someone has not enough money");
        else {
                    this.minusCash(sum);
                    this.findUser(clientName).cash -= sum;
                    console.log(`Transaction successfull! ${sum} were subtracted from ${clientName} `);
        }
    }

}

let firstClient: Client = {
    name: "Tina",
    surname: "Blunarie",
    age: 23,
    cash: 24000
};
let secondClient: Client = {
    name: "George",
    surname: "Rokford",
    age: 45,
    cash: 15000
};
let myBank = new Bank(1000000, "BigBank", []);


myBank.addCash(5);
myBank.addUser(firstClient);
myBank.addUser(secondClient);


// console.log(myBank.findUser("qwe"));

let george: Client = myBank.findUser("George");


myBank.addUserMoney(george.name, 25000);


console.log(george);
console.log(myBank);
