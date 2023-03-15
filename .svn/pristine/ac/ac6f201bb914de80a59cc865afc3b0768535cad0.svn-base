import { Component, Input, OnInit } from '@angular/core';
import { UserIntimationBoxService } from './user-intimation-box.service';

@Component({
  selector: 'app-user-intimation-box',
  templateUrl: './user-intimation-box.component.html',
  styleUrls: ['./user-intimation-box.component.css']
})
export class UserIntimationBoxComponent implements OnInit {

  constructor(
    public userIntimationBoxService: UserIntimationBoxService
  ) { }

  ngOnInit(): void {
  }

  reset() {
    this.userIntimationBoxService.showNotification('', '');
  }


}
