import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class FilterService {

  constructor(private storage: StorageService) { }

  getFilter() {
    const filter = JSON.parse(this.storage.get('userFilter'))
    return filter ? filter : null
  }

  setFilter(payload) {
    this.storage.set('userFilter', JSON.stringify(payload))
  }

}
