import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  canActivate(): boolean {
    let userToken: string | boolean = false;
    let userTokenExpires: string | boolean = false;
    if (this.tokenService.getToken()) {
      userToken = this.tokenService.getToken().userToken;
      userTokenExpires = this.tokenService.getToken().userTokenExpires;
    }
    if (!userToken || !(Number(userTokenExpires) > Date.now())) {
      this.tokenService.setToken(null);
      this.router.navigate(['login']);
      return false;
    }
    return true;

  }
}
