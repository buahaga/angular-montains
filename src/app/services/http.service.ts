import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl: string = environment.apiUrl + '/mountains';

  constructor(private httpClient: HttpClient) { }

  public getMountains(queryParams = {}): Observable<any> {
    const params = new HttpParams()
      .set('params', JSON.stringify(queryParams));
    return this.httpClient.get(this.apiUrl, {params});
  }

}
