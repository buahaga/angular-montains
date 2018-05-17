import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class TokenService {

  constructor(public storage: StorageService) { }

  //TODO make TokenModel whit exptime and return it as Token
  // get(): Token | null {
  //   return this.storageService.get('userToken') as Token;
  // }

  getToken() {
    return this.storage.get('userToken');
  }

  getExpirationTime() {
    return this.storage.get('userTokenExpires');
  }

}
