import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Mountain } from '../../interfaces/mountain';
import { TokenService } from '../../../shared/services/token.service';
import { FilterService } from '../../services/filter.service';
import { MountainsService } from '../../services/mountains.service';
import { CommentsService } from '../../services/comments.service';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-mountain-details',
  templateUrl: './mountain-details.component.html',
  styleUrls: ['./mountain-details.component.css']
})
export class MountainDetailsComponent implements OnInit {

  public commentForm: FormGroup;
  public queryParams: Filter | {};
  public currentUser: string;
  public mountain: Mountain;
  public comments = [];

  constructor(
    public http: MountainsService,
    public httpComments: CommentsService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public token: TokenService,
    public filterService: FilterService) { }

  ngOnInit() {
    this.createForm();
    this.currentUser = this.token.getToken().user;
    this.queryParams = this.filterService.filter.getValue();
    this.route.data
      .subscribe(data => {
        this.mountain = data.mountain;
        this.comments = data.comments;
      });
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: new FormControl('')
    });
  }

  sendComment() {
    if (this.commentForm.value.comment) {
      this.httpComments.addComment({
        mountain: this.mountain.id,
        user: this.currentUser,
        comment: this.commentForm.value.comment
      }).subscribe(() => {
        this.commentForm.get('comment').setValue('');
        this.router.navigate([`/mountains/${this.mountain.id}`]);
      });
    }
  }

}
