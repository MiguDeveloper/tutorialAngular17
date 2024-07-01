import { Component, OnInit, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

import { ProductApiService } from '../../services/product-api.service';
import { IApiResponseProduct } from '../../services/models/product-api.interface';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    ProductComponent,
    AsyncPipe,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private readonly _prodApiService = inject(ProductApiService);
  private readonly _cartService = inject(CartService);

  products: IApiResponseProduct[] = [];
  products$!: Observable<IApiResponseProduct[]>;
  count = 0;

  ngOnInit(): void {
    this.products$ = this._prodApiService.getProducts$();
    this._cartService.cartObservable$.subscribe(
      (respCount) => (this.count = respCount)
    );
  }
}
