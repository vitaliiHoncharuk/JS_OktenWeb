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
  names: string[] = ['Vitalii', 'Tanya', 'Olena', 'Alex', 'Oleg', 'George', 'Inna', 'Ola', 'Ira'];
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

