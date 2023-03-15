import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LeaveListViewFiltersForm {

  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  initFilterForm() {
    return this.filterForm = this.fb.group({
      application_status: this.fb.control(1),
      filter_by: this.fb.control('my_queue'),
    });
  }

}
