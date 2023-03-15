import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIntimationBoxService {

  // Message Type Classess
  // 1) .warning
  // 2) .success

  formErrorMessage = new BehaviorSubject({ type: "", msg: "" });
  constructor() { }

  // Display error
  showNotification(msg: string, type: string) {
    this.formErrorMessage.next({ msg: msg, type: type });
    if (msg && type) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        this.formErrorMessage.next({ msg: '', type: '' });
      }, 3000);
    }
  }
}
