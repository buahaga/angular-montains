import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn:'root'
})
export class StorageService {

  public storage = sessionStorage;

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, payload: string) {
    this.storage.setItem(key, payload);
  }

}
