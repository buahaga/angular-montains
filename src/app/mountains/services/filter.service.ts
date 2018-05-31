import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../interfaces/filter';

@Injectable()
export class FilterService {

  constructor() { }

  filter: BehaviorSubject<Partial<Filter>> = new BehaviorSubject({});

  setFilter(filter) {
    this.filter.next(filter);
  }

}
