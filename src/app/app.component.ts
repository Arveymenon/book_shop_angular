import { Component } from '@angular/core';

import { Platform, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppInitializingService } from './services/app-initializing/app-initializing.service';
import { OnboardingPage } from './pages/onboarding/onboarding.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  user: any;
  public appPages = [
    {
      title: 'Profile',
      url: '/user-profile',
      icon: 'person'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: 'archive'
    },
    {
      title: 'Resale',
      url: '/resale-orders',
      icon: 'archive'
    },
    {
      title: 'Logout',
      url: '/onboarding',
      icon: 'exit'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    public appInitializationService: AppInitializingService,
    public onesignal: OneSignal,
    public alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appInitializationService.checkUser().then((res: any) => {
        this.user = res;
        console.log(res);
        if (!res) {
          this.menuCtrl.enable(false);
        }
      });
      if (this.platform.is('cordova')) {
        this.setupPush();
      }

    });
  }

  setupPush() {
    this.onesignal.getIds().then(res => {
      console.log(res);
    });

    this.onesignal.startInit(
      '11482de5-db43-43bd-aed4-9ebf163c569d',
      '578224431818'
    );

    this.onesignal.inFocusDisplaying(this.onesignal.OSInFocusDisplayOption.None);

    this.onesignal.handleNotificationOpened().subscribe((data: any) => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(msg, title, additionalData);
    });
    
    this.onesignal.handleNotificationReceived().subscribe((data: any) => {
      const additionalData = data.notification.payload.additionalData;
      this.showAlert('Noti Opened', 'You did this', additionalData);
    });

    this.onesignal.endInit();
  }

  async showAlert (msg, title, task) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: 'Action: ${task}',
          handler: () => {
            console.log('action');
          },
         }
      ]
    });
    await alert.present();
  }
}
