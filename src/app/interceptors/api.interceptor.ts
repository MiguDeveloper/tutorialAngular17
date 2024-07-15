// import { HttpInterceptorFn } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('---- Api interceptor ---');
    if (req.url.includes('white_')) {
      const reqClone = req.clone({ url: this.cleanWhiteUrl(req.url) });
      return next.handle(reqClone);
    }

    const headers = req.headers.set(
      'Authorization',
      localStorage.getItem('token') || ''
    );
    const reqClone = req.clone({ headers });
    return next.handle(reqClone);
  }

  private cleanWhiteUrl(url: string): string {
    return url.replace('white_', '');
  }
}

// Enfoque standalone
// export const apiInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
