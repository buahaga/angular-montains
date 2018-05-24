import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {

  constructor() { }

  filter: BehaviorSubject<any> = new BehaviorSubject<any>({});

  setFilter(filter) {
    this.filter.next(filter);
  }

}
