import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit {
  @Input('modalSize') modalSize: string;
  @Input('modalName') modalName: string;
  @Output('closeEvent') closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeEvent.emit(null);
  }

}
