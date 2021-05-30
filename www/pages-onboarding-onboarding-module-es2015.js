(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/onboarding.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/onboarding/onboarding.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"welcome\">\n        <h2 class=\"fancy_font first_line\">Welcome To</h2>\n        <h1 class=\"fancy_font second_line\">SCHOOBY</h1>\n    </div>\n    <div class=\"logo_box\">\n        <img width=\"30%\" src=\"assets/images/logo.png\">\n    </div>\n    <div *ngIf=\"onboarding_stage == 1\" class=\"number_form\">\n        <ion-input type=\"number\" [formControl]='mobile' placeholder=\"Mobile\" class=\"ion-text-center flat_input custom_input wide_input\" (ionChange)=\"submit_mobile_number()\"></ion-input>\n    </div>\n    <div *ngIf=\"onboarding_stage == 2\" style=\"position: absolute; color: #000\">\n        {{ generated_otp }}\n    </div>\n    <div *ngIf=\"onboarding_stage == 2\" class=\"number_form\">\n        <ion-input type=\"number\" placeholder=\"OTP\" [formControl]='otp' class=\"ion-text-center flat_input otp_input\" (ionChange)=\"submit_otp()\"></ion-input>\n        <!-- <ion-chip (click)=\"submit_otp()\" class='submit_icon otp_submit'>\n            <ion-icon class=\"margin-0\" color=\"primary\" name=\"arrow-dropright\"></ion-icon>\n        </ion-chip> -->\n        <p class=\"resend_option\" (click)=\"resendOtp()\"> Resend Otp</p>\n    </div>\n\n    <div *ngIf=\"onboarding_stage == 3\" class=\"number_form\">\n        <form [formGroup]=\"register\">\n            <ion-input placeholder=\"Name\" formControlName='name' class=\"flat_input register_input\"></ion-input>\n            <ion-input  placeholder=\"Email\" formControlName='email' class=\"flat_input register_input\"></ion-input>\n            <ion-button (click)=\"register_user()\" color='primary' expand=\"block\" class=\"register_submit\"> Register</ion-button>\n        </form>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/pages/onboarding/onboarding.page.ts");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "./src/app/pages/onboarding/onboarding-routing.module.ts");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/pages/onboarding/onboarding.page.ts");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })
], OnboardingPageModule);



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --offset-top: 0px;\n  --offset-bottom: 0px;\n  --color: #fff;\n}\nion-content .logo_box {\n  text-align: center;\n}\nion-content .logo_box img {\n  width: 30%;\n  max-width: 300px;\n}\n.welcome {\n  text-align: center;\n  margin-top: 10%;\n  color: #3f9076;\n}\n.welcome .first_line {\n  font-size: 2em;\n}\n.welcome .second_line {\n  font-size: 3.5em;\n}\n.number_form {\n  margin-top: 8%;\n}\n.number_form .custom_input {\n  position: absolute;\n}\n.number_form .wide_input {\n  width: 60%;\n  margin: 0 20%;\n}\n.number_form .submit_icon {\n  float: right;\n  background: #fff;\n  position: relative;\n  z-index: 999;\n}\n.number_form .number_submit {\n  right: 20%;\n}\n.number_form .otp_input {\n  width: 150px;\n  margin: 0 auto;\n}\n.number_form .otp_submit {\n  right: 37%;\n  bottom: 40px;\n}\n.number_form .register_input {\n  width: 60%;\n  margin: 3% 20%;\n}\n.number_form .register_submit {\n  width: 60%;\n  margin: 0 20%;\n}\n.resend_option {\n  color: #777;\n  opacity: 0.8;\n  text-align: center;\n  font-size: 0.7em;\n  font-weight: 600;\n}\n.register_form {\n  margin-top: 10%;\n  padding: 5%;\n}\n.register_form ion-item {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NaO0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREo7QURFSTtFQUNJLGNBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREtBO0VBQ0ksY0FBQTtBQ0ZKO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FES0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0hSO0FETUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKUjtBRE9JO0VBQ0ksVUFBQTtBQ0xSO0FEUUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ05SO0FEU0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEVUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEV0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ1RSO0FEYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEYUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDSSxpQkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgLS1vZmZzZXQtdG9wOiAwcHg7XG4gICAgLS1vZmZzZXQtYm90dG9tOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcblxuICAgIC5sb2dvX2JveHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndlbGNvbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBjb2xvcjogIzNmOTA3NjtcbiAgICAuZmlyc3RfbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5zZWNvbmRfbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICB9XG59XG5cblxuLm51bWJlcl9mb3Jte1xuICAgIG1hcmdpbi10b3A6IDglO1xuXG4gICAgLmN1c3RvbV9pbnB1dHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBcbiAgICAud2lkZV9pbnB1dHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIDIwJTtcbiAgICB9XG4gICAgXG4gICAgLnN1Ym1pdF9pY29ue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cbiAgICBcbiAgICAubnVtYmVyX3N1Ym1pdHtcbiAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICB9XG5cbiAgICAub3RwX2lucHV0e1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAub3RwX3N1Ym1pdHtcbiAgICAgICAgcmlnaHQ6IDM3JTtcbiAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgICBcbiAgICAucmVnaXN0ZXJfaW5wdXR7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMyUgMjAlO1xuICAgIH1cblxuICAgIC5yZWdpc3Rlcl9zdWJtaXR7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMCAyMCU7XG4gICAgfVxufVxuXG4ucmVzZW5kX29wdGlvbntcbiAgICBjb2xvcjogIzc3NztcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlZ2lzdGVyX2Zvcm17XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGlvbi1pdGVte1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB9XG5cbiAgICBcbn0iLCJpb24tY29udGVudCB7XG4gIC0tb2Zmc2V0LXRvcDogMHB4O1xuICAtLW9mZnNldC1ib3R0b206IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5sb2dvX2JveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5sb2dvX2JveCBpbWcge1xuICB3aWR0aDogMzAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4ud2VsY29tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzNmOTA3Njtcbn1cbi53ZWxjb21lIC5maXJzdF9saW5lIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ud2VsY29tZSAuc2Vjb25kX2xpbmUge1xuICBmb250LXNpemU6IDMuNWVtO1xufVxuXG4ubnVtYmVyX2Zvcm0ge1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cbi5udW1iZXJfZm9ybSAuY3VzdG9tX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm51bWJlcl9mb3JtIC53aWRlX2lucHV0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIDIwJTtcbn1cbi5udW1iZXJfZm9ybSAuc3VibWl0X2ljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xufVxuLm51bWJlcl9mb3JtIC5udW1iZXJfc3VibWl0IHtcbiAgcmlnaHQ6IDIwJTtcbn1cbi5udW1iZXJfZm9ybSAub3RwX2lucHV0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5udW1iZXJfZm9ybSAub3RwX3N1Ym1pdCB7XG4gIHJpZ2h0OiAzNyU7XG4gIGJvdHRvbTogNDBweDtcbn1cbi5udW1iZXJfZm9ybSAucmVnaXN0ZXJfaW5wdXQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDMlIDIwJTtcbn1cbi5udW1iZXJfZm9ybSAucmVnaXN0ZXJfc3VibWl0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIDIwJTtcbn1cblxuLnJlc2VuZF9vcHRpb24ge1xuICBjb2xvcjogIzc3NztcbiAgb3BhY2l0eTogMC44O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZWdpc3Rlcl9mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nOiA1JTtcbn1cbi5yZWdpc3Rlcl9mb3JtIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");









