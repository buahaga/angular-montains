import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  private mountain: Mountain;
  private commentForm: FormGroup;
  private queryParams: Filter | {};
  private login: string;
  private comment: string;
  private currentUser: string;
  private comments = [];
  private imagesSrc = ["http://dummyimage.com/500x300.png/cc0000/ffffff", "http://dummyimage.com/900x200.png/5fa2dd/ffffff", "http://dummyimage.com/1200x800.png/ff4444/ffffff", "http://dummyimage.com/1200x300.png/dddddd/ffffff", "http://dummyimage.com/800x800.png/5fa2dd/ffffff"];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private token: TokenService,
    private filterService: FilterService) { }

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
      comment: ['']
    });
  }

  sendComment() {
    this.comments.push(this.commentForm.value.comment);
  }

}
