import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { HttpService } from "src/app/shared/http-service/http.service";
import{environment}from '../../../../environments/environment';
@Injectable()
export class AttendanceService {
  constructor(private _httpService: HttpService) {}
  private baseUrl =environment.isGrievanceMoudle?environment.GrievanceApiURL:environment.laravelApiUrl;
  private clickedRow = new BehaviorSubject<any>("");
  clickedRowData = this.clickedRow.asObservable();

  private searchTerm = new BehaviorSubject<any>("");
  searchTermData = this.searchTerm.asObservable();

  private postRequestSent = new BehaviorSubject<any>("");
  PostRequestData = this.postRequestSent.asObservable();
  setRowData(clickedRow: any) {
    this.clickedRow.next(clickedRow);
  }
  setSearchTerm(searchTerm) {
    this.searchTerm.next(searchTerm);
  }
  setPostRequestData(url) {
    this.postRequestSent.next(url);
  }
  postSubmit(url, data) {
    return this._httpService.post(url, data);
  }
  postFormDataSubmit(url, data) {
    return this._httpService.postFormData(url, data);
  }
  getAttendMetaData(url, data?) {
    return this._httpService.get(url, data);
  }
  getLRMetaData(url, data?) {
    return this._httpService.get(url, data);
  }
  getShiftMData(url, data?) {
    return this._httpService.get(url, data);
  }

}
