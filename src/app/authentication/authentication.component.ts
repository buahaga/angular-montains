import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { LoginModel } from './interfaces/login';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private form: FormGroup;
  private modal: boolean = false;
  private regForm: FormGroup;
  private regStatus: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['admin@gmail.com', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required, Validators.minLength(1)] }]
    });
  }

  login() {
    const loginModel: LoginModel = this.form.value;
    this.authenticationService.login(loginModel)
      .subscribe(
        resp => {
          this.router.navigate(['mountains']);
        }, (error) => {
          this.form.setErrors({ incorrectLoginOrPassword: true });
        }
      );
  }

  startRegistration () {
    this.createRegisterForm();
    this.manageModal();
  }

  manageModal() {
    this.modal = !this.modal;
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
          this.regStatus = 'You registered successfully! Please, LOG IN!';
        }, (error) => {
          this.regStatus = 'Smth. went wrong! Please, try another time...';
        }
      );
  }

}
