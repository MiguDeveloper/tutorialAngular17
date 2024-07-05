// import { ResolveFn } from '@angular/router';

// export const productsResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };

import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { IApiResponseProduct } from './models/product-api.interface';
import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverService implements Resolve<IApiResponseProduct[]> {
  private readonly _productsApiService = inject(ProductApiService);

  resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
    console.log('Productos desde el resolver...', route);
    return this._productsApiService.getProducts$();
  }
}
