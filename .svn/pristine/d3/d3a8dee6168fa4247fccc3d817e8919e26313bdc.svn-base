import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  applicationID = new BehaviorSubject([]);

  applicationStatus = [
    { id: 1, status: 'Pending', color: '#FFA922' },
    { id: 2, status: 'Approved', color: '#729B61' },
    { id: 3, status: 'Disapproved', color: '#F35E46' },
    { id: 4, status: 'Resubmit', color: '#469FF2' },
  ]

  modalNames = [
    { id: 1, name: 'approvalDetails' },
  ];

  constructor() { }


  checkApplicationStatus(id): String {
    return this.applicationStatus.filter(map => map.id == id)[0].status;
  }

  checkApplicationStatusColor(id?: number, status?: string): String {
    if (status != 'N/A') {
      const statusLowerCase = status ? status.toLowerCase() : undefined;
      return this.applicationStatus.filter(map => map.id == id || map.status.toLowerCase() == statusLowerCase)[0].color;
    } else {
      return '#333333';
    }
  }
}
