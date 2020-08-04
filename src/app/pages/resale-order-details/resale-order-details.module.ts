import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResaleOrderDetailsPageRoutingModule } from './resale-order-details-routing.module';

import { ResaleOrderDetailsPage } from './resale-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResaleOrderDetailsPageRoutingModule
  ],
  declarations: [ResaleOrderDetailsPage]
})
export class ResaleOrderDetailsPageModule {}
