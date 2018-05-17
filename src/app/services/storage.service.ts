import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  get(auth: string) {
    return sessionStorage.getItem(auth);
  }

  set(auth: string, payload: string) {
    return sessionStorage.setItem(auth, payload);
  }

  clear() {
    return sessionStorage.clear();
  }

}
