import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePopupComponent } from "./employee-popup.component";
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [EmployeePopupComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    EmployeePopupComponent
  ]
})
export class EmployeePopupModule { }
