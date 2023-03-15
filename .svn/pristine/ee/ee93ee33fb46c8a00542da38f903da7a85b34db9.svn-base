import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RosterLoginService } from '../../services/roster-login.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { HttpLoaderModule } from '../../shared/components/http-loader/http-loader.module';
import { forkJoin, Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username: string;
  key: string;
  type: string;
  hostUrl: string;
  encMethod: string;
  loginForm: FormGroup;
  des: string;
  r: string;
  u_s_user: string;
  isLoginTemplate: boolean;
  app_token: string = 'pak';
  os_type : string = 'android';
  app_version : string = '1.0'


  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private rosterLoginService: RosterLoginService,
    private cookieService: CookieService,
    private httpLoader: HttpLoaderModule,
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('u');
    this.u_s_user = this.route.snapshot.queryParamMap.get('u_s_id');

    if (this.username == null) {

      this.isLoginTemplate = true;

      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

    } else {

      this.isLoginTemplate = false;

      this.type = "0";

      this.auth.getSeamlessUserDetails(this.username, this.type).subscribe(data => {
        if (data.success) {

          let userId = (this.u_s_user != null && typeof this.u_s_user != 'undefined') ? window.atob(this.u_s_user)
            : data.result.e_number;

          var portal = "";

          switch (data.result.portal) {

            case "em":
              portal = "employee";
              break;

            case "bl":
              portal = "business-leader";
              break;

            default:
              portal = data.result.portal;
              break;

          }

          this.auth.encode(data.result.e_number)
            .subscribe((resp: any) => {
              localStorage.setItem('e_user_id', JSON.stringify(resp.result));
            });

          localStorage.setItem('s_u_number', userId);
          localStorage.setItem('token_nda', JSON.stringify(data.token));
          localStorage.setItem('e_number', JSON.stringify(data.result.e_number));
          localStorage.setItem('e_code', JSON.stringify(data.result.e_code));
          localStorage.setItem('emp_name', JSON.stringify(data.result.emp_name));
          localStorage.setItem('link', portal);
          this.router.navigate([data.result.destination]);
          this.auth.setLoggedIn(true);
        } else {
          console.log(data.message);
          localStorage.removeItem('token_nda');
          this.redirectBack();
        }
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.username = this.loginForm.get('email').value;
    this.key = this.loginForm.get('password').value;
    this.type = "1";

    let nodeAuth = this.auth.getUserDetails(this.username, this.key, this.type, '', '', '',
      environment.nodeApiUrl +'Auth/login');

    /*let laravelAuth = this.auth.getUserDetails(this.username, this.key, this.type, this.app_token, this.os_type, this.app_version,
      environment.laravelApiUrl +'login');*/


        forkJoin([ nodeAuth ]).subscribe((result) => {

          let nodeObj  = result[0];
          delete result[0];

          if(nodeObj.success == true) {

            localStorage.setItem('s_u_number', nodeObj.result.e_number);
            localStorage.setItem('token_nda', JSON.stringify(nodeObj.token));
            localStorage.setItem('e_number', JSON.stringify(nodeObj.result.e_number));
            localStorage.setItem('e_code', JSON.stringify(nodeObj.result.e_code));
            localStorage.setItem('emp_name', JSON.stringify(nodeObj.result.emp_name));
            localStorage.setItem('link', nodeObj.result.portal);
            localStorage.setItem('client_id', nodeObj.result.client_id);

            this.router.navigate([nodeObj.result.destination]);
            this.auth.setLoggedIn(true);

            let objectOne  = result.pop();

            if (typeof objectOne != 'undefined' && objectOne.status == 'true') {

              localStorage.setItem('token', JSON.stringify(objectOne.token));


            }
            else {

              console.log("laravel login not working");

            }

          }
          else {

            console.log("node login not working")

          }

        });
  }

  redirectBack() {
    let hostUrl = environment.phpSiteUrl;
    window.location.href = hostUrl;
  }

}
