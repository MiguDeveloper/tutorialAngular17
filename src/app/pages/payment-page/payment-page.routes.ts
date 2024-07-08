import { Routes } from '@angular/router';
import { PaymentPageComponent } from './payment-page.component';
import { SimpleProductDetailPageComponent } from './simple-product-detail-page/simple-product-detail-page.component';

export default [
  {
    path: '',
    component: PaymentPageComponent,
    title: 'payment',
    children: [
      {
        path: 'simple-product-detail',
        title: 'Simple product',
        component: SimpleProductDetailPageComponent,
      },
      {
        path: 'full-product-details',
        loadComponent: () =>
          import(
            './full-product-detail-page/full-product-detail-page.component'
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'simple-product-detail',
      },
    ],
  },
] as Routes;
