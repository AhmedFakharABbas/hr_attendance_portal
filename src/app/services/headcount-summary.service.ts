import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { HeadcountSummary } from '../shared/interfaces/headcount-summary';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()

export class HeadcountSummaryService {

  private _url: string = environment.nodeApiUrl+"orgchart/total_employee_by_designation";

  constructor( private http:HttpClient ) { }

  getHeadcountSummaryData( filterData ): Observable<HeadcountSummary[]> {

    var filterDetails = "?action=1&filter=1"+filterData;

    var current_target_url = this._url+filterDetails;

    return this.http.get<HeadcountSummary[]>( current_target_url )
                    .catch(this.errorHandler);

  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
