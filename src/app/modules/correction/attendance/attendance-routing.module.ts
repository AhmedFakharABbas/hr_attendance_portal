import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import{EmpComponent} from "./emp_attendance/emp.component";
import { LineManagerComponent } from './line_manager_attendance/line-manager.component';
import { HRAttendComponent } from './hr_attendance/hrattend.component';




const routes:Routes=[
  {
    path:"emp",
    component:EmpComponent
  },
  {
    path:"line-manager",
    component:LineManagerComponent
  },
  {
    path:"hr",
    component:HRAttendComponent
  },



]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes) ],
  exports:[RouterModule]
})
export class AttendanceRoutingModule { }
