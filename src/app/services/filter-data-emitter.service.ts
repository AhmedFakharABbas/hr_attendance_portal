import { Injectable } from '@angular/core';    
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class FilterDataEmitterService {

  public messageSource = new BehaviorSubject<string>("false");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {

    this.messageSource.next(message);

  }


}
