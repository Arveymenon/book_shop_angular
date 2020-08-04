import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async show(message: any, header?: any, position?: any) {
    return new Promise( async (resolve, reject) => {
      const toast = await this.toastCtrl.create({
        header: header ? header : null,
        message: message,
        position: position ? position : 'bottom',
        duration: 2000,
      });
      toast.present();
    });
  }
}
