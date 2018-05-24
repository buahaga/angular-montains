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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    const query = this.filterService.filter
      .subscribe((data) => {
        const queryParams = data;
        this.router.navigate(['mountains'], { queryParams });
      });
    this.route.data
      .subscribe(data => {
        this.mountains = data.mountains;
    });

  }

}
