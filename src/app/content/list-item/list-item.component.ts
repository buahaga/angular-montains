import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MountainModel } from '../../models/mountain-model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private httpSerivice: HttpService
  ) { }

  mountain: MountainModel;
  comment: string = '';
  newComment: string = '';

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.httpSerivice.getMountains()
      .subscribe((resp) => this.mountain = resp[id-1])
  }

  sendComment() {
    this.newComment = this.comment;
    this.comment = '';
  }

}
