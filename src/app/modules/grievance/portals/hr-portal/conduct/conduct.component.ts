import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conduct',
  templateUrl: './conduct.component.html',
  styleUrls: ['./conduct.component.css']
})
export class ConductComponent implements OnInit {

  constructor() { }
  data={
    type :'ConductEnquries',

  }
  type ;
   typeA='iOfficer';
   typeB='Head/OD';
   typeC='recomendation'

  ngOnInit(): void {
    this.type=this.typeA;
  }

}
