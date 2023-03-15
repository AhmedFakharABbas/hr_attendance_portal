import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { CountryFilter } from '../shared/interfaces/country_filter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class OrgMapService {

  private _url: string = environment.nodeApiUrl;

  constructor(private http: HttpClient) { }

  getMapBranches(filters): Observable<CountryFilter[]> {
    return this.http.get<CountryFilter[]>(this._url + 'orgchart/orgchart_locations?' + filters)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
