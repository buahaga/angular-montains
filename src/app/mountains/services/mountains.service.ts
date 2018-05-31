import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Mountain } from '../interfaces/mountain';

@Injectable({
  providedIn: 'root'
})
export class MountainsService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getMountains(queryParams = {}): Observable<Mountain[]> {
    const params = new HttpParams()
      .set('params', JSON.stringify(queryParams));
    return this.httpClient.get(`${this.apiUrl}/mountains`, { params })
      .pipe(map(data => <Mountain[]>data));
  }

  public getCount(queryParams = {}): Observable<string> {
    const params = new HttpParams()
      .set('params', JSON.stringify(queryParams));
    return this.httpClient.get(`${this.apiUrl}/count`, { params })
      .pipe(map(data => JSON.stringify(data)));
  }

  public getMountain(id): Observable<Mountain> {
    return this.httpClient.get(`${this.apiUrl}/mountains/${id}`)
      .pipe(map(data => <Mountain>data));
  }

}
