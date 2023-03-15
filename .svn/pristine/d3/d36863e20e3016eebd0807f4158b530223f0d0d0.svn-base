import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-portal-finance',
  templateUrl: './portal-finance.component.html',
  styleUrls: ['./portal-finance.component.css']
})
export class PortalFinanceComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService
  ) { }

  ngOnInit() {
    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }
}
