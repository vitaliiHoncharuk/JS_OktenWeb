import {Component, Output} from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
    @Output()obj: object = {};
    constructor() {
    }
    sendForm(form) {
        this.obj = form.value;
    }
}
