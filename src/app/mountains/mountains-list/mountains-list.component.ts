import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mountain } from '../../models/mountain';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.css']
})
export class MountainsListComponent implements OnInit {

  private mountains: Mountain[];
  private totalPages: number = 42;
  private currentPage: number = 1;
  private itemsPerPage: number = 12;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.filter
      .subscribe((data) => {
        const queryParams = data;
        this.router.navigate(['mountains'], { queryParams });
      });

    this.route.queryParams.subscribe(params => {
        this.currentPage = params.currentPage ? params.currentPage : 1;
    });

    this.route.data
      .subscribe(data => {
        this.mountains = data.mountains;
    });

  }

  onPageChange(page) {
    this.currentPage = page;
    const queryParams = JSON.parse(JSON.stringify(this.filterService.filter.getValue()));
    this.filterService.setFilter(Object.assign(queryParams, {currentPage: this.currentPage, itemsPerPage: this.itemsPerPage }));
  }

}
