import { Injectable } from '@angular/core';    
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MapThemeEmitterService {

  public messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: number) {

    this.messageSource.next(message);

  }

}
