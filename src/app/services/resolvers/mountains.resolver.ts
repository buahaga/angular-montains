import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { Mountain } from '../../models/mountain';

@Injectable()
export class MountainsResolver implements Resolve<any> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mountain[]> {
        const queryParams = route.queryParams;
        return this.http.getMountains(queryParams)
          .pipe(map(resp => resp))
    }

}
