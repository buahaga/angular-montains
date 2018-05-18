import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from '../token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor( public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { userToken, userTokenExpires } = this.tokenService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: userToken ? userToken : '',
        Expiration: userTokenExpires ? userTokenExpires.toString() : ''
      }
    });
    return next.handle(request);
  }

}