let OnboardingPage = class OnboardingPage {
    constructor(formBuilder, toastService, storage, menuCtrl, router, route, http, loadingService) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.route = route;
        this.http = http;
        this.loadingService = loadingService;
        this.onboarding_stage = 1;
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999)]));
        this.otp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(100000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(999999)]));
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
            if (this.otp.value == this.generated_otp) {
                console.log('match');
                this.loadingService.create();
                this.http.call('post', 'api/login', JSON.stringify({ mobile: this.mobile.value }))
                    .then((res) => {
                    this.loadingService.dismiss();
                    console.log(res);
                    if (res.error === false) {
                        this.menuCtrl.enable(true);
                        this.storage.set('user', res.response);
                        this.onboarding_stage = 1;
                        this.router.navigate([], {
                            skipLocationChange: true
                        });
                        this.router.navigate(['/home']);
                    }
                    else {
                        this.register = this.formBuilder.group({
                            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        });
                        this.onboarding_stage = 3;
                    }
                });
            }
            else {
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
                .then((res) => {
                this.loadingService.dismiss();
                console.log(res);
                if (res.error === false) {
                    this.storage.set('user', res.response);
                    this.menuCtrl.enable(true);
                    this.router.navigate(['/home']);
                    this.onboarding_stage = 1;
                }
            });
        }
        else {
            if (this.register.controls.name.valid) {
                this.toastService.show('Name Is Required');
            }
            if (this.register.controls.email.valid) {
                this.toastService.show('Email Is Required');
            }
        }
    }
};
OnboardingPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
];
OnboardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: __webpack_require__(/*! raw-loader!./onboarding.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/onboarding.page.html"),
        styles: [__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/pages/onboarding/onboarding.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
], OnboardingPage);



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




// import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.url = 'http://arvey-book-shop.herokuapp.com/';
        this.assets_url = 'https://raw.githubusercontent.com/Arveymenon/book_shop_angular/master/src/assets/';
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            this.url = "http://arvey-book-shop.herokuapp.com/";
            this.assets_url = 'https://raw.githubusercontent.com/Arveymenon/book_shop_angular/master/src/assets/';
        }
        else {
            this.url = "http://localhost:8000/";
            this.assets_url = 'http://localhost:8000/';
        }
    }
    call(method, apiEndPoint, body) {
        console.log(apiEndPoint);
        // const url = 'https://schooby.us-east-2.elasticbeanstalk.com/' + apiEndPoint;
        // const url = 'http://192.168.1.192:8000/book_shop_backend/' + apiEndPoint;
        const url = this.url + apiEndPoint;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return new Promise((resolve, reject) => {
            switch (method) {
                case 'get': {
                    console.log(url);
                    this.http.get(url, { headers })
                        .subscribe((data) => {
                        resolve(data);
                    }, (error) => {
                        reject(error);
                    });
                    break;
                }
                case 'post': {
                    this.http.post(url, body, { headers })
                        .subscribe((data) => {
                        resolve(data);
                    }, (error) => {
                        reject(error);
                    });
                    break;
                }
                case 'put': {
                    this.http.put(url, body, { headers })
                        .subscribe((data) => {
                        resolve(data);
                    }, (error) => {
                        reject(error);
                    });
                    break;
                }
                case 'delete': {
                    this.http.delete(url, { headers })
                        .subscribe((data) => {
                        resolve(data);
                    }, (error) => {
                        reject(error);
                    });
                    break;
                }
                default: {
                    console.log('method not defined');
                    reject('method not defined');
                    break;
                }
            }
            // if(method == 'get'){
            //   this.http.get(body,this.option)
            //   .subscribe((data) => {
            //     resolve(data)
            //   },
            //   (error) => {
            //     reject(error);
            //   },
            // );
            // }else if(method == 'post'){
            // }else if(method == 'put'){
            // }else if(method == 'delete'){
            // }
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/app/services/loading/loading.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/loading/loading.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    create() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please wait...',
                spinner: 'crescent',
                duration: 2000
            });
            return this.loader.present();
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoadingService);



/***/ }),

/***/ "./src/app/services/toast/toast.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    show(message, header, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    header: header ? header : null,
                    message: message,
                    position: position ? position : 'bottom',
                    duration: 2000,
                });
                toast.present();
            }));
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-onboarding-module-es2015.js.map