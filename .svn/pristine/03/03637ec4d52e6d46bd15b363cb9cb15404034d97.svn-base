// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LetterCertificatesDashboardService {

  constructor(
    // private http: HttpClient,
    private commonService: CommonService
  ) { }


  approveAll() {
    let applicationID;
    this.commonService.applicationID.subscribe(id => applicationID = id);
    console.log(applicationID);
  }

}
