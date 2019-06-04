// Створити пайп який буде повертати дефолтне значення передане
// Як аргумент в тому випадку якщо змінна до якої використовується
// Пайп дорівнює null, undefined...
//
// {{null | defaultpipe:'default'}}
// Output -> 'default'
//
// {{'xxx' | defaultpipe:'default'}}
// Output -> 'xxx'

import { Pipe, PipeTransform } from '@angular/core';
import {unescapeHtml} from '@angular/platform-browser/src/browser/transfer_state';

@Pipe({
  name: 'defaultpipe'
})
export class DefaultpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value ===  null || value === undefined) {
      return args;
    }
    return value;
  }

}
