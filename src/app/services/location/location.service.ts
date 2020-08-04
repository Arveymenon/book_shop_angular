import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
  ) { }

  getCurrentPostion(){
    return new Promise((resolve,reject)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
        resolve(resp);
      });
    });
  }

  getLocation(){
    console.log('getting location')
    return new Promise((resolve,reject)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('current Position')
        console.log(resp)
        console.log('Co-ordinates Are',resp.coords)
        this.getLocationByCoordinates(resp.coords.latitude,resp.coords.longitude).then((res: any)=>{
          console.log(res);
          resolve(res);
        });
        // resp.coords.latitude
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
          reject(error)
       });
    });
    
  }

  getLocationByCoordinates(lattitude, longitude){
    // console.log(this.new_address.value)
    return new Promise((resolve,reject)=>{
      console.log("getAddressFromCoords "+lattitude+" "+longitude);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      let address = '';
      this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: any) => {
          let responseAddress = [];
          for (let [key, value] of Object.entries(result[0])) {
            if(value['length']>0)
            responseAddress.push(value);
  
          }
          responseAddress.reverse();
          for (let value of responseAddress) {
            address += value+", ";
          }
          resolve(address.slice(0, -2));
        })
        .catch((error: any) =>{ 
          resolve("Address Not Available. Kindly Select Your Address on the map");
        });
        
      })
    }
}
