import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();

  changePage(increase: number) {
    this.currentPage = Number(this.currentPage) + Number(increase);
    this.pageChange.emit(this.currentPage);
  }

}
