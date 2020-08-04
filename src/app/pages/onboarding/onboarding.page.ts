import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http/http.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  onboarding_stage = 1;
  mobile = new FormControl('', Validators.compose([Validators.required, Validators.min(1000000000), Validators.max(9999999999) ]));
  otp = new FormControl('', Validators.compose([Validators.required, Validators.min(100000), Validators.maxLength(999999) ]));
  register: FormGroup;

  generated_otp: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private storage: Storage,
    private menuCtrl: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService,
    private loadingService: LoadingService
    ) {
      this.menuCtrl.enable(false);
    }

  ngOnInit() {
    this.storage.remove('user');
    this.storage.remove('cart');
  }

  submit_mobile_number() {
    console.log(this.mobile);
    console.log(this.mobile.value);
    console.log(this.mobile.value.length);
    if (this.mobile.valid) {
      console.log('match');
      // check if user exists
      this.sendOtp();
    }
  }
  resendOtp() {
    this.mobile.reset();
    this.onboarding_stage = 1;
  }

  sendOtp() {
    this.generated_otp = (Math.round(Math.random() * 1000000));
    if (this.generated_otp < 100000) {
      this.sendOtp();
    }
    console.log(this.generated_otp);
    this.onboarding_stage = 2;
  }

  submit_otp() {
    console.log(this.otp);
    console.log(this.otp.value);
    console.log(this.otp.value.length);
    if (this.otp.valid) {
      if(this.otp.value == this.generated_otp) {
        console.log('match');
        this.loadingService.create();
        this.http.call('post', 'api/login',
        JSON.stringify({mobile: this.mobile.value}))
          .then((res: any) => {
            this.loadingService.dismiss();
            console.log(res);
            if (res.error === false) {
              this.menuCtrl.enable(true);
              this.storage.set('user', res.response);
              this.onboarding_stage = 1;
              this.router.navigate([],{
                skipLocationChange: true
              });
              this.router.navigate(['/home']);
            } else {
              this.register = this.formBuilder.group({
                name: new FormControl('', Validators.required),
                email: new FormControl('', Validators.required),
              });
              this.onboarding_stage = 3;
            }
          });
        } else {
            this.toastService.show('Invalid OTP');
          }
    }
  }

  register_user() {
    console.log(this.register);
    if (this.register.valid) {
      const body = this.register.value;
      body.mobile = this.mobile.value;
      this.loadingService.create();
      this.http.call('post', 'api/register', JSON.stringify(body))
        .then((res: any) => {
          this.loadingService.dismiss();
          console.log(res);
          if (res.error === false) {
            this.storage.set('user', res.response);
            this.menuCtrl.enable(true);
            this.router.navigate(['/home']);
            this.onboarding_stage = 1;
          }
        });
    } else {

      if (this.register.controls.name.valid) {
        this.toastService.show('Name Is Required');
      }

      if (this.register.controls.email.valid) {
        this.toastService.show('Email Is Required');
      }
    }
  }

}
