import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private storage: StorageService) { }

  getToken(): Token {
    if (isPlatformBrowser) {
      const token = JSON.parse(this.storage.get('userToken'));
      return token ? token : null;
    }
  }

  setToken(payload: Token | null) {
    if (isPlatformBrowser) {
      this.storage.set('userToken', JSON.stringify(payload));
    }
  }

}
