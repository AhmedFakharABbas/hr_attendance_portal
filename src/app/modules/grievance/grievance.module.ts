import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeePortalComponent } from "./portals/employee-portal/employee-portal.component";
import { GrievanceRoutingModule } from "./grievance-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormErrorModule } from "src/app/shared/modules/form-error/form-error.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material/material.module";
import { FooterModule } from "src/app/shared/modules/footer/footer.module";
import { GrievanceFormComponent } from "./grievance-form/grievance-form.component";
import { GrievanceTableComponent } from "./grievance-table/grievance-table.component";
import { EnquiriesComponent } from "./portals/hr-portal/enquiries/enquiries.component";
import { EnquiriesDetailsComponent } from "./portals/hr-portal/enquiries-details/enquiries-details.component";
import { LmEnquiriesDetailsComponent } from "./portals/LM-portal/enquiries-details/enquiries-details.component";
import { LmEnquiriesComponent } from "./portals/LM-portal/enquiries/enquiries.component";
import { CeoEnquiriesComponent } from "./portals/CEO-portal/enquiries/enquiries.component";
import { CeoEnquiriesDetailsComponent } from "./portals/CEO-portal/enquiries-details/enquiries-details.component";
import { LmPortalComponent } from "./portals/LM-portal/lm-portal/lm-portal.component";
import { ConductComponent } from "./portals/hr-portal/conduct/conduct.component";
import { ConductSetupComponent } from "./portals/hr-portal/conduct-setup/conduct-setup.component";
import { ConductSetupDetailsComponent } from "./portals/hr-portal/conduct-setup-details/conduct-setup-details.component";
import { FilterPipe } from "./grievance-form/Pipes/filter.pipe";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { GrievanceService } from "./grievance.service";
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    EmployeePortalComponent,
    GrievanceFormComponent,
    GrievanceTableComponent,
    EnquiriesComponent,
    EnquiriesDetailsComponent,
    LmEnquiriesDetailsComponent,
    LmEnquiriesComponent,
    CeoEnquiriesComponent,
    CeoEnquiriesDetailsComponent,
    LmPortalComponent,
    ConductComponent,
    ConductSetupComponent,
    ConductSetupDetailsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    FormErrorModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FooterModule,
    GrievanceRoutingModule,
    ModalModule.forRoot()
  ],
  providers:[FilterPipe,GrievanceService]
})
export class GrievanceModule {}
