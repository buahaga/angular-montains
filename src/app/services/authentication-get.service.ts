import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceGet {

  constructor(private httpClient: HttpClient) { }

  public getService(url: string, token: string): Observable<any>{
    return this.httpClient.get(url);
  }

  public isAuthenticated(): boolean {
  const token = this.getToken();
  let auth;
  token ? auth = true : auth = false;
  return auth;
}

  public getToken() {
    return sessionStorage.getItem('sessionUser');
  }
}
