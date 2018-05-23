import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mountain } from '../../models/mountain';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.css']
})
export class MountainsListComponent implements OnInit {

  private mountains: Mountain[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.mountains = data.mountains;
    });
  }

}
