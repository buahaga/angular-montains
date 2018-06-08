import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { LoginModel } from './interfaces/login';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public form: FormGroup;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public authenticationService: AuthenticationService,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {
      this.createForm();
  }

  isPlatformBrowser() {
    console.log('we are in browser authentication')
    return isPlatformBrowser(this.platformId);
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
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
      )
  }

}
