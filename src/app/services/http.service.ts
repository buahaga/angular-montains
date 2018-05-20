import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }
  apiUrl: string = environment.apiUrl + '/content';

  public getMountains(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
