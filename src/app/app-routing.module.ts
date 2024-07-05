import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFountPageComponent } from './pages/not-fount-page/not-fount-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailPageComponent } from './pages/payment-page/simple-product-detail-page/simple-product-detail-page.component';
import { FullProductDetailPageComponent } from './pages/payment-page/full-product-detail-page/full-product-detail-page.component';
import { ProductsResolverService } from './services/products.resolver';

const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Inicio de sesión',
    component: LoginPageComponent,
  },
  {
    path: 'payment/:id',
    component: PaymentPageComponent,
    title: 'payment',
    data: { title: 'Pagos' },
    resolve: { products: ProductsResolverService },
    children: [
      {
        path: 'simple-product-detail',
        title: 'Simple product',
        component: SimpleProductDetailPageComponent,
      },
      {
        path: 'full-product-details',
        component: FullProductDetailPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'simple-product-detail',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'prefix',
  },
  {
    path: '**',
    component: NotFountPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
