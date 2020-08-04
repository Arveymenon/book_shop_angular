import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';
import { AlertController } from '@ionic/angular';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  total = 0;
  mathLib = Math;

  constructor(
    private router: Router,
    public cartService: CartService,
    public http: HttpService,
    public alertController: AlertController,
    private ref: ChangeDetectorRef,
    public payment: PaymentService,
    public storage: Storage,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    
    // console.log(this.cartService.cart);
    this.cartService.getRecommendations();
  }

  details() {
    this.router.navigate(['order_details']);
  }


  // addToCart(itt) {
  //   console.log('add',itt);
  //   this.cartService.addBook(this.books[itt].id).then((res: any) => {
  //     console.log(res);

  //     // For View
  //     this.books[itt].quantity_in_cart = this.books[itt].quantity_in_cart + 1;
  //     console.log(this.books);
  //   });
  // }

  async removeProduct(itt) {
    console.log(itt)
    console.log(this.cartService.cart)
    if ((this.cartService.cart[itt].quantity_in_cart - 1) == 0) {
      console.log('remove', itt);
      const alert = await this.alertController.create({
        header: 'Remove Book',
        cssClass: 'confirm_alert',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
           },
           {
             text: 'Confirm',
             handler: () => {
              this.remove(itt);
             }
           }
        ]
      });
      await alert.present();
    } else {
      this.remove(itt);
    }
  }

  remove(itt){
    this.cartService.removeProduct(this.cartService.cart[itt].book.id, this.cartService.cart[itt].product_type).then((res: any) => {
      console.log(res);
      });
  }

  refurbished_price(itt) {
    this.cartService.refurbishedToggle(this.cartService.cart[itt].id).then((res: any) => {
      console.log(res);
      const viewBookItt = this.cartService.books.findIndex(o=> o.id == this.cartService.cart[itt].id);
      if (viewBookItt > -1) {
        console.log('refurbished_price of-', this.cartService.books[viewBookItt]);
        this.cartService.books[viewBookItt].refurbished = this.cartService.books[viewBookItt].refurbished == true ? false : true;
      }
    });
  }

  orderConfirmation() {
    // this.payment.pay();
    this.router.navigateByUrl('order-confirmation');
  }

}
