import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'onboarding',
  //   pathMatch: 'full'
  // },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./modal/select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./modal/select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./pages/book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-details/:id',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'order-confirmation',
    loadChildren: () => import('./pages/order-confirmation/order-confirmation.module').then( m => m.OrderConfirmationPageModule)
  },
  {
    path: 'resale-orders',
    loadChildren: () => import('./pages/resale-orders/resale-orders.module').then( m => m.ResaleOrdersPageModule)
  },
  {
    path: 'resale-order-details/:id',
    loadChildren: () => import('./pages/resale-order-details/resale-order-details.module').then( m => m.ResaleOrderDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
