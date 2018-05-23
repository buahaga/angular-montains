import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private sortForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    this.createForm();
    this.filterService.setFilter(null);
    // this.route.queryParams.subscribe(params => {});
  }

  createForm() {
    this.sortForm = this.formBuilder.group({
      search: [''],
      byHeight: [''],
      byName: [''],
      heigherThen: ['']
    });
  }

  onSubmit() {
    this.router.navigate(['mountains'], { queryParams: this.sortForm.value });
    this.filterService.setFilter(this.sortForm.value);
    //TODO setFilter not by submit - so you don't clear filter if you don't need to do
  }

}
