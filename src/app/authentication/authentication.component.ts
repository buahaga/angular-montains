import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginModel } from '../models/login-model';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  form: FormGroup;
  formError: boolean = false;

  constructor(
    public authenticationService: AuthenticationService,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur' }]
    });
  }

  login() {
    const loginModel: LoginModel = this.form.value;

    this.authenticationService.login(loginModel)
      .subscribe(
        resp => {
          this.router.navigate(['content']);
          return resp;
        }, (error) => {
          // TODO this.form.invalid => think how to make it work this way?
          console.log(error)
          this.formError = true
        }
      )
  }

}
