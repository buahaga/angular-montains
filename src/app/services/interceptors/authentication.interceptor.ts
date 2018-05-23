import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from '../token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userToken: string | boolean = false;
    let userTokenExpires: string | boolean = false;
    if (this.tokenService.getToken()) {
      userToken = this.tokenService.getToken().userToken;
      userTokenExpires = this.tokenService.getToken().userTokenExpires;
    }
    request = request.clone({
      setHeaders: {
        Authorization: userToken ? userToken : '',
        Expiration: userTokenExpires ? userTokenExpires.toString() : ''
      }
    });
    return next.handle(request);
  }

}
