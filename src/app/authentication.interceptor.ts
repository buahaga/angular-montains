import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req.headers.append('Authorization', '<SOME-TOKEN>')
      console.log('got headers from req: ' + req.headers);
    return next.handle(req);
  }
}
