import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

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
import { DemoInterceptor } from './interceptors/demo.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([errorApiInterceptor])
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true },
  ],
};
