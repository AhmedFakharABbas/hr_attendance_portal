import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from 'src/environments/environment';
import { IDropDownsData, ILeaveSetupGeoGroups } from '../shared/models/leave-phase-2.model';
import { map } from 'rxjs/operators';
import { ModulesSetupForm } from '../shared/form/modules-setup.form';

@Injectable({
  providedIn: 'root'
})
export class LeaveSetupService {

  constructor(
    private http: HttpClient,
    private modulesSetupForm: ModulesSetupForm
  ) { }

  getCompanies() {
    return this.http.get<IDropDownsData>(APIs.getCompanies);
  }

  getGeoFilterDataByParent(filter_name: string, IDs: Array<any>) {
    let param = new HttpParams()
      .set('filter_name', filter_name);

    for (const id of IDs) {
      param = param.append('id[]', id);
    }

    return this.http.get<IDropDownsData>(APIs.getGeoFilterDataByParent, { params: param });
  }

  getCountriesByGeoGroups(geo_group: string, IDs: Array<any>) {
    const ids = IDs;
    let param = new HttpParams()
      .set('geo_group', geo_group);

    for (const id of ids) {
      param = param.append('id[]', id);
    }

    return this.http.get<IDropDownsData>(APIs.getCountriesByGeoGroups, { params: param });
  }

  getGeoGroups(companyID: string) {
    let params = new HttpParams().set('company_id', companyID);
    return this.http.get<ILeaveSetupGeoGroups>(APIs.getGeoGroups, { params: params });
  }

  getLeaveTypes() {
    return this.http.get<IDropDownsData>(APIs.getLeaveTypes);
  }

  getSandwitchRuleTypes() {
    return this.http.get<IDropDownsData>(APIs.getSandwichRuleTypes);
  }

  getShortLeaveDailyLimit() {
    return this.http.get<IDropDownsData>(APIs.getShortLeaveDailyLimit);
  }

  getYearEndBasis() {
    return this.http.get<IDropDownsData>(APIs.getYearEndBasis);
  }

  getShortLeaveCriteriaOptions() {
    return this.http.get<IDropDownsData>(APIs.getShortLeaveCriteriaOptions);
  }

  getHalfLeaveCriteriaOptions() {
    return this.http.get<IDropDownsData>(APIs.getHalfLeaveCriteriaOptions);
  }

  getReasonsBySetup(setup_type_id: number, category_id: number) {
    let param = new HttpParams()
      .set('setup_type_id', String(setup_type_id));
    param = param.append('category_id', String(category_id));

    return this.http.get(APIs.getReasonsBySetup, { params: param });
  }

  getCalculationBasis() {
    return this.http.get<IDropDownsData>(APIs.getCalculationBasis);
  }

  getLeaveSetupList(paramsArray: Array<any>) {
    let param = new HttpParams();

    for (const params of paramsArray) {
      if (params.value && params.value.length)
        param = param.append(params.attribute + '[]', params.value);
    }

    return this.http.get(APIs.getLeaveSetupList, { params: param });
  }

  getLeaveSetupDetail(setup_id: string) {
    let param = new HttpParams().set('setup_id', setup_id);

    return this.http.get(APIs.getLeaveSetupDetail, { params: param });
  }

  saveSetup(formValue) {
    return this.http.post(APIs.saveLeaveSetup, formValue)
      .pipe(map(() => {
        this.modulesSetupForm.removeAllReasons();
        this.modulesSetupForm.initFormAgain.next({});
        this.modulesSetupForm.labelHeaders = [];
        this.modulesSetupForm.loopcriteria(false);
      }));
  }

  createMatColumns(rawHeader: Array<any>): Array<object> {
    let header = [];
    rawHeader.forEach(map => {
      let cleanString = map.replace(/ /g, "_").replace(/-/g, "_").toLowerCase();
      header.push(
        { columnDef: cleanString, header: map, cell: (element: any) => `${element[cleanString]}` }
      );
    });
    return header;
  }

}
