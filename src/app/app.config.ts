import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ROUTES_ROOT } from './app.routes';
import { errorApiInterceptor } from './interceptors/error-api.interceptor';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { demoInterceptor } from './interceptors/demo.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT, withComponentInputBinding(), withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([errorApiInterceptor, demoInterceptor]),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
};
