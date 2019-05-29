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

    addCash(cash: number) {
        if ( cash > 0 ) 
        this.Cash += cash;
    }

    minusCash(cash: number) {
        if ( cash > 0 )
            this.Cash -= cash;
    }

    addUser(client: Client) {
        this.Clients.push(client);
    }

    findUser(clientName: string) {
        let foundUser = this.Clients.find(el => {
            return el.name === clientName
        });
        if (foundUser != undefined) return foundUser;
        else console.log("No user with such name,sorry");
    }

    addUserMoney(clientName: string, sum: number) {
        this.minusCash(sum);
        if (this.Cash < 0 || sum < 0) {
            console.log("Sorry,bank has not enough money to afford this or sum is less than 0");
            this.addCash(sum);
        } else if (this.findUser(clientName) === undefined) console.log("No user with such name,sorry...");
        else {
            this.findUser(clientName).cash += sum;
            console.log(`Transaction successfull! ${sum} were added to ${clientName} `);
        }
    }

    minusUserMoney(clientName: string, sum: number) {
        console.log(this.findUser(clientName));
        if (this.findUser(clientName) === undefined || sum < 0) console.log("No user with such name or sum is unapropriate");
        else {
            this.minusCash(sum);
            if (this.Cash < 0) {
                console.log("Sorry,bank lost all your money,can't give them back to you... Now we're bankrupts");
                this.addCash(sum);
            } else {
                this.findUser(clientName).cash -= sum;
               if(this.findUser(clientName).cash < 0) {
                   console.log("Some shit happend, user has not enough money...");
                   this.findUser(clientName).cash += sum;
               }
               else
                console.log(`Transaction successfull! ${sum} were subtracted from ${clientName} `);
            }
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

let george:Client =  myBank.findUser("George");





myBank.addUserMoney(george.name,25000);


console.log(george);
console.log(myBank);
