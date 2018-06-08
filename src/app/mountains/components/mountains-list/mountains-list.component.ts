import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mountain } from '../../interfaces/mountain';
import { FilterService } from '../../services/filter.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.css']
})

export class MountainsListComponent implements OnInit {

  public mountains: Mountain[];
  public totalPages: number;
  public currentPage: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public route: ActivatedRoute,
    public router: Router,
    public filterService: FilterService) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.route.queryParams.subscribe(params => {
        this.currentPage = params.currentPage ? Number(params.currentPage) : 1;
      });

      this.filterService.filter
        .subscribe((data) => {
          const queryParams = data;
          this.router.navigate(['mountains'], { queryParams });
        });

      this.route.data
        .subscribe(data => {
          this.mountains = data.mountains;
          this.totalPages = data.count;
        });
    }
  }

  onPageChange(page) {
    this.currentPage = page;
    const queryParams = this.filterService.filter.getValue();
    this.filterService.setFilter(Object.assign({}, queryParams, { currentPage: this.currentPage }));
  }

}
