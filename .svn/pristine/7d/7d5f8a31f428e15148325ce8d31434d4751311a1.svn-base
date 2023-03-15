import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalsHomeComponent } from './portals-home.component';
import { Routes, RouterModule } from '@angular/router';
import { PortalLMComponent } from './portal-lm/portal-lm.component';
import { PortalHrComponent } from './portal-hr/portal-hr.component';
import { PortalCeoComponent } from './portal-ceo/portal-ceo.component';
import { PortalEmployeeComponent } from './portal-employee/portal-employee.component';
import { PortalAdminComponent } from './portal-admin/portal-admin.component';
import { PortalFinanceComponent } from './portal-finance/portal-finance.component';
import { PortalCrComponent } from './portal-cr/portal-cr.component';
import { PortalBusinessLeaderComponent } from './portal-business-leader/portal-business-leader.component';
import { SectionProfileComponent } from './shared/section-profile/section-profile.component';
import { SectionUpdateComponent } from './shared/section-update/section-update.component';
import { SectionApplicationStatusComponent } from './shared/section-application-status/section-application-status.component';
import { SectionNewApplicationComponent } from './shared/section-new-application/section-new-application.component';
import { SectionNewEmployeesComponent } from './shared/section-new-employees/section-new-employees.component';
import { FormsModule } from '@angular/forms';

const route: Routes = [

  { path: 'emportal', component: PortalEmployeeComponent },
  { path: 'lmportal', component: PortalLMComponent },
  { path: 'hrportal', component: PortalHrComponent },
  { path: 'ceoportal', component: PortalCeoComponent },
  { path: 'adminportal', component: PortalAdminComponent },
  { path: 'financeportal', component: PortalFinanceComponent },
  { path: 'crportal', component: PortalCrComponent },
  { path: 'blportal', component: PortalBusinessLeaderComponent },

  {
    path: '',
    loadChildren: () => import('../../../shared/modules/menu-page/menu-page.module')
      .then(m => m.MenuPageModule)
  },
];

@NgModule({
  declarations: [
    PortalsHomeComponent,
    PortalLMComponent,
    PortalHrComponent,
    PortalCeoComponent,
    PortalEmployeeComponent,
    PortalAdminComponent,
    PortalFinanceComponent,
    PortalCrComponent,
    PortalBusinessLeaderComponent,
    SectionProfileComponent,
    SectionUpdateComponent,
    SectionApplicationStatusComponent,
    SectionNewApplicationComponent,
    SectionNewEmployeesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class PortalsHomeModule { }
