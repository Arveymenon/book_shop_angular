import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpService } from 'src/app/services/http/http.service';
import { ModalController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';


import * as moment from 'moment';
import { SelectLocationPage } from '../select-location/select-location.page';
// const moment = require('moment');

@Component({
  selector: 'app-resale-confimration',
  templateUrl: './resale-confimration.component.html',
  styleUrls: ['./resale-confimration.component.scss'],
})
export class ResaleConfimrationComponent implements OnInit {

  addresses = [];
  today = new Date();
  selectedAddress = new FormControl('',Validators.required);
  moment = moment;
  constructor(
    private storage: Storage,
    public http: HttpService,
    public modalctrl: ModalController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(moment(this.today).add(1, 'd').format('L'));
    this.storage.get('user').then(user => {
      console.log(user);
      this.http.call('get', 'api/address/' + user.id)
        .then((res: any) => {
          console.log(res);
          if (res.error == false) {
            this.addresses = res.response;
          }
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

  confirm() {
    if (this.selectedAddress.valid) {
      this.modalctrl.dismiss(this.selectedAddress.value);
    }
  }

}
