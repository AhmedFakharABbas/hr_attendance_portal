import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeaveListViewFiltersForm } from 'src/app/shared/form/leave-list-view-filters.form';
import { APIs } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveListService {

  client_id = "eyJpdiI6IlZzR2JraHZRbGdDamJPQzlEcXkwYWc9PSIsInZhbHVlIjoiMmVVeWVKOEt0NTR2eHNPR1pjNlhRZz09IiwibWFjIjoiN2I3YWM0NDg5NDhiMDVjNThjYzRhZWE2ZTVkYmQ4MWQ4YmIyOTY2OGU2MDIyYmI3YTA4MzU1NTBhMGEwNzBiMCJ9";
  detailView = false;
  viewIs: string;
  applicationListDataSource = new BehaviorSubject([]);
  application_count = '';
  group_by = 'type';

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    public leaveListViewFiltersForm: LeaveListViewFiltersForm,
  ) { }

  // ========================= HR application list
  getHRLeaveApplicationListAPI(params?) {
    let param = new HttpParams()
      .set('application_status', this.filterControlValue('application_status'));

    param = param
      .append('user_id', this.get_e_user_id())
      .append('client_id', this.client_id)
      .append('filter_by', this.filterControlValue('filter_by'));

    if (params && params.group_name && params.group_id)
      param = param
        .append('group_name', params.group_name)
        .append('group_id', params.group_id);

    if (this.group_by)
      param = param
        .append('group_by[]', String([this.group_by]));

    return this.http.get<any>(APIs.getHRLeaveApplicationList, { params: param });
  }

  getHRLeaveApplicationList(params?) {
    // this.applicationListDataSource.next([]);
    this.getHRLeaveApplicationListAPI(params)
      .subscribe(resp => {
        this.application_count = resp.application_count;

        const applicationListDataSource = [];

        if (this.group_by == 'type') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              application_type: app.group_title,
              applications_count: app.application_count,
              applicants_count: app.applicant_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'employee') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              employee: app.group_title,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'department') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              department: app.group_title,
              applicants_count: app.applicant_count,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'branch') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              branch: app.group_title,
              applicants_count: app.applicant_count,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (!this.group_by) {
          return this.createNoGroupDataObject(resp.leaves.data, 'hr');
        }

        this.applicationListDataSource.next(applicationListDataSource);
      });
  }

  filterList(event) {

    this.group_by = '';
    this.detailView = true;

    // this.applicationListDataSource.next([]);
    let params = {
      application_status: this.filterControlValue('application_status'),
      filter_by: this.filterControlValue('filter_by'),
      group_name: event.group_name,
      group_id: event.group_id
    }

    if (this.viewIs === 'hr')
      this.getHRLeaveApplicationListAPI(params)
        .subscribe(resp => {
          this.createNoGroupDataObject(resp.leaves.data, 'hr');
        });
    if (this.viewIs === 'lm')
      this.getLMLeaveApplicationListAPI(params)
        .subscribe(resp => {
          this.createNoGroupDataObject(resp.leaves.data, 'lm');
        });
  }

  createNoGroupDataObject(data, screen) {
    const applicationListDataSource = [];
    let link;
    if (screen == 'lm') {
      link = '/lm_leave_apps/lm_leave_detail';
    } else {
      link = '/hr_leave_apps/hr_leave_detail';
    }

    for (const app of data) {
      applicationListDataSource.push({
        name: {
          name: app.name,
          link: link,
          id: app.leave_id
        },
        application_date: app.receivedDate,
        leave_type: app.leave_type,
        from: app.from_date,
        to: app.to_date,
        total_days: app.total_days,
        lm_status: app.lm_status,
        hr_status: app.hr_status
      });
    }
    this.applicationListDataSource.next(this.setStatus(applicationListDataSource));
  }

  setStatus(dataset: Array<any>): Array<any> {
    const sortedArray = [];
    for (const iterator of dataset) {
      sortedArray.push(
        {
          ...iterator,
          lm_status: {
            value: this.commonService.checkApplicationStatus(iterator.lm_status),
            color: this.commonService.checkApplicationStatusColor(iterator.lm_status),
            modal: this.getModalName(1),
            app_id: iterator.name.id
          },
          hr_status: {
            value: this.commonService.checkApplicationStatus(iterator.hr_status),
            color: this.commonService.checkApplicationStatusColor(iterator.hr_status),
            modal: this.getModalName(1),
            app_id: iterator.name.id
          },
        }
      );
    }
    return sortedArray;
  }

  getModalName(id: number): String {
    return this.commonService.modalNames.filter(map => map.id === id)[0].name;
  }

  // ========================= LM application list
  getLMLeaveApplicationListAPI(params?) {
    let param = new HttpParams()
      .set('application_status', this.filterControlValue('application_status'))
      .append('user_id', this.get_e_user_id())
      .append('client_id', this.client_id)
      .append('filter_by', this.filterControlValue('filter_by'));

    if (params && params.group_name && params.group_id)
      param = param
        .append('group_name', params.group_name)
        .append('group_id', params.group_id);

    if (this.group_by)
      param = param
        .append('group_by[]', String([this.group_by]));

    return this.http.get<any>(APIs.getLMLeaveApplicationList, { params: param });
  }

  getLMLeaveApplicationList(params?) {
    // this.applicationListDataSource.next([]);
    this.getLMLeaveApplicationListAPI(params)
      .subscribe(resp => {
        this.application_count = resp.application_count;

        const applicationListDataSource = [];

        if (this.group_by == 'type') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              application_type: app.group_title,
              applications_count: app.application_count,
              applicants_count: app.applicant_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'employee') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              employee: app.group_title,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'department') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              department: app.group_title,
              applicants_count: app.applicant_count,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (this.group_by == 'branch') {
          for (const app of resp.group.data) {
            applicationListDataSource.push({
              branch: app.group_title,
              applicants_count: app.applicant_count,
              applications_count: app.application_count,
              action: {
                group_name: app.group_name,
                group_id: app.group_id,
              }
            });
          }
        } else if (!this.group_by) {
          return this.createNoGroupDataObject(resp.leaves.data, 'lm');
        }

        this.applicationListDataSource.next(applicationListDataSource);
      });
  }

  // ========================= Emp application list
  getEmployeeLeaveApplicationList() {

    let param = new HttpParams()
      .set('status', '-1')
      .append('user_id', this.get_e_user_id());

    return this.http.get<any>(APIs.getEmployeeLeaveApplicationList, { params: param })
      .pipe(map((resp: any) => {

        const leaveList = [];
        for (const data of resp.leaves.data) {
          leaveList.push({
            application_date: {
              name: data.added_date,
              link: '/emp_attendance_leave/emp_leave_detail',
              id: data.leave_id
            },
            from: data.from_date,
            leave_type: data.leave_type,
            to: data.to_date,
            total_days: data.total_days,
            lm_status: this.generateEmpLMStatus(data)
          });
        }
        return leaveList;
      }))
  }
  get_e_user_id() {
    return JSON.parse(localStorage.getItem('e_user_id'));
  }

  filterControlValue(controlName: string) {
    return this.leaveListViewFiltersForm.filterForm.get(controlName).value;
  }

  generateEmpLMStatus(data) {
    if (data.lm_status == 4) {
      return {
        value: this.commonService.checkApplicationStatus(data.lm_status),
        color: this.commonService.checkApplicationStatusColor(data.lm_status),
        app_id: data.leave_id,
        resubmit: true
      }
    } else {
      return {
        value: this.commonService.checkApplicationStatus(data.lm_status),
        color: this.commonService.checkApplicationStatusColor(data.lm_status),
        modal: this.getModalName(1),
        app_id: data.leave_id
      }
    }
  }

}
