import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GetTokenService } from './get-token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(
    public getTockenService: GetTokenService,
    public router: Router,
    public jwtHelper: JwtHelperService) {}

  canActivate(): boolean {
    const helper = new JwtHelperService();
    const token = this.getTockenService.getToken();

    if (!token || !helper.isTokenExpired(token)) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
  }
}
