import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StorageService } from '../services/storage.service';
import { LoginModel } from '../models/login-model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  form: FormGroup;
  loginError: boolean = false;

  constructor(
    public authenticationService: AuthenticationService,
    public storageService: StorageService,
    public router: Router,
    public formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    const loginModel = this.form.value as LoginModel;
    this.authenticationService.login(loginModel)
      .subscribe(
        resp => {
          //move to service => how do I move this to service, when I only get resp on subscirbe?
          this.storageService.set('userToken', resp.token);
          this.storageService.set('userTokenExpires', resp.exp);
          this.router.navigate(['content']);
          return resp;
        }, (error) => {
          this.loginError = true;
        }
      )
  }

}
