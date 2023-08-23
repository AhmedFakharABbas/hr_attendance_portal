import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendaceCorrectionComponent } from './attendance-emp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormErrorModule } from '../../../shared/modules/form-error/form-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { FooterModule } from '../../../shared/modules/footer/footer.module';

const route: Routes = [
  { path: '', component: AttendaceCorrectionComponent }
];

@NgModule({
  declarations: [
    AttendaceCorrectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormErrorModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FooterModule,
    RouterModule.forChild(route),
  ]
})
export class AttendanceCorrectionEmpModule { }
