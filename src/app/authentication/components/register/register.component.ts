import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ValidationService } from '../../../shared/services/validation.service';
import { LoginModel } from '../../interfaces/login';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private form: FormGroup;
  private password: FormControl;
  private regStatus: string;

  constructor(
    private authenticationService: AuthenticationService,
    private validationService: ValidationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      'email': new FormControl('guest@gmail.com', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
      'password': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(1)])
    }, this.validationService.checkPasswordsMatch('password', 'confirmPassword'));
  }

  register() {
    const regModel: LoginModel = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };
    this.authenticationService.register(regModel)
      .subscribe(
        (data) => { this.regStatus = 'You registered successfully!' },
        (error) => { this.regStatus = 'Smth. went wrong!' }
      );
  }

}
