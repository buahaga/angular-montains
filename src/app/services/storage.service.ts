import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable()
export class StorageService {

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  set(key: string, payload: string) {
    sessionStorage.setItem(key, payload);
  }

}
