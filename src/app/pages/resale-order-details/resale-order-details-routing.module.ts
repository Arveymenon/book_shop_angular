import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResaleOrderDetailsPage } from './resale-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: ResaleOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResaleOrderDetailsPageRoutingModule {}
