import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RosterLoginService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  login(form) {
    return this.http.post(APIs.rosterLogin, form);
  }

  checkLogin() {
    return JSON.parse(this.cookieService.get('tokken')).tokken;
  }

}
