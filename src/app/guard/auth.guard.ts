import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private myRoute: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('data') != null) {
      this.myRoute.navigate(['private/private/profile']);
      return false;
    } else {
      return true;
    }
  }
}
