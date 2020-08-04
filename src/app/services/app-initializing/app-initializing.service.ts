import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocationService } from '../location/location.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppInitializingService {

  public navBarLocation: any;

  constructor(
    private storage: Storage,
    private locationService: LocationService,
    private router: Router
  ) { }

  checkUser() {
    return new Promise((resolve, reject) => {
      this.storage.get('user').then((user: {}) => {
        console.log(user);
        if (user) {
          this.router.navigate(['/home']);
          resolve(user);
        } else {
          console.log('no user');
          this.router.navigate(['/onboarding']);
          resolve(false);
        }
      });
    });
  }

  setNavbarLocation() {
    return new Promise((resolve, reject) => {
    this.locationService.getLocation().then((res: any) => {
      console.log(res);
      this.storage.set('location', res);
      resolve(res);
      });
    });
  }
}
