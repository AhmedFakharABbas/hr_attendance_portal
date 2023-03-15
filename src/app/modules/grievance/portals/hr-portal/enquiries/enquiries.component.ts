import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  data={
    type :'hrPortalEnquiries',
    ComponenttypeId:2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
