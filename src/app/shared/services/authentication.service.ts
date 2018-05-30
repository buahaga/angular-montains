import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';
import { LoginModel } from '../interfaces/login';
import { AuthorisedModel } from '../interfaces/authorised'
import { Token } from '../interfaces/token';

@Injectable()
export class AuthenticationService {

  private apiUrl: string = environment.apiUrl + '/login';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  login(login: LoginModel): Observable<any> {
    return this.http.post(this.apiUrl, login)
      .pipe(
        map((data: AuthorisedModel) => {
          const token: Token = {
            user: data.user,
            userToken: data.token,
            userTokenExpires: data.expiration.toString()
          }
          this.tokenService.setToken(token);
          return data;
        })
    );
  }
}
