import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MountainsService } from '../services/mountains.service';
import { Mountain } from '../interfaces/mountain';

@Injectable()
export class MountainsCountResolver implements Resolve<number> {

  constructor(private http: MountainsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<number> {
    const queryParams = route.queryParams;
    return this.http.getCount(queryParams)
      .pipe(map(resp => Number(resp)));
  }

}
