import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationServiceGet } from './authentication-get.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(public authGet: AuthenticationServiceGet) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authGet.getToken()}`
      }
    });
    console.log('header set to: ' + this.authGet.getToken())
    return next.handle(request);
  }
}
