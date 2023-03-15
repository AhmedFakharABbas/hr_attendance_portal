import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-cr',
  templateUrl: './portal-cr.component.html',
  styleUrls: ['./portal-cr.component.css']
})
export class PortalCrComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService
  ) { }

  ngOnInit() {
    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }

}
