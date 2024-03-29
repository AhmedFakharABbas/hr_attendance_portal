import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/app/shared/http-service/http.service";

@Injectable()
export class GrievanceService {
  constructor(private _httpService: HttpService) {}
  private postRequestSent=new BehaviorSubject<any>('') ;
  PostRequestData=this.postRequestSent.asObservable();
  private clickedRow=new BehaviorSubject<any>('') ;
  clickedRowData=this.clickedRow.asObservable();
  saveData(url, data) {
    return this._httpService.post(url, data);
  }
  getData(url, data?) {
    return this._httpService.get(url, data);
  }
  postFormDataSubmit(url,data){
    return this._httpService.postFormData(url,data)
  }
  deleteEvidence(url,data?){
    return this._httpService.delete(url)
  }
  deleteData(url,data?){
    return this._httpService.delete(url)
  }
  setPostRequestData(url){
    this.postRequestSent.next(url)
  }
  setRowData(clickedRow:any){
    this.clickedRow.next(clickedRow)
  }
}
