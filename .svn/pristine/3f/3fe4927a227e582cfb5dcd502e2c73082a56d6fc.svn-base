import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-lm',
  templateUrl: './portal-lm.component.html',
  styleUrls: ['./portal-lm.component.css']
})
export class PortalLMComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService
  ) { }

  ngOnInit() {
    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }

}
