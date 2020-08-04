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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/app/pages/order-confirmation/order-confirmation.page.ts");




var routes = [
    {
        path: '',
        component: _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmationPage"]
    }
];
var OrderConfirmationPageRoutingModule = /** @class */ (function () {
    function OrderConfirmationPageRoutingModule() {
    }
    OrderConfirmationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OrderConfirmationPageRoutingModule);
    return OrderConfirmationPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmation-routing.module */ "./src/app/pages/order-confirmation/order-confirmation-routing.module.ts");
/* harmony import */ var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-confirmation.page */ "./src/app/pages/order-confirmation/order-confirmation.page.ts");
/* harmony import */ var src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal/select-location/select-location.module */ "./src/app/modal/select-location/select-location.module.ts");








var OrderConfirmationPageModule = /** @class */ (function () {
    function OrderConfirmationPageModule() {
    }
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
    return OrderConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/order-confirmation/order-confirmation.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/order-confirmation/order-confirmation.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n.footer .controls {\n  text-align: center;\n}\n.footer .controls .order_details {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYm9va19zaG9wMi9zcmMvYXBwL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNBLGtCQUFBO0FDRko7QURHUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgLnRvdGFse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgIH1cblxuICAgIC5jb250cm9sc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5vcmRlcl9kZXRhaWxze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCAjN2I3YjdiO1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZm9vdGVyIC50b3RhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZvb3RlciAuY29udHJvbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5jb250cm9scyAub3JkZXJfZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCAjN2I3YjdiO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/select-location/select-location.page */ "./src/app/modal/select-location/select-location.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");












var OrderConfirmationPage = /** @class */ (function () {
    function OrderConfirmationPage(cartService, payment, http, storage, router, modalController, toast, loadingService) {
        this.cartService = cartService;
        this.payment = payment;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.modalController = modalController;
        this.toast = toast;
        this.loadingService = loadingService;
        this.total = 0;
        this.old_total = 0;
        this.addresses = [];
        this.selectedAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.couponCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
    }
    OrderConfirmationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.user = user;
            _this.http.call('get', 'api/address/' + user.id)
                .then(function (res) {
                console.log(res);
                if (res.error == false) {
                    _this.addresses = res.response;
                }
            });
            _this.cartService.calculate().then(function (res) {
                _this.total = res;
            });
        });
    };
    OrderConfirmationPage.prototype.validateCoupon = function () {
        var _this = this;
        this.cartService.calculate().then(function (total) {
            console.log(total);
            _this.storage.get('cart').then(function (cart) {
                console.log(cart);
                var body = JSON.stringify({
                    code: _this.couponCode.value,
                    customerId: 1,
                    cartTotal: total,
                    cart: cart
                });
                console.log(body);
                _this.loadingService.create();
                _this.http.call('post', 'api/coupon/check', body)
                    .then(function (res) {
                    console.log(res);
                    _this.loadingService.create();
                    if (res.validated == false) {
                        _this.toast.show(res.message);
                    }
                    else {
                        _this.old_total = _this.total;
                        _this.total = res.discounted_total;
                        _this.toast.show('Coupon Added Sucessfully');
                    }
                });
            });
        });
    };
    OrderConfirmationPage.prototype.addAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__["SelectLocationPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.ngOnInit();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderConfirmationPage.prototype.makePayment = function () {
        var _this = this;
        console.log(this.selectedAddress.value);
        if (this.selectedAddress.value) {
            this.storage.get('cart').then(function (cart) {
                console.log(cart);
                _this.payment.pay(_this.total).then(function (res) {
                    console.log(res);
                    _this.res_check = res.paymentId;
                    if (res.error == false) {
                        var body = {
                            customer_id: _this.user.id,
                            address_id: _this.selectedAddress.value,
                            transaction_id: res.paymentId,
                            // transaction_id: '1234353',
                            status: 0,
                            details: cart,
                            coupon: {
                                code: _this.couponCode.value
                            },
                            total: _this.total,
                            sub_total: _this.old_total > 0 ? _this.old_total : _this.total
                        };
                        console.log(body);
                        _this.loadingService.create();
                        _this.http.call('post', 'api/order/post', JSON.stringify(body))
                            .then(function (res2) {
                            console.log(res2);
                            _this.loadingService.dismiss();
                            if (res2.error == false) {
                                _this.storage.remove('cart');
                                _this.router.navigate(['/home'], { replaceUrl: true });
                            }
                        });
                    }
                });
            });
        }
        else {
            this.toast.show('Kindly Select An Address');
        }
    };
    OrderConfirmationPage.ctorParameters = function () { return [
        { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
        { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
        { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] }
    ]; };
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
            src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]])
    ], OrderConfirmationPage);
    return OrderConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-order-confirmation-order-confirmation-module-es5.js.map