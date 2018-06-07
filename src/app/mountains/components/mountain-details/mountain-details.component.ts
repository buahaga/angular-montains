import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Mountain } from '../../interfaces/mountain';
import { TokenService } from '../../../shared/services/token.service';
import { FilterService } from '../../services/filter.service';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-mountain-details',
  templateUrl: './mountain-details.component.html',
  styleUrls: ['./mountain-details.component.css']
})
export class MountainDetailsComponent implements OnInit {

  public mountain: Mountain;
  public commentForm: FormGroup;
  public queryParams: Filter | {};
  public login: string;
  public comment: string;
  public currentUser: string;
  public comments = [];
  public imagesSrc = [
    "http://dummyimage.com/1200x300.png/cc0000/ffffff",
    "http://dummyimage.com/900x300.png/5fa2dd/ffffff",
    "http://dummyimage.com/1400x400.png/ff4444/ffffff",
    "http://dummyimage.com/1200x400.png/dddddd/ffffff",
    "http://dummyimage.com/1000x300.png/5fa2dd/ffffff"
  ];

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public token: TokenService,
    public filterService: FilterService) { }

  ngOnInit() {
    this.currentUser = this.token.getToken().user;
    this.createForm();
    this.queryParams = this.filterService.filter.getValue();
    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
        this.login = data.mountain.login;
        this.comment = data.mountain.comment;
      });
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: new FormControl('')
    });
  }

  sendComment() {
    if (this.commentForm.value.comment) {
      this.comments.push(this.commentForm.value.comment);
      this.commentForm.get('comment').setValue('');
    }
  }

}
