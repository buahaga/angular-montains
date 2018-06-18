import { Observable } from 'rxjs';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userToken: string | boolean = false;
    if (isPlatformBrowser) {
      if (this.tokenService.getToken()) {
        userToken = this.tokenService.getToken().userToken;
      }
      request = request.clone({
        setHeaders: {
          Authorization: userToken ? userToken : '',
        }
      });
      return next.handle(request);
    }
  }

}
