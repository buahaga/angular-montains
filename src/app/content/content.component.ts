import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceGet } from '../services/authentication-get.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title: string = 'ContentCompoent';
  api: string = 'http://localhost:3200/api/content';
  token: string = this.authGet.getToken();

  constructor(public authGet: AuthenticationServiceGet ) {}

  ngOnInit() {
    console.log(this.token)
    this.authGet.getService(this.api, this.token).subscribe(data => {
      console.log(data);
    });
  }

}
