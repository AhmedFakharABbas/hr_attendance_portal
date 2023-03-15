import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-portal-hr',
  templateUrl: './portal-hr.component.html',
  styleUrls: ['./portal-hr.component.css']
})
export class PortalHrComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService
  ) { }

  ngOnInit() {
    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }
}
