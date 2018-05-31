import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { Mountain } from '../interfaces/mountain';

@Injectable()
export class MountainResolver implements Resolve<Mountain> {

  constructor(private http: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mountain> {
        const id = route.params['id'];
        return this.http.getMountain(id)
    }

}
