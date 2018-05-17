import { Injectable } from '@angular/core';

@Injectable()
export class GetTokenService {

  getToken() {
    console.log(sessionStorage.getItem('sessionUser'))
    return sessionStorage.getItem('sessionUser');
  }

}
