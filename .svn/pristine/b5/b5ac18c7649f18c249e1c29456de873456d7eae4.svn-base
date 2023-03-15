import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {
  @Input('control') public control: FormControl;
  @Input('requiredMsg') public requiredMsg: string;
  @Input('patternMsg') public patternMsg: string;

  constructor() { }

  ngOnInit() {
  }

}
