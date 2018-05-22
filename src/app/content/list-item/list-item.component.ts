import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Mountain } from '../../models/mountain';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  mountain: Mountain;
  commentForm: FormGroup;
  comments = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
      });
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }

  sendComment() {
    this.comments.push(this.commentForm.value.comment);
  }

  goBack() {
    this.location.back()
  }

}
