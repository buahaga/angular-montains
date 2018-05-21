import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  apiUrl: string = environment.apiUrl + '/content';

  public getMountains(sortOptions): Observable<any> {
    const params = new HttpParams()
      .set('sort', JSON.stringify(sortOptions));
    return this.httpClient.get(this.apiUrl, {params});
  }

}
