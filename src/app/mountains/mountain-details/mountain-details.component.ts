import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mountain } from '../../models/mountain';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-mountain-details',
  templateUrl: './mountain-details.component.html',
  styleUrls: ['./mountain-details.component.css']
})
export class MountainDetailsComponent implements OnInit {

  private mountain: Mountain;
  private commentForm: FormGroup;
  private comments = [];
  private queryParams;
  private lat: number;
  private lng: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private filterService: FilterService) { }

  ngOnInit() {
    this.createForm();
    this.queryParams = this.filterService.filter.getValue();
    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
        this.lat = data.mountain.lat;
        this.lng = data.mountain.lng;
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
