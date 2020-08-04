import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResaleOrdersPageRoutingModule } from './resale-orders-routing.module';

import { ResaleOrdersPage } from './resale-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResaleOrdersPageRoutingModule
  ],
  declarations: [ResaleOrdersPage]
})
export class ResaleOrdersPageModule {}
