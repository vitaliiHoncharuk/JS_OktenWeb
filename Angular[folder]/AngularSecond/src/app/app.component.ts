import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// TASK
// Створити числову змінну всередині app.component.ts
// в конструкторі організувати інтервал
// Який буде дане число збільшувати на 1 кожної секунди
// Вивести дане число на сторінку
//
// Добавити кнопку
// При кліку на яку дане число буде скидатися на 0

export class AppComponent {
  numbers = [1, 4, 5, 23, -55, 233];
  change = Date.now();
  Ameli = new Unicorn('Amelia', 'Green Forest', 10);
  Naja = new Unicorn('Naja', 'Black Forest', 22);
  Arnetta = new Unicorn('Arnetta', 'Cool Forest', 15);
  Nina = new Unicorn('Nina', 'Green Forest', 33);
  Tito = new Unicorn('Tito', 'Cool Forest', 23);
  Unicorns: Unicorn[] = [this.Ameli, this.Naja, this.Arnetta, this.Nina, this.Tito];

  constructor() {
    setInterval(() => {
      this.change += 1000;
    }, 1000);
  }

  Again() {
    this.change = new Date(this.change).setHours(0, 0, 0, 0);
  }

  store(hours, minutes, seconds) {
    this.change = new Date(this.change).setHours(+hours.value, +minutes.value, +seconds.value, 0);
  }

  sendData(form) {
    if (form.invalid) {
      console.log('Bro,you miss something! Try again!');
    } else {
      this.Unicorns.push(new Unicorn(form.value.name, form.value.wood, form.value.age));
    }
  }

  kickFather(e) {
    console.log(e);
    this.numbers.splice(this.numbers.indexOf(e), 1);
    console.log('OUCH');
  }
}


// Створити клас Єдинорога з довільними полями
// Створити пустий масив якому зберігатимуться єдинорги
// Створити форму з інпутами які відповідають полям класу
// за допомогою даної форми заповнити масив єдинорогами
// Відобразити всіх єдинорогів на сторінці
// створити стрічкове поле
// Створити інпут
// І зробити двохсторонній байндінг
// Вивести стрічкове поле на сторінку


export class Unicorn {
  constructor(public name: string, public wood: string, public age: number) {
  }
}





