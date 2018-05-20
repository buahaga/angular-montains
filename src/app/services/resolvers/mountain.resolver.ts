import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Injectable()
export class MountainResolver implements Resolve<any> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.params['id'];
        console.log(route)
        return this.http.getMountains()
          .pipe(map(resp => resp[id-1]))
    }

}
