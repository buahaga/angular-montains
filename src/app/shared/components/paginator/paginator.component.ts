import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();
  public pagination;

  ngOnChanges() {
    this.pagination = this.makePaginator(this.totalPages, this.currentPage);
  }

  selectPage(page) {
    (page !== '...') ? this.pageChange.emit(Number(page)) : false;
  }

  changePage(increase: number) {
    this.currentPage = Number(this.currentPage) + Number(increase);
    this.pageChange.emit(this.currentPage);
  }

  makePaginator(n: number, c: number) {
    const arr = this.makeArray(n);
    const range = this.makeRange(c, arr[arr.length - 1]);
    return range;
  }

  makeArray(n: number) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  makeRange(first: number, final: number) {
    const current = first;
    const last = final;
    const delta = 2;
    const rangeWithDots = [];
    let range = [];
    let length;

    if (current > 1 && current < last - 1) {
      range.push(current);
      range.push(last);
      for (let i = 1; i <= ((delta * 2) - 2) / 2; i++) {
        range.push(current + i);
        range.push(current - i);
      }
      range.sort((a, b) => (a - b));
    } else if (current > (last - delta * 2) || current > last - 1) {
      const arr = this.makeArray(this.totalPages);
      range = (arr.length >= delta * 2) ? arr.slice(arr.length - delta * 2) : arr.slice();
    } else {
      const arr = this.makeArray(delta * 2 - 1);
      arr.push(last);
      range = arr;
      range.sort((a, b) => (a - b));
    }

    for (const i of range) {
      if (length) {
        if (i - length === 2) {
          rangeWithDots.push(length + 1);
        } else if (i - length !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      length = i;
    }
    return rangeWithDots;
  }

}
