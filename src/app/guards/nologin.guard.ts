import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(private AFAuth: AngularFireAuth,  private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean |
      UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AFAuth.authState.pipe(map(value => {
      if (value !== null) {
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
