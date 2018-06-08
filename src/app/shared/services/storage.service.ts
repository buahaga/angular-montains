import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Token } from '../interfaces/token';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public storage = sessionStorage;

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
