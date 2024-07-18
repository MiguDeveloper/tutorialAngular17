import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFountPageComponent } from './pages/not-fount-page/not-fount-page.component';
import { ProductsResolverServiceFn } from './services/products.resolver';
import { authGuardFn } from './guards/auth.guard';
import { exitGuardFn } from './guards/exit.guard';

export const ROUTES_ROOT: Routes = [
  {
    path: 'home',
    title: 'Inicio',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Inicio de sesión',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule,
      ),
  },
  {
    path: 'payment/:id',
    data: { title: 'Pagos' },
    canActivate: [authGuardFn],
    resolve: { products: ProductsResolverServiceFn },
    loadChildren: () => import('./pages/payment-page/payment-page.routes'),
  },
  {
    path: 'register',
    title: 'Registro',
    canDeactivate: [exitGuardFn],
    loadComponent: () =>
      import('./pages/register-page/register-page.component'),
  },
  {
    path: 'user',
    title: 'Usuario',
    loadChildren: () => import('./pages/user/user.routes'),
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
