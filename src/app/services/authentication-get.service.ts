import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceGet {

  constructor(private httpClient: HttpClient) { }

  public getConfirm(url: string, token: string): Observable<any>{
    return this.httpClient.get(url);
  }
  
}


//TODO check starge service (guard)
// if token is not exist redirect to login page
// if token is exist send request to server (resolver)
// if server send 401 redirect to login
