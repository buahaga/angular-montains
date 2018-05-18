import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Token } from '../models/token';

@Injectable()
export class TokenService {

  constructor(public storage: StorageService) { }

  getToken() : Token {
    const token = JSON.parse(this.storage.get('userToken'))
    return token ? token : false
  }

  setToken(payload: Token | null) {
    this.storage.set('userToken', JSON.stringify(payload))
  }

}
