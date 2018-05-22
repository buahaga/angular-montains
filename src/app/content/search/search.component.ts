import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  private searchForm: FormGroup;

  ngOnInit() {
    this.createForm();
    this.route.queryParams.subscribe(params => {});
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  onSubmit() {
    this.router.navigate(['content'], { queryParams: this.searchForm.value });
  }

}
