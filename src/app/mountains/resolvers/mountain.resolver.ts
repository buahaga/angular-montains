import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MountainsService } from '../services/mountains.service';
import { Mountain } from '../interfaces/mountain';

@Injectable()
export class MountainResolver implements Resolve<Mountain> {

  constructor(private http: MountainsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mountain> {
    const id = route.params['id'];
    return this.http.getMountain(id);
  }

}
