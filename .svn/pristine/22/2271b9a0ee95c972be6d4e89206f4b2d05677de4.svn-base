import { Component, OnInit,Input } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-hr-popup',
  templateUrl: './hr-popup.component.html',
  styleUrls: ['./hr-popup.component.css']
})
export class HRPopupComponent implements OnInit {
  HRPopupForm:FormGroup;
  @Input('fieldName') fieldName:string;
  @Input ('className') className: string
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.HRPopupForm=this.fb.group({
      notMatch:this.fb.control(false),
      incomplete:this.fb.control(false),
      invalid:this.fb.control(false)
    })
  }
  submit()
  {
    console.log(this.HRPopupForm.value)
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
