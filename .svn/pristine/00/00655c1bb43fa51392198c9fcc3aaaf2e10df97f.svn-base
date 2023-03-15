import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggedIn) {
      return true;
    }
    else {
      if(localStorage.getItem( 'token' ) == 'undefined') {
        this.router.navigate(['login'])
      }
      else {
        return this.auth.verifyUserDetails( JSON.parse( localStorage.getItem( 'token')  ) )
                  .pipe(map(res => {
                    if(res.success) {
                      localStorage.setItem('token', JSON.stringify(res.token) );
                      return res.success;
                    }
                    else {
                      localStorage.removeItem('token');
                      return res.success;
                    }
                }))
      }
    }
    
  }
  
}
