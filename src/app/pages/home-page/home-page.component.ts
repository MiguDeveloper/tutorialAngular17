import { Component, Input, OnInit, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable, map } from 'rxjs';

import { ProductApiService } from '../../services/product-api.service';
import { IApiResponseProduct } from '../../services/models/product-api.interface';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { IDetailProduct } from '../../services/models/cart.interface';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { DemoService } from '../../services/demo.service';

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
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  @Input() user?: string;

  private readonly _prodApiService = inject(ProductApiService);
  private readonly _cartService = inject(CartService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _demoService = inject(DemoService);

  listProducts: IDetailProduct[] = [];
  products$!: Observable<IApiResponseProduct[]>;
  count = 0;

  constructor() {
    console.log(
      'Valores obtenidos por el state => ',
      this._router.getCurrentNavigation()?.extras.state
    );
  }

  ngOnInit(): void {
    this._cartService.listProducts$.subscribe((prods) => {
      this.listProducts = prods;
    });
    this._getApis();
    this._getValuesRoute();
  }

  private _getApis() {
    this.products$ = this._prodApiService.getProducts$();
    this._cartService.cartObservable$.subscribe(
      (respCount) => (this.count = respCount)
    );
  }

  private _getValuesRoute() {
    console.log(this._activatedRoute.snapshot.queryParams);
    console.log(
      'QueryParamMap Get Edad',
      this._activatedRoute.snapshot.queryParamMap.get('edad')
    );
    console.log('@Input() user valor por ruta => ', this.user);

    this._activatedRoute.queryParamMap
      .pipe(map((params: ParamMap) => params.get('user')))
      .subscribe((val) => console.log(val));
  }
}
