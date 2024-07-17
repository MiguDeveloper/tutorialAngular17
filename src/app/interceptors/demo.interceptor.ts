import { HttpInterceptorFn } from '@angular/common/http';

// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpEvent,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class DemoInterceptor implements HttpInterceptor {
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('---- Demo interceptor ---');

//     return next.handle(req);
//   }
// }

//Enfoque standalone
export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('---- Demo interceptor standalone ---');
  return next(req);
};
