import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { CountryFilter } from '../shared/interfaces/country_filter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()

export class OrgFiltersService {

  private _url = environment.nodeApiUrl;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/countries_filter')
      .catch(this.errorHandler);
  }

  getCities(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/cities_filter')
      .catch(this.errorHandler);
  }

  getBranches(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/branches_filter')
      .catch(this.errorHandler);
  }

  getJobGroup(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/group_two_filter')
      .catch(this.errorHandler);
  }

  getJobFamily(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/group_three_filter')
      .catch(this.errorHandler);
  }

  getDepartment(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/department_filter')
      .catch(this.errorHandler);
  }

  getDesignation(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/designation_filter')
      .catch(this.errorHandler);
  }

  getBand(): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/bands_filter')
      .catch(this.errorHandler);
  }

  // post filters to manipulate it dynamically
  sendCountryData(countryId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('countryId', countryId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/cities_filter', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  sendCityData(cityId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('cityId', cityId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/cities_branches', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  sendBranchData(branchId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('branchId', branchId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/branch_country', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  sendJobGroupData(groupId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('groupId', groupId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/get_group_three', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  sendJobFamilyData(familyId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('familyId', familyId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/get_family_group_depart', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  sendDepartmentData(departmentId): Observable<CountryFilter[]> {

    const body = new HttpParams().set('departmentId', departmentId.toString());

    return this.http.post<CountryFilter[]>(this._url + 'orgchart/get_depart_groups', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .catch(this.errorHandler);

  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
