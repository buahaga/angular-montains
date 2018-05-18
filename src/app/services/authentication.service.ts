import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TokenService } from '../services/token.service';
import { LoginModel, AuthorisedModel } from '../models/login-model';
import { Token } from '../models/token';

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
            userToken: data.token,
            userTokenExpires: data.expiration
          }
          this.tokenService.setToken(token);
          return data as AuthorisedModel;
        })
    );
  }
}
