import { Injectable, } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  checkPasswordsMatch(compared: string, comparator: string) {
    return (control: AbstractControl) => {
      const password = control.get(compared).value;
      const confirmPassword = control.get(comparator).value;
      return (password !== confirmPassword) ? { 'notMatching': true } : null;
    }
  }

}
