import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class LmEnquiriesComponent implements OnInit {
  data={
    type :'lmPortalEnquiries',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
