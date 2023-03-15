import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeAttendanceForm {
  mainFilters = new FormGroup({});
  leavesFilters = new FormGroup({});

  barChartFilters = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  initAnnualAttendanceSummaryForm(control: string) {
    this.mainFilters.addControl(control, this.fb.control(true));
  }

  initLeavesBreakDownForm(control: string) {
    this.leavesFilters.addControl(control, this.fb.control(true));
  }

  initBarChartForm(control: string, value: boolean) {
    this.barChartFilters.addControl(control, this.fb.control(value));
  }

}
