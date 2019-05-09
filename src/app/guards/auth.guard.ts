import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AFAuth: AngularFireAuth,  private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.AFAuth.authState.pipe(map(value => {
   if (value !== null) {
     console.log('as', value);
     return true;
   } else {
     this.router.navigate(['/login']);
     return false;
   }
    }));
  }
}
