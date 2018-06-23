import { Injectable, } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidator {

  static isEqual(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return (password !== confirmPassword) ? { 'notMatching': true } : null;
  }

}
