import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable()
export class StorageService {

  private storage = sessionStorage;

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, payload: string) {
    this.storage.setItem(key, payload);
  }

}
