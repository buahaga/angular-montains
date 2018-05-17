import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
// TODO POST remove
export class AuthenticationServicePost {

  constructor( private http: HttpClient) { }

  login(url: string, email: string, password: string): Observable<any> {
    return this.http.post(url, { email, password})
  }

}
