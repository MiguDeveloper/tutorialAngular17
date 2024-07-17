// import { inject, Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';

// @Injectable({ providedIn: 'root' })
// export class Authguard implements CanActivate {
//   private _router = inject(Router);

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     console.log('---- Auth Guard ----');
//     console.log(route);
//     const token = localStorage.getItem('token');
//     if (!token) {
//       this._router.navigateByUrl('/');
//       return false;
//     }
//     return true;
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardFn: CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log('---- Auth Guard Function ----');
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
