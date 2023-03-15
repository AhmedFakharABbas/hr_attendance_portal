import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class CeoEnquiriesComponent implements OnInit {
  data={
    type :'hrPortalEnquiries',
    ComponenttypeId:2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
