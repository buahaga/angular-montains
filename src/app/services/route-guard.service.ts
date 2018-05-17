import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from './token.service';
import { StorageService } from './storage.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(
    public tockenService: TokenService,
    public storageService: StorageService,
    public router: Router) {}

  canActivate(): boolean {
    const token = this.tockenService.getToken();
    const expiration = (Number(this.tockenService.getExpirationTime()) > Number(new Date()));

    if (!token || !expiration) {
      this.storageService.clear();
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
