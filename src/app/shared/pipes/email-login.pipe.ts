import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emailtologin'
})
export class EmailToLoginPipe implements PipeTransform {
  transform(value: string):string {
    let result = value.split('@')[0];
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
  }
}
