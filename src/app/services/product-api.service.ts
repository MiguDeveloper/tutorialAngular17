import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseProduct } from './models/product-api.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';
  httpCliente = inject(HttpClient);
  constructor() {
    console.log('Product service ready');
  }

  getProducts$(): Observable<IApiResponseProduct[]> {
    return this.httpCliente.get<IApiResponseProduct[]>(this.URL_PRODUCTS);
  }
}
