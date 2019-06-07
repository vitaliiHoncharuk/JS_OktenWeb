import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {UserModel} from './userModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private _cookieService: CookieService) {
    }

    show = false;
    isLogin = this.setCookie('isLogin', 'false');
    names: UserModel[] = [Vitalik, Tanya, Vika, Alex, Mike, John, Dasha];

    toShow(): void {
        this.show ? this.show = false : this.show = true;
    }
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

    // qwe(e) {
    //     console.log('From Eeeeeeeee...');
    //     console.log(e);
    // }
}

const Vitalik: UserModel = {
    login: 'vitalika123',
    name: 'Vitalii',
    password: 'Vitali4ok',
    mail: 'vitalii@gmail.com',
    photo: '../assets/Photos/1.png'
};
const Tanya: UserModel = {
    login: 'tanka999',
    name: 'Tanya',
    password: 'tanysha123',
    mail: 'tani4ka@gmail.com',
    photo: '../assets/Photos/2.jpg'
};
const Vika: UserModel = {
    login: 'vikusa123',
    name: 'Viktoria',
    password: 'qwerty123',
    mail: 'viktori@gmail.com',
    photo: '../assets/Photos/3.jpg'
};
const Alex: UserModel = {
    login: 'CoolBoy228',
    name: 'Alex',
    password: 'tryToGuessXD',
    mail: 'alex1949@gmail.com',
    photo: '../assets/Photos/4.jpg'
};

const Mike: UserModel = {
    login: 'Michael',
    name: 'Mike',
    password: 'wutitiputi123',
    mail: 'wutit123@gmail.com',
    photo: '../assets/Photos/5.png'
};
const John: UserModel = {
    login: 'JonhyBoy',
    name: 'John',
    password: 'bestPass',
    mail: 'johnyboyofficial@gmail.com',
    photo: '../assets/Photos/6.png'
};
const Dasha: UserModel = {
    login: 'Dashulka',
    name: 'Daria',
    password: 'dashkawow',
    mail: 'dasha1995@gmail.com',
    photo: '../assets/Photos/7.png'
};
