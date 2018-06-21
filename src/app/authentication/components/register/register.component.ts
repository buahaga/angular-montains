import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginModel } from '../../interfaces/login';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private regForm: FormGroup;
  private regStatus: string;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.regForm = this.formBuilder.group({
      regEmail: ['example@gmail.com', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      regPassword: ['', { validators: [Validators.required, Validators.minLength(1)] }],
      confirmPassword: ['', { validators: [Validators.required, Validators.minLength(1)] }]
    }, {
        validator: this.checkPasswordMatch, updateOn: 'blur'
      });
  }

  checkPasswordMatch(ac: AbstractControl) {
    const regPassword = ac.get('regPassword').value;
    const confirmPassword = ac.get('confirmPassword').value;
    (regPassword !== confirmPassword) ? ac.get('confirmPassword').setErrors({ noMatch: true }) : null;
  }

  register() {
    const regModel: LoginModel = {
      email: this.regForm.controls.regEmail.value,
      password: this.regForm.controls.confirmPassword.value
    };
    this.authenticationService.register(regModel)
      .subscribe(
        resp => {
          this.regStatus = 'You registered successfully! LOG IN!';
        }, (error) => {
          this.regStatus = 'Smth. went wrong! Please, try another time...';
        }
      );
  }

}
