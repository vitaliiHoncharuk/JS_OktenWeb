import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {LoginFormComponent} from './Register-form/login-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
