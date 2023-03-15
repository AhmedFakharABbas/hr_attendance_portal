import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employee-popup',
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.css']
})
export class EmployeePopupComponent implements OnInit {
  @Input('fieldName') fieldName:string; 
  @Input ('className') className: string

  constructor() { }

  ngOnInit(): void {
  }
  remove() {
    if (this.fieldName)
    {
      var myobj = document.getElementById(this.fieldName);
      myobj.className = 'clickhmehide'
    }
    else{
      console.log('removebyclass',this.className)
      var obj = document.getElementsByClassName(this.className);
      obj[0].className = "clickhmehide";
    }
  }
}
