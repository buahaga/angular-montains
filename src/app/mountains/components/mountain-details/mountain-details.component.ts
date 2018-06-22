import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  public mountain: Mountain;
  public comments = [];
  private currentUser: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: MountainsService,
    private httpComments: CommentsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private filterService: FilterService) { }

  ngOnInit() {
    this.createForm();
    if (isPlatformBrowser) {
      this.currentUser = this.tokenService.getToken().user;
    }
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
