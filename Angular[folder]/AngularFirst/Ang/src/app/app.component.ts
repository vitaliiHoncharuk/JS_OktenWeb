import { Component } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected _cookieService: CookieService) {}
  isLogin = this.setCookie('isLogin', 'true');
  names: User[] = [Vitalik, Tanya, Vika, Alex];
  changeCookie(): void {
    this.getObj('isLogin') ? this.setCookie('isLogin', 'false') : this.setCookie('isLogin', 'true');
  }
  addToFriend(name): void {
    console.log(name);
  }
  setCookie(key: string, val: string) {
    return this._cookieService.put(key, val);
  }
  getObj(key: string) {
    return this._cookieService.getObject(key);
  }
}
export interface User {
  login: string;
  name: string;
  password: string;
  mail: string;
}

const Vitalik: User = {
  login: 'vitalika123',
  name : 'Vitalii',
  password: 'Vitali4ok',
  mail: 'vitalii@gmail.com'
};
const Tanya: User = {
  login: 'tanka999',
  name : 'Tanya',
  password: 'tanysha123',
  mail: 'tani4ka@gmail.com'
};
const Vika: User = {
  login: 'vikusa123',
  name : 'Viktoria',
  password: 'qwerty123',
  mail: 'viktoriaPushka@gmail.com'
};
const Alex: User = {
  login: 'CoolBoy228',
  name : 'Alex',
  password: 'tryToGuessXD',
  mail: 'alex1949@gmail.com'
};
