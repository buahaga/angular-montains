import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Mountain } from '../../models/mountain';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  mountain: Mountain;
  comment: string = '';
  newComment: string = '';

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
      });
  }

  sendComment() {
    this.newComment = this.comment;
    this.comment = '';
  }

  goBack() {
    this.location.back()
  }

}
