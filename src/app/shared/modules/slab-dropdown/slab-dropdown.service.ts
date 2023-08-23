import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SlabService {
    private status = new Subject<any>();
    private deactive = new Subject<any>();

    sendStatus(status,index,field,component) {
        this.status.next({ status: status,index:index,field:field,component:component });
    }
    deactiveSlab(index,field,component,json){
        this.deactive.next({index:index,field:field,component:component,json:json });
    }
  
    getStatus(): Observable<any> {
        return this.status.asObservable();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
    deactiveStatus(): Observable<any> {
        return this.deactive.asObservable();
    }
}