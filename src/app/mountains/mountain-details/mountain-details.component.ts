import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mountain } from '../../models/mountain';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-mountain-details',
  templateUrl: './mountain-details.component.html',
  styleUrls: ['./mountain-details.component.css']
})
export class MountainDetailsComponent implements OnInit {

  private mountain: Mountain;
  private commentForm: FormGroup;
  private comments = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

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

}
