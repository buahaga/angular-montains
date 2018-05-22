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
        }, (error) => {
          this.form.setErrors({ incorrectLoginOrPassword: true });
        }
      )
  }

  loginByEnter(event) {
    if(event.keyCode == 13) {
      alert('fix submit on enter')
      this.login()
    }
  }

}
