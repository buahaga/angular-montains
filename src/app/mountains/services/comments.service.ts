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

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getComments(id): Observable<Comment[]> {
    return this.httpClient.get(`${this.apiUrl}/comments/${id}`)
      .pipe(map(data => <Comment[]>data));
  }

  public addComment(comment): Observable<Partial<Comment>> {
    return this.httpClient.post(`${this.apiUrl}/comments`, comment);
  }

}
