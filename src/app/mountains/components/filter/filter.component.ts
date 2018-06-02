import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private filterForm: FormGroup;
  private filter: Filter = {
    search: '',
    byHeight: '',
    byName: '',
    heigherThen: '',
    currentPage: '',
    minDanger: 0,
    maxDanger: 10,
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private filterService: FilterService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.filterService.setFilter(params);
        Object.keys(params).map((key) => {
          this.filter[key] = params[key]
        })
    });
    this.createForm();
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      search: [this.filter.search],
      byHeight: [this.filter.byHeight],
      byName: [this.filter.byName],
      heigherThen: [this.filter.heigherThen],
      danger: new FormGroup({
          minDanger: new FormControl(0),
          maxDanger: new FormControl(10)
      }),
    });
  }

  onSubmit() {
    const queryParams = {};
    Object.entries(this.filterForm.value).forEach(([key, value]) => {
      if (typeof value === 'object') {
        const obj = value;
        const query = Object.keys(value);
        for (let i = 0; i < query.length; i++) {
          queryParams[query[i]] = obj[query[i]];
        }
      } else if (value) {
        queryParams[key] = value;;
      }
    });
    this.filterService.setFilter(queryParams);
  }

}
