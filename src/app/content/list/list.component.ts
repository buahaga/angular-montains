import { Component, OnInit } from '@angular/core';
import { Mountain } from '../../models/mountain';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public httpSerivice: HttpService) { }
  mountains: Mountain[];

  ngOnInit() {
    this.httpSerivice.getMountains()
      .subscribe((resp) => this.mountains = resp);
  }

}
