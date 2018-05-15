import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  user;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getAuthentication();
  }

  getAuthentication(): void {
    this.AuthenticationService.getService('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(user => this.user = user)
  }

}
