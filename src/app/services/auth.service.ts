import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { APIs, environment } from '../../environments/environment'

interface myData {
  destination: any;
  status: string;
  result: any;
  success: boolean,
  message: string,
  token: string,
  user_id: string,
}

interface loggedInUser {
  res: any,
  success: boolean,
  message: string,
  token: string,
}

interface seamlessData {
  status: string,
  loginId: any,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: boolean = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getSeamlessUserDetails(username: string, type: string): Observable<myData> {
    // post details to HTTP server and return if user is exist

    return this.http.post<myData>(environment.nodeApiUrl + 'Auth/login', {
      username,
      type
    })
  }

  getUserDetails(
    email:string,
    password:string,
    type:string,
    app_token: string = '',
    os_type : string = '',
    app_version: string = '',
    url : string,
     mac_address?:number,
     model?: string,


    ): Observable<myData> {
    // post details to HTTP server and return if user is exist

      if(app_token != '' && os_type != '' && app_version != '') {

          return this.http.post<myData>(url, {
            email,
            password,
            app_token,
            os_type,
            app_version,
            type,
            mac_address:555,
            model: 'sdfsdf'
          })

      }
      else {

        return this.http.post<myData>(url, {
          email,
          password,
          type,
        })

      }


  }

  switchSeamlessportal(destinationRequest: string, portal: string,
    employeeId: string, sourceRequest: string, extraParams?: string): Observable<seamlessData> {

    return this.http.post<seamlessData>(environment.nodeApiUrl + 'Auth/seamless_login', {
      destinationRequest,
      portal,
      employeeId,
      sourceRequest,
      extraParams,
    })
  }

  verifyUserDetails(token: string) {

    return this.http.post<loggedInUser>(environment.nodeApiUrl + 'Auth/verifyLogin', { token });

  }


  // Encript/Decript
  encode(id) {
    const params = new HttpParams().set('code', id);
    return this.http.get(APIs.encryptAesCode, { params: params });
  }

  decode(encoded) {
    const params = new HttpParams().set('code', encoded);
    return this.http.get(APIs.decryptAesCode, { params: params });
  }
}
