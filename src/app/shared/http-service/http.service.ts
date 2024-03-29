import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import{environment}from '../../../environments/environment';
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public pendingRequests: number = 0;
  //public baseUrl = environment.laravelApiUrl;

  // public baseUrl="http://172.16.253.40/dev-people-i/api"
  public httpOptions: any;
  constructor(private http: HttpClient  ,private _http: HttpClient,) {
  }

  get(url: string, data?: any): Observable<any[]> {

    this.pendingRequests++;
    //this._sharedService.loading = true;
    // this.store.select(fromAuth.getLoggedInUser).subscribe((user:User)=>{
    //    this.user = user;
    // } , (error)=>{})
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token_nda")),
      }),
      params: data,
    };

    // this.store.dispatch(new UI.StartLoading());
    return this._http.get( url, this.httpOptions).pipe(
      map((response: any) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
          //this._sharedService.loading = false;
        }
        // this._sharedService.loading = false;
        return response;
      }),
      catchError((e) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
          //this._sharedService.loading = false;
        }
        if (e.status === 401) {
          this.pendingRequests = 0;
          // this._sharedService.loading = false;
           this.signout();
        }
        return throwError(e.error);
       // this._sharedService.loading = false;
      })
    );
  }
  postWithoutHeader(url: string, data: any): Observable<any[]> {
    this.pendingRequests++;
   // this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    //this.store.dispatch(new UI.StartLoading());
    return this._http.post( url, data, this.httpOptions).pipe(
      map((response: any) => {
        //this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
         // this._sharedService.loading = false;
        }
        //this._sharedService.loading = false;
        return response;
      }),
      catchError((errormessage) => {
       // this.store.dispatch(new UI.StopLoading());
        if (errormessage.error.error == undefined) {
          if (errormessage.error != undefined) {
            throw errormessage.error.message;
           // this._sharedService.loading = false;
          } else {
            throw errormessage;
           // this._sharedService.loading = false;
          }
        } else {
          throw errormessage.error.error;
         // this._sharedService.loading = false;
        }
        //
        // throw errormessage.error.error;
      })
    );
  }

  post(url: string, data: any): Observable<any> {
    this.pendingRequests++;
    //this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token_nda")),
      }),
    };

    // this.store.dispatch(new UI.StartLoading());

    return this._http.post( url, data, this.httpOptions).pipe(
      map((response: any) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
          //this._sharedService.loading = false;
        }
        //this._sharedService.loading = false;

        return response;
      }),

      // catchError(e => {
      //   this.pendingRequests--;
      //   if (this.pendingRequests <= 0) {
      //
      //     this.pendingRequests = 0;
      //   }
      //   if (e.status === 401) {
      //
      //     this.pendingRequests = 0;
      //     this.signout();
      //   }
      //   if (e.error.message != undefined) {
      //     return throwError(e.error.message);
      //   } else {
      //     return throwError(e.error);
      //   }
      // })

      catchError((errormessage) => {
        // this.store.dispatch(new UI.StopLoading());
       // this._sharedService.loading = false;
        throw errormessage.error;

        // if (errormessage.error.error == undefined) {
        //   if (errormessage.error != undefined) {
        //     throw errormessage.error.message;
        //     this._sharedService.loading = false;
        //   } else {

        //     throw errormessage;
        //   }
        // } else {
        //   this._sharedService.loading = false;
        //   throw errormessage.error.error;
        // }
        //
        // throw errormessage.error.error;
      })
    );
  }

  postFormData(url: string, data: any): Observable<any> {
    this.pendingRequests++;
    //this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token_nda")),
      }),
    };

    // this.store.dispatch(new UI.StartLoading());

    return this._http.post( url, data, this.httpOptions).pipe(
      map((response: any) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
          //this._sharedService.loading = false;
        }
        //this._sharedService.loading = false;

        return response;
      }),

      // catchError(e => {
      //   this.pendingRequests--;
      //   if (this.pendingRequests <= 0) {
      //
      //     this.pendingRequests = 0;
      //   }
      //   if (e.status === 401) {
      //
      //     this.pendingRequests = 0;
      //     this.signout();
      //   }
      //   if (e.error.message != undefined) {
      //     return throwError(e.error.message);
      //   } else {
      //     return throwError(e.error);
      //   }
      // })

      catchError((errormessage) => {
        // this.store.dispatch(new UI.StopLoading());
       // this._sharedService.loading = false;
        throw errormessage.error;

        // if (errormessage.error.error == undefined) {
        //   if (errormessage.error != undefined) {
        //     throw errormessage.error.message;
        //     this._sharedService.loading = false;
        //   } else {

        //     throw errormessage;
        //   }
        // } else {
        //   this._sharedService.loading = false;
        //   throw errormessage.error.error;
        // }
        //
        // throw errormessage.error.error;
      })
    );
  }

  delete(url: string, data?: any): Observable<any[]> {
    this.pendingRequests++;
    //this._sharedService.loading = true;

    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token_nda")),
      }),
      params: data,
    };

    // this.store.dispatch(new UI.StartLoading());
    return this._http.delete( url, this.httpOptions).pipe(
      map((response: any) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
          //this._sharedService.loading = false;
        }
       // this._sharedService.loading = false;
        return response;
      }),
      catchError((e) => {
        // this.store.dispatch(new UI.StopLoading());
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
          this.pendingRequests = 0;
         // this._sharedService.loading = false;
        }
        if (e.status === 401) {
         // this._sharedService.loading = false;
          this.pendingRequests = 0;
          this.signout();
        }
        if (e.error.message != undefined) {
          return throwError(e.error.message);
          //this._sharedService.loading = false;
        } else {
          return throwError(e.error);
          //this._sharedService.loading = false;
        }
      })
    );
  }
  postWithoutLoader(url: string, data: any): Observable<any[]> {
    // this.pendingRequests++;

    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };


    return this._http.post( url, data, this.httpOptions).pipe(
      map((response: any) => {

        // this.pendingRequests--;
        // if (this.pendingRequests <= 0) {
        //
        //   this.pendingRequests = 0;
        // }
       // this._sharedService.loading = false;
        return response;
      }),
      catchError((e) => {

        // this.pendingRequests--;

        // if (this.pendingRequests <= 0) {
        //
        //   this.pendingRequests = 0;
        // }
        if (e.status === 401) {
          //
          // this.pendingRequests = 0;
          this.signout();
        }
        return throwError(e.error);
      })
    );
  }
  signout() {
    // localStorage.clear();
    //this._router.navigate(["/auth/sign"]);
  }
}
