import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';
import { Storage } from '@ionic/storage';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Location } from '@angular/common';
import { ResaleConfimrationComponent } from 'src/app/modal/resale-confimration/resale-confimration.component';
import { ModalController } from '@ionic/angular';

import * as moment from 'moment';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  books = [];
  math = Math;

  total = 0;
  resaleTotal = 0;
  order : any = {};
  moment = moment;
  
  resaleBooks = [];
  resaleActive = false;

  constructor(
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private http: HttpService,
    private storage: Storage,
    public toast: ToastService,
    public location: Location,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.storage.remove('cart');
    this.route.paramMap.subscribe((params: any) => {
      console.log(params);
      this.http.call('get', 'api/order/details/' + params.params.id)
      .then((res: any) => {
        console.log(res);
        if (res.error == false) {

          this.order = res.response;
          res.response.details.forEach(element => {
            console.log(element);
            this.resaleBooks.push({
              order_details_id: element.id,
              quantity: 0
            });
          });

          if (res.response.status == 2) {

            if (res.response.resale_order.length == 0) {

              this.resaleActive = true;

            } else {

              const lastResaleStatus = res.response.resale_order[res.response.resale_order.length - 1].status;
              if (lastResaleStatus == 2 || lastResaleStatus == 5) {
                this.resaleActive = true;
              }

            }
          }
        }
      });
    });
    this.cartService.getBooks().then((res: any) => {
      this.books = res;
      console.log(this.books);
    });
  }

  async requestResale() {
    
    const modal = await this.modalController.create({
      component: ResaleConfimrationComponent
    });
    
    modal.onDidDismiss().then(res => {
      console.log(res);

      const body = JSON.stringify({
        order_id: this.order.id,
        address_id: res.data,
        details: this.resaleBooks
      });
      console.log(body)
      this.http.call('post', 'api/resale/post', body).then((data: any) => {
        console.log(data);
        if (data.error == false) {
          this.toast.show('Resale Request Sent Successfully');
          this.location.back();
        } else {
          this.toast.show('Some Error Occured');
        }
      });
    });
    return await modal.present();
  }

  details(){
    this.router.navigate(['order_details']);
  }

  addToCart(itt) {
    console.log('add', itt);
    if (this.order.details[itt].quantity > this.resaleBooks[itt].quantity) {
      this.resaleBooks[itt].quantity += 1;
      this.calculate();
    } else {
      this.toast.show('Cannot Add Books More Than You Bought In This Order');
    }
  }
  
  removeFromCart(itt){
    console.log('remove', itt);
    console.log(this.resaleBooks);
    this.resaleBooks[itt].quantity -= 1;
    this.calculate();
  }

  calculate() {
    this.resaleTotal = 0;
    for (const book in this.resaleBooks) {
      if (this.resaleBooks[book].quantity != 0) {
        console.log( parseInt(this.order.details[book].book.mrp_in_rupees) );
        console.log(this.resaleBooks[book].quantity);
  
        const bookPrice = this.order.details[book].refurbished == 0 ? parseInt(this.order.details[book].book.mrp_in_rupees) 
        : (parseInt(this.order.details[book].book.mrp_in_rupees) * 0.8);
  
  
        this.resaleTotal = this.resaleTotal + (((bookPrice * 0.6) * this.resaleBooks[book].quantity));
        console.log(this.resaleTotal);
      }
    }
  }

}
