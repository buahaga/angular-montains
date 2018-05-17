import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceGet } from '../services/authentication-get.service';
import { environment } from '../../environments/environment';
import { GetTokenService } from '../services/get-token.service';


@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    public authenticationServiceGet: AuthenticationServiceGet,
    public getTockenService: GetTokenService ) {}

  title: string = 'ContentCompoent';
  token: string = this.getTockenService.getToken();
  apiUrl: string = environment.apiUrl + '/content';

  ngOnInit() {
    this.authenticationServiceGet.getConfirm(this.apiUrl, this.token).
      subscribe(
        req => console.log(req)
      )
  }

}
