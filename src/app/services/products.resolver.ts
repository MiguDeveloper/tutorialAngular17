import { ProductApiService } from './product-api.service';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { IApiResponseProduct } from './models/product-api.interface';

export const ProductsResolverServiceFn: ResolveFn<IApiResponseProduct[]> = (
  route,
  state
) => {
  const _productsApiService = inject(ProductApiService);
  console.log('Productos desde el resolver...', route);
  return _productsApiService.getProducts$();
};

// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { Observable, delay } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductsResolverServiceFn implements Resolve<IApiResponseProduct[]> {
//   private readonly _productsApiService = inject(ProductApiService);

//   resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
//     console.log('Productos desde el resolver...', route);
//     return this._productsApiService.getProducts$();
//   }
// }
