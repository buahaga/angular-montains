import { Component, OnInit } from '@angular/core';
import { AuthenticationServicePost } from '../services/authentication-post.service';
// import { AuthenticationServiceGet } from '../services/authentication-get.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  email = '';
  password = '';
  loggedIn;

  constructor(private authenticationServicePost: AuthenticationServicePost) { }

  ngOnInit() {
    this.authenticationServicePost.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  doLogin() {
    this.authenticationServicePost.login(this.email, this.password)
  }

  // getAuthentication(): void {
  //   this.AuthenticationServiceGet.getService('https://jsonplaceholder.typicode.com/posts/1')
  //     .subscribe(user => this.user = user)
  // }

}
