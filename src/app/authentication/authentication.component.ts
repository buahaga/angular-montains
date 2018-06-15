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

  private form: FormGroup;

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
      );
  }

}
