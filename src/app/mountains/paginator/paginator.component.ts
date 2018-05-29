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

  selectPage(evt) {
    const val = Number(evt.target.textContent);
    (val) ? this.pageChange.emit(val) : false;
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
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  makeRange(first: number, final: number) {
    const current = first;
    const last = final;
    const delta = 1;
    const left = current - delta;
    const right = current + delta + 1;
    let range = [];
    const rangeWithDots = [];
    let length;

    for (let i = current; i <= last; i++) {
      if (i === current || i === last || i >= left && i < right) {
        range.push(i)
      }
    }

    for (let i of range) {
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
