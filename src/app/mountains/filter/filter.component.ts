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

  private filterForm: FormGroup;
  private filter = {
    search: '',
    byHeight: '',
    byName: '',
    heigherThen: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    this.setFormValues();
    this.createForm();
  }
//TODO what is wrong here?
  setFormValues () {
    const filter = this.filterService.filter.getValue();
    Object.keys(filter).map((key) => {
      console.log(this.filter)
      if (this.filter[key]) {
        this.filter[key] = filter[key]
      }
      console.log(this.filter)
    })
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      search: [this.filter.search],
      byHeight: [this.filter.byHeight],
      byName: [this.filter.byName],
      heigherThen: [this.filter.heigherThen]
    });
  }

  onSubmit() {
    const queryParams = {};
    Object.entries(this.filterForm.value).forEach(([key, value]) => {
      if (value) {
        queryParams[key] = value;
      }
    });
    this.filterService.setFilter(queryParams);
  }

}
