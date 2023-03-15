import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-generic-dashboard-small-legend',
  templateUrl: './generic-dashboard-small-legend.component.html',
  styleUrls: ['./generic-dashboard-small-legend.component.css']
})
export class GenericDashboardSmallLegendComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService) {}

  ngOnInit() {
    const that = this;
    let url = this.router.url.substr(1);
    that.headerService.getMenusByPage(url);
  }
  onLast3Months(){
    let that = this;
    //
  }
  onLast6Months(){
    let that = this;
    //
  }

  onLast12Months(){
    let that = this;
    //
  }

  onLast3Years(){
    let that = this;
    //
  }

}
