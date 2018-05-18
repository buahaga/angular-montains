import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from '../token.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router) {}

  canActivate(): boolean {
    const { userToken, userTokenExpires } = this.tokenService.getToken();

    if (!userToken || !(Number(userTokenExpires) > Date.now())) {
      this.tokenService.setToken(null);
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
