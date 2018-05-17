import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationServiceGet } from './authentication-get.service';
import { GetTokenService } from './get-token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(public authGet: AuthenticationServiceGet, public getTokenService: GetTokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.getTokenService.getToken()
      }
    });
    console.log(this.getTokenService.getToken())
    return next.handle(request);
  }

}
