(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-confirmation-order-confirmation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-confirmation/order-confirmation.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-confirmation/order-confirmation.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-item class=\"vertically-center\">\n    <ion-label position=\"floating\">Select Your Address</ion-label>\n    <ion-select interface=\"action-sheet\" [formControl]=\"selectedAddress\">\n      <ion-select-option *ngFor=\"let address of addresses\" [value]=\"address.id\">{{ address.address }}</ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-button expand=\"block\"(click)=\"addAddress()\">Add New Address</ion-button>\n  \n  <ion-item>\n    <ion-input placeholder=\"Coupon Code\" [formControl]=\"couponCode\"></ion-input>\n    <ion-button expand=\"block\"(click)=\"validateCoupon()\">Add Coupon</ion-button>\n    </ion-item>\n</ion-content>\n\n<div class=\"width-100 text-center\" *ngIf=\"this.old_total > 0\">\n  <h3>Coupon Applied</h3>\n  <h2>{{ this.couponCode.value }}</h2>\n  <h5><s>{{ this.old_total }}</s></h5>\n  </div>\n<div *ngIf=\"res_check\">{{res_check}}</div>\n<ion-footer>\n  <div class=\"footer\">\n      <ion-grid>\n          <ion-row>\n              <ion-col size=\"6\" class=\"total\">\n                Order Total: {{ total }} &#8377;\n                </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"controls\" (click)=\"makePayment()\">\n                    <p class=\"order_details\">Make Payment</p>\n                  </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/order-confirmation/order-confirmation-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/order-confirmation/order-confirmation-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderConfirmationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageRoutingModule", function() { return OrderConfirmationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/app/pages/order-confirmation/order-confirmation.page.ts");




const routes = [
    {
        path: '',
        component: _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmationPage"]
    }
];
let OrderConfirmationPageRoutingModule = class OrderConfirmationPageRoutingModule {
};
OrderConfirmationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderConfirmationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-confirmation/order-confirmation.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/order-confirmation/order-confirmation.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrderConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmation-routing.module */ "./src/app/pages/order-confirmation/order-confirmation-routing.module.ts");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/app/pages/order-confirmation/order-confirmation.page.ts");
/* harmony import */ var src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal/select-location/select-location.module */ "./src/app/modal/select-location/select-location.module.ts");








let OrderConfirmationPageModule = class OrderConfirmationPageModule {
};
OrderConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationPageRoutingModule"],
            src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_7__["SelectLocationPageModule"]
        ],
        declarations: [_order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["OrderConfirmationPage"]]
    })
], OrderConfirmationPageModule);



/***/ }),

/***/ "./src/app/pages/order-confirmation/order-confirmation.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/order-confirmation/order-confirmation.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n.footer .controls {\n  text-align: center;\n}\n.footer .controls .order_details {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvcGFnZXMvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBUjtBRElJO0VBQ0Esa0JBQUE7QUNGSjtBREdRO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICAudG90YWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2xze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLm9yZGVyX2RldGFpbHN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5mb290ZXIgLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9vdGVyIC5jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmNvbnRyb2xzIC5vcmRlcl9kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/order-confirmation/order-confirmation.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-confirmation/order-confirmation.page.ts ***!
  \*********************************************************************/
/*! exports provided: OrderConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPage", function() { return OrderConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/select-location/select-location.page */ "./src/app/modal/select-location/select-location.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");












let OrderConfirmationPage = class OrderConfirmationPage {
    constructor(cartService, payment, http, storage, router, modalController, toast, loadingService, navCtrl) {
        this.cartService = cartService;
        this.payment = payment;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.modalController = modalController;
        this.toast = toast;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.total = 0;
        this.old_total = 0;
        this.addresses = [];
        this.selectedAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.couponCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
    }
    ngOnInit() {
        this.storage.get('user').then(user => {
            console.log(user);
            this.user = user;
            this.http.call('get', 'api/address/' + user.id)
                .then((res) => {
                console.log(res);
                if (res.error == false) {
                    this.addresses = res.response;
                }
            });
            this.cartService.calculate().then((res) => {
                this.total = res;
            });
        });
    }
    validateCoupon() {
        this.cartService.calculate().then(total => {
            console.log(total);
            this.storage.get('cart').then(cart => {
                console.log(cart);
                const body = JSON.stringify({
                    code: this.couponCode.value,
                    customerId: 1,
                    cartTotal: total,
                    cart: cart
                });
                console.log(body);
                this.loadingService.create();
                this.http.call('post', 'api/coupon/check', body)
                    .then((res) => {
                    console.log(res);
                    this.loadingService.create();
                    if (res.validated == false) {
                        this.toast.show(res.message);
                    }
                    else {
                        this.old_total = this.total;
                        this.total = res.discounted_total;
                        this.toast.show('Coupon Added Sucessfully');
                    }
                });
            });
        });
    }
    addAddress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__["SelectLocationPage"],
            });
            modal.onDidDismiss().then(() => {
                this.ngOnInit();
            });
            return yield modal.present();
        });
    }
    makePayment() {
        console.log(this.selectedAddress.value);
        if (this.selectedAddress.value) {
            this.storage.get('cart').then((cart) => {
                console.log(cart);
                this.payment.pay(this.total).then((res) => {
                    console.log(res);
                    this.res_check = res.paymentId;
                    if (res.error == false) {
                        const body = {
                            customer_id: this.user.id,
                            address_id: this.selectedAddress.value,
                            // transaction_id: res.paymentId,
                            transaction_id: '1234353',
                            status: 0,
                            details: cart,
                            coupon: {
                                code: this.couponCode.value
                            },
                            total: this.total,
                            sub_total: this.old_total > 0 ? this.old_total : this.total
                        };
                        console.log(body);
                        this.loadingService.create();
                        this.http.call('post', 'api/order/post', JSON.stringify(body))
                            .then((res2) => {
                            console.log(res2);
                            this.loadingService.dismiss();
                            if (res2.error == false) {
                                this.storage.remove('cart');
                                this.navCtrl.navigateRoot('/home');
                                // this.router.navigateRoot(['/home']);
                            }
                            else {
                                alert('Some Error Occured');
                            }
                        });
                    }
                });
            });
        }
        else {
            this.toast.show('Kindly Select An Address');
        }
    }
};
OrderConfirmationPage.ctorParameters = () => [
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
OrderConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: __webpack_require__(/*! raw-loader!./order-confirmation.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-confirmation/order-confirmation.page.html"),
        styles: [__webpack_require__(/*! ./order-confirmation.page.scss */ "./src/app/pages/order-confirmation/order-confirmation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"],
        src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])
], OrderConfirmationPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-confirmation-order-confirmation-module-es2015.js.map