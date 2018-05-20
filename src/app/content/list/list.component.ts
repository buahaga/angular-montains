import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mountain } from '../../models/mountain';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  mountains: Mountain[];

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.mountains = data.mountains;
      });
  }

}
