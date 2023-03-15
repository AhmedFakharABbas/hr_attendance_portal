import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  client_id = "eyJpdiI6IlZzR2JraHZRbGdDamJPQzlEcXkwYWc9PSIsInZhbHVlIjoiMmVVeWVKOEt0NTR2eHNPR1pjNlhRZz09IiwibWFjIjoiN2I3YWM0NDg5NDhiMDVjNThjYzRhZWE2ZTVkYmQ4MWQ4YmIyOTY2OGU2MDIyYmI3YTA4MzU1NTBhMGEwNzBiMCJ9";
  constructor(
    private http: HttpClient,
  ) { }

  applyLeave(formData, application_id?: string) {
    const dataSet = {
      ...formData,
      employee_id: this.get_e_user_id(),
      client_id: this.client_id
    }
    let param = new HttpParams();
    if (application_id)
      param = param.set('application_id', application_id);

    return this.http.post(APIs.applyLeave, dataSet, { params: param });
  }

  getApplicableLeaveByEmployee() {
    let param = new HttpParams()
      .set('employee_id', this.get_e_user_id())

    return this.http.get(APIs.getApplicableLeaveByEmployee, { params: param });
  }

  get_e_user_id() {
    return JSON.parse(localStorage.getItem('e_user_id'));
  }


}
