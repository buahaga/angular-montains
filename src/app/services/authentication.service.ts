import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/login-model';

@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient) { }
  apiUrl: string = environment.apiUrl + '/login';
  //TODO Observable types => will it be not different by error
  login(login: LoginModel): Observable<any> {
    return this.http.post(this.apiUrl, login)
  }

}
