import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location/location.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { HttpService } from 'src/app/services/http/http.service';
import { SelectLocationPage } from '../../modal/select-location/select-location.page';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  map: any;
  public address:string;
  addresses = [];
  user: any
  dogs: any;
  profile: FormGroup;

  constructor(
    public storage: Storage,
    public router: Router,
    public alertController: AlertController,
    public http: HttpService,
    public formBuilder: FormBuilder,
    public location: LocationService,
    public toastService: ToastService,
    public modalController: ModalController,
    public loadingService: LoadingService
  ) {
    
    // this.storage.set('dogs').then(dogs=>{
    //   console.log(dogs)
    //   this.dogs = dogs;
    // })
   }

  ngOnInit() {
    this.storage.get('user').then(user=>{
      console.log(user);
      this.user = user;
      this.profile = this.formBuilder.group({
        'name': [this.user.name,Validators.compose([Validators.required])],
        'email': [this.user.email,Validators.compose([Validators.required,Validators.email])],
        'mobile': [this.user.mobile ? this.user.mobile : '',
          Validators.compose([Validators.required, Validators.maxLength(13),Validators.minLength(8)])]
      });

      this.storage.get('default_address').then(res => {
          console.log(res);
      });

      this.http.call('get','api/address/' + user.id).then((data: any) => {
        console.log(data);
        if (data.error == false) {
          this.addresses = data.response;
          for (const address of this.addresses) {
            this.location.getLocationByCoordinates(address.lat, address.lng).then(location => {
              console.log(location);
              address.location = location;
              console.log(address.location);
            });
          }
        }
      }, err => {
        console.log(err);
      });
    });
  }

  async addAddress(){
    const modal = await this.modalController.create({
      component: SelectLocationPage,
      });

    modal.onDidDismiss().then(() => {
        this.ngOnInit();
      });

    return await modal.present();
  }

  update() {
    if (this.profile.valid) {
      let body = JSON.stringify({
          user_id: this.user.id,
          name: this.profile.value.name,
          email: this.profile.value.email,
          mobile: this.profile.value.mobile
        });
      console.log(body);
      this.loadingService.create();
      this.http.call('post', 'api/register', body).then((data: any) => {
        console.log(data);
        this.loadingService.dismiss();

        if (data.error == false) {
          this.storage.set('user', data.response);
          this.toastService.show('Profile Updated');
        } else {
          this.toastService.show(data.message);
        }
      }, err => {
        console.log(err);
        this.toastService.show(err);
      });

    } else {

    }
  }
}
