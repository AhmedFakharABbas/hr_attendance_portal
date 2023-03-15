import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

declare var $: any;
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  userEncName = (typeof localStorage.getItem('u') !== 'undefined' &&
    localStorage.getItem('u') !== null) ? JSON.parse(localStorage.getItem('u')) : '';

  url;
  constructor(
    public headerService: HeaderService,
    public loaderService: LoaderService,
    public router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.url = this.router.url.substr(1);
    // this.headerService.getLandingSubMenusFn(this.url);
    this.headerService.getMenusByPage(this.url);
  }

  setStorage(menu: any) {
    if (menu.component_name) {
      //localStorage.setItem('link', menu.component_name); link is for to store role like hr or hrportal
      this.router.navigate(['/' + menu.component_name]);
    } else if (menu.file_name) {
      const destinationRequest = menu.file_name.split('/').pop();
      const portal = (typeof localStorage.getItem('link') != 'undefined'
        && localStorage.getItem('link') != 'null') ?
        localStorage.getItem('link') : '';
      const employeeId = (typeof localStorage.getItem('e_number') != 'undefined'
        && localStorage.getItem('e_number') != 'null') ? localStorage.getItem('e_number') : '';
      const sourceRequest = this.router.url.split('/').pop();

      // this.loaderService.isLoading.next(true);
        $('.showLoader').show();


      this.authService.switchSeamlessportal(destinationRequest, portal, employeeId, sourceRequest)
      .subscribe(data => {
        if (data.status == '200' && data.loginId != 'false') {
            let routingLink = environment.phpSiteUrl + "?u=" + data.loginId + "&mt=aes";
            window.open(routingLink, '_self');
          }
          else {
            alert('Something went wrong cannot proceed your request');
          }

        });
      // window.open(routingLink, '');
    }

    if (menu.subMenu) {
      if (menu.subMenu.length > 0) {
        this.headerService.pageMenus = menu.subMenu;
      }
    }
  }

}
