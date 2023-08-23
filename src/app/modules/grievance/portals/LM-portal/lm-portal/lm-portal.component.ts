import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-portal',
  templateUrl: './lm-portal.component.html',
  styleUrls: ['./lm-portal.component.css']
})
export class LmPortalComponent implements OnInit {
  data={
    type :'lm-portal',
    ComponenttypeId:3
  }
  tableType={
    type : "lmPortalEnquiries",

  }
  secondTableType={
    type : "lmPortalPersonalApplications",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
