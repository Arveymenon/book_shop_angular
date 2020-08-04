import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Storage } from '@ionic/storage';

declare var RazorpayCheckout: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private cartService: CartService,
    public storage: Storage
  ) { }

  pay(amount: any) {
    return new Promise((res, rej) => {

      this.cartService.calculate().then((total: any) => {
        console.log(total);

        this.storage.get('user').then(user => {
          console.log(user);

          const options = {
            description: 'Credits towards consultation',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR', // your 3 letter currency code
            key: 'rzp_test_NyhHo7W6efA1gl', // your Key Id from Razorpay dashboard
            amount: (amount * 100), // Payment amount in smallest denomiation e.g. cents for USD
            name: user.name,
            prefill: {
              email: user.email,
              contact: user.mobile,
              name: user.name
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss () {
                alert('dismissed');
              }
            }
          };

          const successCallback = (paymentId) => {
            alert('payment_id: ' + paymentId);
            res({
              error: false,
              paymentId
            });
          };
          const cancelCallback = (error) => {
            console.log(error.description + ' (Error ' + error.code + ')');
            res('failure');
          };

          RazorpayCheckout.open(options, successCallback, cancelCallback);

        });
      });
    });
  }
}
