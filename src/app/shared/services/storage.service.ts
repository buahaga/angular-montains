import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  private storage = sessionStorage;

  get(key: string) {
    if (isPlatformBrowser) {
      return this.storage.getItem(key);
    }
  }

  set(key: string, payload: string) {
    if (isPlatformBrowser) {
      this.storage.setItem(key, payload);
    }
  }

}
