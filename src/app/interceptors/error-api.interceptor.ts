import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const errorApiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('---- Error Api interceptor ----');
  const _snackbar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.Unauthorized) {
        _snackbar.open('No tienes acceso', 'Ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      } else {
        _snackbar.open('Sucedio un error inesperado, intenta mas tarde', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
      return throwError(() => error);
    }),
  );
};
