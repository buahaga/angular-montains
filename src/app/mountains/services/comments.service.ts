import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public apiUrl: string = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  public postComment(comment): Observable<any> {
    console.log(comment)
    return this.httpClient.post(`${this.apiUrl}/comments`, comment)
  }

  public getComments(id): Observable<Comment[]> {
    return this.httpClient.get(`${this.apiUrl}/comments/${id}`)
      .pipe(map(data => <Comment[]>data));
  }

}
