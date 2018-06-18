import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { Mountain } from '../../interfaces/mountain';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.css']
})

export class MountainsListComponent implements OnInit {

  public mountains: Mountain[];
  public totalPages: number;
  public currentPage: number;
  private itemsPerPage: number = 10;
  private mapLat: number = 36.1100;
  private mapLng: number = 16.9500;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService) { }

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
          this.totalPages = Math.ceil(data.count / this.itemsPerPage);
        });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    const queryParams = this.filterService.filter.getValue();
    this.filterService.setFilter(Object.assign({}, queryParams, { currentPage: this.currentPage }));
  }

  markerClick(id: number) {
    this.router.navigate([`mountains/${id}`])
  }

  mouseOver(infoWindow) {
    infoWindow.open();
  }

  mouseOut(infoWindow) {
    infoWindow.close();
  }

}
