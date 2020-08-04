import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Storage } from '@ionic/storage';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders = [];

  constructor(
    private router: Router,
    private http: HttpService,
    private storage: Storage,
    private actionSheetCtrl: ActionSheetController
  ) {
  }
  
  ngOnInit() {
    this.storage.get('user').then(user => {
      console.log(user);
  
      this.http.call('get', 'api/order/user/' + user.id).then((res: any) => {
        console.log(res);
  
        if (res.error == false) {
          this.orders = res.response;
        }
  
      });
    });
  }

  details(orderId) {
    console.log(orderId);
    this.router.navigate(['order-details', orderId]);
  }

  async options(orderId, orderStatus) {
    console.log(orderStatus);

    const buttons = [{
      text: 'View Details/ Sell Books',
      icon: 'eye',
      handler: () => {
        console.log('Share clicked');
        this.details(orderId);
        this.actionSheetCtrl.dismiss();
      }
    }];

    if (orderStatus == 0 || orderStatus == 1) {
      buttons.splice(1, 0, {
        text: 'Request Cancellation',
        icon: 'close',
        handler: () => {
          console.log('Favorite clicked');
          this.requestCancellation(orderId);
        }
      });
    }
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons,
    });

    await actionSheet.present();
  }

  requestCancellation(orderId) {
    this.http.call('get','api/order/cancel/request/' + orderId).then(((res: any) => {
      console.log(res);
      if (res.error == false) {
        this.ngOnInit();
      }
    }));
  }

}
