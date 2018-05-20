import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mountain } from '../../models/mountain';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  mountain: Mountain;
  comment: string = '';
  newComment: string = '';

  ngOnInit() {
    // console.log(this.route.snapshot.data['id'])
    // this.mountain = this.route.snapshot.data['id'];
    // let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // this.mountains()
    //   .subscribe((resp) => this.mountain = resp[id-1])
    // console.log(this.route.data.pipe(map(data => data.mountain)))

    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
      });
  }

  sendComment() {
    this.newComment = this.comment;
    this.comment = '';
  }

}
