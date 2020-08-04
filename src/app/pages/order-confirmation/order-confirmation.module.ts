import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderConfirmationPageRoutingModule } from './order-confirmation-routing.module';

import { SelectLocationPage } from './../../modal/select-location/select-location.page';
import { OrderConfirmationPage } from './order-confirmation.page';
import { SelectLocationPageModule } from 'src/app/modal/select-location/select-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OrderConfirmationPageRoutingModule,
    SelectLocationPageModule
  ],
  declarations: [OrderConfirmationPage]
})
export class OrderConfirmationPageModule {}
