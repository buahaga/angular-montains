import { Component, OnInit } from '@angular/core';
import { AuthenticationServicePost } from '../services/authentication-post.service';
import { environment } from '../../environments/environment';

import { Router, CanActivate } from '@angular/router';
import { GetTokenService } from '../services/get-token.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

// TODO formControl
  email = '';
  password = '';
  loggedIn = '';
  apiUrl: string = environment.apiUrl + '/login';

  constructor(
    private authenticationServicePost: AuthenticationServicePost,
    public getTockenService: GetTokenService,
    public router: Router,
    public jwtHelper: JwtHelperService) { }

  ngOnInit() {
    //this.redirectToContent();
    sessionStorage.setItem('sessionUser', this.loggedIn)
  }

  doLogin() {
    this.authenticationServicePost.login(this.apiUrl, this.email, this.password)
      .subscribe(
        res => {
          this.loggedIn = res.token;
          sessionStorage.clear();
          sessionStorage.setItem('sessionUser', this.loggedIn);
          console.log(res)
          return res;
        }
      )


      // .map((response: any) => {
      //   sessionStorage.setItem('sessionUser', response.token);
      //   return response;
      // });
      //
      // .subscribe((resp: any) => {
      //   this.loggedIn.next(true);
      //   this.token = resp.token;
      //   sessionStorage.setItem('sessionUser', this.token);
      //   this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
      // }, (errorResp) => {
      //   this.loggedIn.next(undefined);
      //   errorResp.error ? this.toastr.error(errorResp.error.errorMessage) : this.toastr.error('An unknown error has occured.');
      // });
  }

  redirectToContent(): boolean {
    const token = this.getTockenService.getToken();
    //const helper = new JwtHelperService();
    // && helper.isTokenExpired(token)
    if (token) {
      this.router.navigate(['content']);
      return false;
    }
    return false;
  }

}
