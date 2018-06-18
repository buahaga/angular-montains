import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from '../services/token.service';
import * as jwt from 'jwt-decode';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private tokenService: TokenService,
    private router: Router) { }

  canActivate(): boolean {
    let isTokenActive: number | boolean = false;
    const decoded = (token) => jwt(token).expiration;
    if (isPlatformBrowser) {
      if (this.tokenService.getToken()) {
        isTokenActive = decoded(this.tokenService.getToken().userToken);
      }
      if (!isTokenActive || isTokenActive < Date.now()) {
        this.tokenService.setToken(null);
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
  }

}
