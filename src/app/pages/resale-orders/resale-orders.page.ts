import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { HttpService } from 'src/app/services/http/http.service';

import * as moment from 'moment';

@Component({
  selector: 'app-resale-orders',
  templateUrl: './resale-orders.page.html',
  styleUrls: ['./resale-orders.page.scss'],
})
export class ResaleOrdersPage implements OnInit {

  public resaleOrders = [];
  moment = moment;
  constructor(
    public http: HttpService,
    public storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.get('user').then(user => {
      this.http.call('get', 'api/resale/user/' + user.id).then((data: any) => {
          console.log(data);
          if(data.error == false){
            this.resaleOrders = data.response;
          }
        });
    });
  }
  
  details(resaleId) {
    this.router.navigate(['resale-order-details', resaleId]);
  }

}
