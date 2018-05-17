import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor( public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    const exp = this.tokenService.getExpirationTime();

    request = request.clone({
      setHeaders: {
        Authorization: token ? token : '',
        Expiration: exp ? exp : ''
      }
    });
    return next.handle(request);
  }

}
