import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailService {

  client_id = "eyJpdiI6IlZzR2JraHZRbGdDamJPQzlEcXkwYWc9PSIsInZhbHVlIjoiMmVVeWVKOEt0NTR2eHNPR1pjNlhRZz09IiwibWFjIjoiN2I3YWM0NDg5NDhiMDVjNThjYzRhZWE2ZTVkYmQ4MWQ4YmIyOTY2OGU2MDIyYmI3YTA4MzU1NTBhMGEwNzBiMCJ9";
  leaveDetail;
  applicationApprovelDetail;

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  getLeaveApplicationDetailAPI(id, role_id) {

    let param = new HttpParams()
      .set('leave_id', id);

    param = param
      .append('role_id', role_id)
      .append('user_id', this.get_e_user_id())
      .append('client_id', this.client_id);

    return this.http.get<any>(APIs.getLeaveApplicationDetail, { params: param });
  }

  getLeaveApplicationDetail(id, role_id) {
    this.getLeaveApplicationDetailAPI(id, role_id)
      .subscribe(resp => {

        const leave = resp.Leave;
        this.getLeaveBalanceByEmployee(leave.user_id);

        this.leaveDetail = {
          profile: leave.profile,
          inMyQueue: leave.in_my_queue,
          withDrawStatus: this.checkApprovalQueue({ lm_status: leave.lm_status, hr_status: leave.hr_status }),

          employeeInformation: [
            { label: 'Employee ID', value: leave.empcode },
            { label: 'Full Name', value: leave.name },
            { label: 'Designation', value: leave.designation_name },
            { label: 'Business Unit/Group', value: leave.department },
          ],
          detail: [
            { label: 'Leave Type', value: leave.leave_type, id: leave.leave_type_id },
            { label: 'From', value: leave.from_date },
            { label: 'To', value: leave.to_date },
            { label: 'No. of days', value: leave.nod },
            { label: 'Medical Certificate', value: leave.documents },
            { label: 'Brief Reason', value: leave.reason, id: leave.reason_id },
          ],
          contactDetails: [
            { label: 'Address', value: leave.address },
            { label: 'Telephone (Home)', value: leave.phone },
            { label: 'Mobile', value: leave.mobile },
          ],
          approvalDetails: [
            { label: 'LM Status', value: this.commonService.checkApplicationStatus(leave.lm_status), color: this.commonService.checkApplicationStatusColor(leave.lm_status) },
            { label: 'LM Comments', value: leave.lm_comments },
            { label: 'Dated', value: leave.lm_date },
            { label: 'HR Status', value: this.commonService.checkApplicationStatus(leave.hr_status), color: this.commonService.checkApplicationStatusColor(leave.hr_status) },
            { label: 'HR Comments', value: leave.hr_comments },
            { label: 'Dated', value: leave.hr_date },
          ]
        }
      });
  }

  checkApprovalQueue(approvalDetails) {
    if (approvalDetails.lm_status == 1 || approvalDetails.lm_status == 4 || approvalDetails.hr_status == 4) {
      return true;
    } else {
      return false;
    }
  }


  // Args 'module_id'
  // 1 for leave setup module
  getApplicationApprovelDetail(module_id) {
    let leave_id;
    this.commonService.applicationID.subscribe(id => leave_id = id);

    let param = new HttpParams()
      .set('module_id', module_id);

    param = param
      .append('application_id', leave_id)
      .append('user_id', this.get_e_user_id())
      .append('client_id', this.client_id);

    return this.http.get<any>(APIs.getApplicationApprovelDetail, { params: param })
  }

  getApplicationLog(module_id: string) {
    let leave_id;
    this.commonService.applicationID.subscribe(id => leave_id = id);

    let param = new HttpParams()
      .set('module_id', module_id)
      .append('application_id', leave_id);

    return this.http.get(APIs.getApplicationLog, { params: param })
  }

  leaveBalance = new BehaviorSubject({});
  getLeaveBalanceByEmployee(employeeID: string) {
    let param = new HttpParams()
      .set('employee_id', employeeID);

    this.http.get(APIs.getLeaveBalanceByEmployee, { params: param })
      .subscribe((resp: any) => {
        this.leaveBalance.next(resp);
      });
  }

  lMLeaveStatus(params) {
    let leaveID;
    this.commonService.applicationID.subscribe(id => leaveID = id);

    let body = {
      ...params,
      leave_id: leaveID,
      user_id: this.get_e_user_id(),
      client_id: this.client_id
    }
    return this.http.post(APIs.lMLeaveStatus, body);
  }

  setLeaveStatusByHR(params) {

    let leaveID;
    this.commonService.applicationID.subscribe(id => leaveID = id);

    let body = {
      ...params,
      leave_id: leaveID,
      user_id: this.get_e_user_id(),
      client_id: this.client_id
    }
    return this.http.post(APIs.setLeaveStatusByHR, body);
  }

  withdrawApplication() {
    let leaveID;
    this.commonService.applicationID.subscribe(id => leaveID = id);

    let body = {
      module_id: String(1),
      application_id: leaveID,
    }
    return this.http.post(APIs.WithdrawApplication, body);
  }

  get_e_user_id() {
    return JSON.parse(localStorage.getItem('e_user_id'));
  }

}
