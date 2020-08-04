import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { HttpService } from 'src/app/services/http/http.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SelectLocationPage } from '../../modal/select-location/select-location.page';
import { ModalController, NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {
  total = 0;
  old_total = 0;
  addresses = [];
  user: any;
  selectedAddress = new FormControl();

  couponCode = new FormControl();

  coupon: any;

  res_check: any;
  constructor(
    public cartService: CartService,
    public payment: PaymentService,
    public http: HttpService,
    public storage: Storage,
    public router: Router,
    public modalController: ModalController,
    private toast: ToastService,
    private loadingService: LoadingService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.storage.get('user').then(user => {
      console.log(user);
      this.user = user;
      this.http.call('get', 'api/address/' + user.id)
        .then((res: any) => {
          console.log(res);
          if (res.error == false) {
            this.addresses = res.response;
          }
        });
      this.cartService.calculate().then((res: any) => {
        this.total = res;
      });
    });
  }

  validateCoupon(){
    this.cartService.calculate().then(total => {
      console.log(total);

      this.storage.get('cart').then(cart => {
        console.log(cart);

        const body = JSON.stringify({
          code: this.couponCode.value,
          customerId: 1,
          cartTotal: total,
          cart: cart
        });

        console.log(body);
        this.loadingService.create();
        this.http.call('post', 'api/coupon/check', body)
        .then((res: any) => {
          console.log(res);
          this.loadingService.create();

          if (res.validated == false) {
            this.toast.show(res.message);
          } else {
            this.old_total = this.total;
            this.total = res.discounted_total;
            this.toast.show('Coupon Added Sucessfully');
          }
        });
      });
    });
  }

  async addAddress() {
    const modal = await this.modalController.create({
      component: SelectLocationPage,
      });

    modal.onDidDismiss().then(() => {
        this.ngOnInit();
      });

    return await modal.present();

  }

  makePayment() {
    console.log(this.selectedAddress.value);
    if (this.selectedAddress.value){

      this.storage.get('cart').then((cart: any) => {
        console.log(cart);

        this.payment.pay(this.total).then((res: any) => {
          console.log(res);
          this.res_check = res.paymentId;
          if (res.error == false) {
  
            const body = {
                customer_id: this.user.id,
                address_id: this.selectedAddress.value,
                // transaction_id: res.paymentId,
                transaction_id: '1234353',
                status: 0,
                details: cart,
                coupon: {
                  code: this.couponCode.value
                },
                total: this.total,
                sub_total: this.old_total > 0 ? this.old_total : this.total
              };
            console.log(body);
            this.loadingService.create();
            this.http.call('post', 'api/order/post', JSON.stringify(body))
            .then((res2: any) => {
              console.log(res2);
              this.loadingService.dismiss();

              if (res2.error == false) {

                  this.storage.remove('cart');
                  this.navCtrl.navigateRoot('/home');
                  // this.router.navigateRoot(['/home']);

                }else{
                  alert('Some Error Occured');
                }
          });

          }
        });
      });
    } else {
      this.toast.show('Kindly Select An Address');
    }
  }

}
