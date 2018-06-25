import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, style, transition, animate, stagger, query, animateChild } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { Mountain } from '../../interfaces/mountain';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@listitems', stagger(10, animateChild())),
      ]),
    ]),
    trigger('listitems', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(0.8, -0.6, 0.2, 1.2)',
          style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})

export class MountainsListComponent implements OnInit {

  public mountains: Mountain[];
  public totalPages: number;
  public currentPage: number;
  private itemsPerPage = 10;
  private mapLat = 36.1100;
  private mapLng = 16.9500;

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
    this.router.navigate([`mountains/${id}`]);
  }

  mouseOver(infoWindow) {
    infoWindow.open();
  }

  mouseOut(infoWindow) {
    infoWindow.close();
  }

}
