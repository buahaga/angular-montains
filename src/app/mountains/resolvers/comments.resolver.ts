import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../interfaces/comment';

@Injectable()
export class CommentsResolver implements Resolve<Comment[]> {

  constructor(private http: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> {
    const id = route.params['id'];
    return this.http.getComments(id);
  }

}
