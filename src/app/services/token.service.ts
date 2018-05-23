import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Token } from '../models/token';

@Injectable()
export class TokenService {

  constructor(private storage: StorageService) { }

  getToken() : Token {
    const token = JSON.parse(this.storage.get('userToken'))
    return token ? token : null
  }

  setToken(payload: Token | null) {
    this.storage.set('userToken', JSON.stringify(payload))
  }

}
