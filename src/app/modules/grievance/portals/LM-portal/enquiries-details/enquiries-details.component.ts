import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-enquiries-details',
  templateUrl: './enquiries-details.component.html',
  styleUrls: ['./enquiries-details.component.css']
})
export class LmEnquiriesDetailsComponent implements OnInit {
  data={
    type :'EnquriesDetail',
    ComponenttypeId:3
  }
  constructor() { }

  ngOnInit(): void {
  }

}
