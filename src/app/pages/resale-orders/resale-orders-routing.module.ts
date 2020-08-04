import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResaleOrdersPage } from './resale-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ResaleOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResaleOrdersPageRoutingModule {}
