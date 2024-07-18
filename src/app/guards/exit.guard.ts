import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | boolean;
// }

// @Injectable({ providedIn: 'root' })
// export class Exitguard implements CanDeactivate<CanComponentDeactivate> {
//   private readonly _dialog = inject(MatDialog);
//   canDeactivate(
//     component: CanComponentDeactivate,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState: RouterStateSnapshot
//   ): Observable<boolean> | boolean {
//     console.log('---- Exit Guard ----');
//     const formValido = component.canDeactivate();
//     if (formValido) {
//       const reference = this._dialog.open(ConfirmDialogComponent);
//       return reference.afterClosed();
//     }
//     return true;
//   }
// }

import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}

export const exitGuardFn: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
) => {
  const dialog = inject(MatDialog);
  const formValid = component.canDeactivate();
  if (formValid) {
    const dialogRef = dialog.open(ConfirmDialogComponent);
    return dialogRef.afterClosed();
  }
  return true;
};
