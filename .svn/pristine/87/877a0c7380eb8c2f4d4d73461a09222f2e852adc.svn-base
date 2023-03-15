import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-portal-ceo',
  templateUrl: './portal-ceo.component.html',
  styleUrls: ['./portal-ceo.component.css']
})
export class PortalCeoComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService
  ) { }

  ngOnInit() {
    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }

}
