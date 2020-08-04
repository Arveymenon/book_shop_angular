import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
import { Storage } from '@ionic/storage';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Location } from '@angular/common';
import { HttpService } from 'src/app/services/http/http.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

declare var google; 
@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})
export class SelectLocationPage implements OnInit {
  @ViewChild('map',null) mapElement: ElementRef;
  map: any;
  address:string;

  public new_address: FormGroup
  public lat;
  public lng;

  constructor(
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    public storage: Storage,
    public router: Router,
    public location: LocationService,
    public toast: ToastService,
    public _location: Location,
    public http: HttpService,
    public modalCtrl: ModalController,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadMap();
    this.new_address = this.formBuilder.group({
      'house': ['',Validators.required],
      'landmark': ['']
    })
  }


  loadMap() {
    this.location.getCurrentPostion().then((resp: any) => {
    // this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      

      // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        this.location.getLocationByCoordinates(this.map.center.lat(), this.map.center.lng()).then((res: any)=>{
          console.log(res)
          this.address = res
        })
      });
  
      }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  addAddress() {
    console.log(this.new_address.value);
    this.storage.set('default_address', {
      lat: this.lat,
      lng: this.lng
    }).then(address => {
      console.log(address);
      this.storage.get('user').then(user => {
        let body = JSON.stringify({
          latitude: this.lat,
          longitude: this.lng,
          address: this.address,
          flat: this.new_address.value.house,
          landmark: this.new_address.value.landmark,
          customer_id: user.id
        });
        console.log(body);
        this.loadingService.create();
        this.http.call('post', 'api/address/update', body)
        .then((data: any) => {
        this.loadingService.dismiss();
        console.log(data);

        if (data.error == false) {
            // this.router.navigate(['/home'], {replaceUrl: true});
            this.toast.show('Address Succesfully Added');
            this.modalCtrl.dismiss();
          }
        }, err => {
                console.log(err);
            });
          });
    });
  }
}
