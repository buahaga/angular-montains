import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationServicePost {

  constructor( private http: HttpClient, private toastr: ToastrService) { }

  api = 'http://localhost:3200/api';
  loggedIn = new BehaviorSubject<boolean>(false);
  token;

  login(email: string, password: string) {
    this.http.post(this.api + '/login', {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.loggedIn.next(true);
      this.token = resp.token;
      sessionStorage.setItem('sessionUser', this.token);
      this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
    }, (errorResp) => {
      this.loggedIn.next(undefined);
      errorResp.error ? this.toastr.error(errorResp.error.errorMessage) : this.toastr.error('An unknown error has occured.');
    });
  }

}
