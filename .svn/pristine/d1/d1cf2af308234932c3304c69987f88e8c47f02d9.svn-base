import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EligibilityEntitlementSetupService {

  criCondSetupEvent = new BehaviorSubject({});
  criCondSetupData = new BehaviorSubject({});

  leaveSetup = [
    {
      criteria: 'Employee Type',
      control: {
        field_type: '',
        multi: '',
      },
      value: [
        {
        }
      ],
    },
    {
      criteria: 'Band',
      control: {
      },
      value: [
        {
        }
      ],
    },
    {
      criteria: 'Department',
      control: {
      },
      value: [
        {
        }
      ],
    },
    {
      criteria: 'Sub-Department',
      control: {
      },
      value: [
        {
        }
      ],
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  getCriteriaSetupFeildsBySetupType(setup_type: number) {
    let param = new HttpParams()
      .set('setup_type', String(setup_type));

    return this.http.get(APIs.getCriteriaSetupFeildsBySetupType, { params: param });
  }

  getSubDepartmentsByDepartment(ids: Array<number>) {
    let param = new HttpParams();
    param = param.append('department_id[]', String(ids));
    return this.http.get(APIs.getSubDepartmentsByDepartment, { params: param });
  }

}
