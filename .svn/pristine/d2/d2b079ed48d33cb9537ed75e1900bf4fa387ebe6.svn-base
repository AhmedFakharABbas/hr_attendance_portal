import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { PeopleFrameComponent } from '../../shared/components/people-frame/people-frame.component';
import { SimpleHeaderComponent } from '../../shared/components/simple-header/simple-header.component';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
const routerOptions: ExtraOptions = {
  // scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload'
};
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '', component: PeopleFrameComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboards/portals-home/portals-home.module')
          .then(m => m.PortalsHomeModule)
      },

       {
        path: 'grievance',
        loadChildren: () => import('../../modules/grievance/grievance.module')
          .then(m => m.GrievanceModule)
      }
      , {
        path: 'attendance',
        loadChildren: () => import('../../modules/correction/attendance/attendance.module')
          .then(m => m.AttendanceModule)
      }

    ],
  },
  {
    path: '',
    component: SimpleHeaderComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        // canActivate: [AuthGuard],
        children: [
          {
            path: 'portals',
            loadChildren: () => import('../dashboards/portals/portals.module')
              .then(m => m.PortalsModule)
          },
        ]
      },
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
];
