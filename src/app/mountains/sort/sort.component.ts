import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  private sortForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.route.queryParams.subscribe(params => {});
  }

  createForm() {
    this.sortForm = this.formBuilder.group({
      byHeight: [''],
      byName: [''],
      heigherThen: ['']
    });
  }

  onSubmit() {
    this.router.navigate(['content'], { queryParams: this.sortForm.value });
  }

}
