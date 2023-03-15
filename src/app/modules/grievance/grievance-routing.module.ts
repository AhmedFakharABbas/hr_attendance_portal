import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { EmployeePortalComponent } from './portals/employee-portal/employee-portal.component';
import { EnquiriesComponent } from './portals/hr-portal/enquiries/enquiries.component';
import{EnquiriesDetailsComponent} from './portals/hr-portal/enquiries-details/enquiries-details.component';
import { CeoEnquiriesComponent } from './portals/CEO-portal/enquiries/enquiries.component';
import{CeoEnquiriesDetailsComponent} from './portals/CEO-portal/enquiries-details/enquiries-details.component'
import { LmEnquiriesComponent } from './portals/LM-portal/enquiries/enquiries.component';
import{LmEnquiriesDetailsComponent} from './portals/LM-portal/enquiries-details/enquiries-details.component';
 import { LmPortalComponent } from './portals/LM-portal/lm-portal/lm-portal.component';
import { ConductComponent } from './portals/hr-portal/conduct/conduct.component';
import{ConductSetupComponent}from './portals/hr-portal/conduct-setup/conduct-setup.component';
const routes:Routes=[
  {
    path:"emp_portal",
    component:EmployeePortalComponent
  },
  {
    path:"lm_portal",
    component:LmPortalComponent
  },
  {
    path:"line-manager/enquiries",
    component:LmEnquiriesComponent
  },

  {
    path:"line_manager/enquiries/details",
    component:LmEnquiriesDetailsComponent
  },

  {
    path:"hr/enquiries",
    component:EnquiriesComponent
  },

  {
    path:"hr/enquiries/details",
    component:EnquiriesDetailsComponent
  },
  {
    path:"hr/conduct",
    component:ConductComponent
  },
  {
    path:"hr/conduct_setup",
    component:ConductSetupComponent
  },
  {
    path:"ceo/enquiries",
    component:CeoEnquiriesComponent
  },

  {
    path:"ceo/enquiries/details",
    component:CeoEnquiriesDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes) ],
  exports:[RouterModule]
})
export class GrievanceRoutingModule { }
