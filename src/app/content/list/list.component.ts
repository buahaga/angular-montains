import { Component, OnInit } from '@angular/core';
import { MountainModel } from '../../models/mountain-model';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public httpSerivice: HttpService) { }
  mountains: MountainModel[];

  ngOnInit() {
    this.httpSerivice.getMountains()
      .subscribe((resp) => this.mountains = resp);
  }

}
