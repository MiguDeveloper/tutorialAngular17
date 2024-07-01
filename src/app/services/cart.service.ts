import { Injectable } from '@angular/core';
import { IDetailProduct, IProduct } from './models/cart.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _productDetail: IDetailProduct[] = [];
  private _count = 0;
  cartObservable$ = new Subject<number>();
  listProducts$ = new Subject<IDetailProduct[]>();

  constructor() {}

  addToCart(product: IProduct) {
    const idProduct = product.id;
    const index = this._productDetail.findIndex(
      ({ product }) => product.id === idProduct
    );

    if (index === -1) {
      this._productDetail.push({ product, count: 1, total: product.price });
      this._updateCount();
    } else {
      this._updateProduct(index);
    }
  }

  private _updateProduct(idx: number) {
    const detailProduct = this._productDetail[idx];
    // fixed count
    detailProduct.count = ++detailProduct.count;
    detailProduct.total = detailProduct.count * detailProduct.product.price;
    this._updateCount();
  }

  private _updateCount() {
    this._count = this._count + 1;
    this.cartObservable$.next(this._count);
    this.listProducts$.next(this._productDetail);
  }
}
