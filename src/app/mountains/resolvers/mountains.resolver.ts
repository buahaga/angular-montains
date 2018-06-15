import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MountainsService } from '../services/mountains.service';
import { Mountain } from '../interfaces/mountain';

@Injectable()
export class MountainsResolver implements Resolve<Mountain[]> {

  constructor(private http: MountainsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Mountain[]> {
    const queryParams = route.queryParams;
    return this.http.getMountains(queryParams);
  }

}
