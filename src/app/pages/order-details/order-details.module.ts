import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPageRoutingModule } from './order-details-routing.module';

import { OrderDetailsPage } from './order-details.page';
import { ResaleConfimrationComponent } from 'src/app/modal/resale-confimration/resale-confimration.component';
import { SelectLocationPageModule } from 'src/app/modal/select-location/select-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsPageRoutingModule,
    ReactiveFormsModule,
    SelectLocationPageModule
  ],
  declarations: [OrderDetailsPage, ResaleConfimrationComponent],
  entryComponents: [ResaleConfimrationComponent]
})
export class OrderDetailsPageModule {}
