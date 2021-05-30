(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/resale-confimration/resale-confimration.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/resale-confimration/resale-confimration.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-item class=\"vertically-center\">\n    <ion-label position=\"floating\">Select Your Address</ion-label>\n    <ion-select interface=\"action-sheet\" [formControl]=\"selectedAddress\">\n      <ion-select-option *ngFor=\"let address of addresses\" [value]=\"address.id\">{{ address.address }}</ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-button expand=\"block\"(click)=\"addAddress()\">Add New Address</ion-button>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer\">\n      <ion-grid>\n          <ion-row>\n              <ion-col size=\"6\" class=\"total\">\n                Expected Pick Up Date: {{ moment(this.today).add(1, 'd').format('L') }}\n                </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"controls\" (click)=\"confirm()\">\n                    <p class=\"order_details\">Confirm Address</p>\n                  </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <!-- <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons> -->\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"book_card\" *ngFor=\"let order of order.details; let itt = index\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size='3'>\n            <img src='https://elasticbeanstalk-us-east-2-743144358023.s3.us-east-2.amazonaws.com/{{ order.book.image }}'>\n          </ion-col>\n        <ion-col size='5'>\n            <b>{{ order.book.name }}</b><br>\n            {{ order.book.board.name }}<br>\n            Price: {{ order.refurbished ? math.round(order.book.mrp_in_rupees * 0.8) : order.book.mrp_in_rupees }} &#8377;\n          </ion-col>\n        <ion-col size='4'>\n          <!-- Add to cart System -->\n            <div>\n              <div *ngIf=\"order.refurbished == 1\"> \n                <p class=\"no-margin refurbished_flag\">Refurbished</p>\n              </div>\n                <div class='controls' *ngIf=\"resaleBooks[itt].quantity == 0 && resaleActive == true\" (click)=\"addToCart(itt)\">\n                  <p onclick=\"this.style='box-shadow: none'\" class=\"add_to_cart_button\">Add To Cart</p>\n                </div>\n                <div class=\"controls full_controls\" *ngIf=\"resaleBooks[itt].quantity != 0\">\n                  <div class=\"plus_minus_button\" (click)=\"addToCart(itt)\">+</div>\n                  <div class=\"product_in_cart\">{{ resaleBooks[itt].quantity }}</div>\n                  <div class=\"plus_minus_button\" (click)=\"removeFromCart(itt)\">-</div>\n                </div>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>\n\n<ion-footer>\n\n    <div class=\"footer\" *ngIf=\"this.resaleTotal == 0\">\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"total\" *ngIf=\"order.particular\">\n                  Total: {{ order.particular[0].amount }} &#8377;\n                  </ion-col>\n                  <ion-col *ngIf=\"resaleActive == false && order.resale_order\" class=\"ion-text-center\">\n                    Expected Resale<br> Pick Up Date:\n                       {{ moment(order.resale_order[order.resale_order.length - 1].created_at).add(1, 'd').format('L') }}\n                   </ion-col>\n              </ion-row>\n          </ion-grid>\n      </div>\n    <div class=\"footer\" *ngIf=\"this.resaleTotal != 0\">\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"total\">\n                  Estimated Resale Value:<br> {{ resaleTotal }} &#8377;\n                  </ion-col>\n                <ion-col>\n                  <div class=\"controls\">\n                      <p onclick=\"this.style='box-shadow: none'\" (click)=\"requestResale()\" class=\"order_details\">Request Resale</p>\n                    </div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/modal/resale-confimration/resale-confimration.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modal/resale-confimration/resale-confimration.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n.footer .controls {\n  text-align: center;\n}\n.footer .controls .order_details {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvbW9kYWwvcmVzYWxlLWNvbmZpbXJhdGlvbi9yZXNhbGUtY29uZmltcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbC9yZXNhbGUtY29uZmltcmF0aW9uL3Jlc2FsZS1jb25maW1yYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FESUk7RUFDQSxrQkFBQTtBQ0ZKO0FER1E7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvcmVzYWxlLWNvbmZpbXJhdGlvbi9yZXNhbGUtY29uZmltcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICAudG90YWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2xze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLm9yZGVyX2RldGFpbHN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5mb290ZXIgLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9vdGVyIC5jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmNvbnRyb2xzIC5vcmRlcl9kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/modal/resale-confimration/resale-confimration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modal/resale-confimration/resale-confimration.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResaleConfimrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleConfimrationComponent", function() { return ResaleConfimrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-location/select-location.page */ "./src/app/modal/select-location/select-location.page.ts");








// const moment = require('moment');
var ResaleConfimrationComponent = /** @class */ (function () {
    function ResaleConfimrationComponent(storage, http, modalctrl, modalController) {
        this.storage = storage;
        this.http = http;
        this.modalctrl = modalctrl;
        this.modalController = modalController;
        this.addresses = [];
        this.today = new Date();
        this.selectedAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.moment = moment__WEBPACK_IMPORTED_MODULE_6__;
    }
    ResaleConfimrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(moment__WEBPACK_IMPORTED_MODULE_6__(this.today).add(1, 'd').format('L'));
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.http.call('get', 'api/address/' + user.id)
                .then(function (res) {
                console.log(res);
                if (res.error == false) {
                    _this.addresses = res.response;
                }
            });
        });
    };
    ResaleConfimrationComponent.prototype.addAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _select_location_select_location_page__WEBPACK_IMPORTED_MODULE_7__["SelectLocationPage"],
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
    ResaleConfimrationComponent.prototype.confirm = function () {
        if (this.selectedAddress.valid) {
            this.modalctrl.dismiss(this.selectedAddress.value);
        }
    };
    ResaleConfimrationComponent.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    ResaleConfimrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resale-confimration',
            template: __webpack_require__(/*! raw-loader!./resale-confimration.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/resale-confimration/resale-confimration.component.html"),
            styles: [__webpack_require__(/*! ./resale-confimration.component.scss */ "./src/app/modal/resale-confimration/resale-confimration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ResaleConfimrationComponent);
    return ResaleConfimrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-details/order-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");




var routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
var OrderDetailsPageRoutingModule = /** @class */ (function () {
    function OrderDetailsPageRoutingModule() {
    }
    OrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OrderDetailsPageRoutingModule);
    return OrderDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/pages/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");
/* harmony import */ var src_app_modal_resale_confimration_resale_confimration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal/resale-confimration/resale-confimration.component */ "./src/app/modal/resale-confimration/resale-confimration.component.ts");
/* harmony import */ var src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modal/select-location/select-location.module */ "./src/app/modal/select-location/select-location.module.ts");









var OrderDetailsPageModule = /** @class */ (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_8__["SelectLocationPageModule"]
            ],
            declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"], src_app_modal_resale_confimration_resale_confimration_component__WEBPACK_IMPORTED_MODULE_7__["ResaleConfimrationComponent"]],
            entryComponents: [src_app_modal_resale_confimration_resale_confimration_component__WEBPACK_IMPORTED_MODULE_7__["ResaleConfimrationComponent"]]
        })
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book_card {\n  border-radius: 20px;\n}\n.book_card .refurbished_flag {\n  float: right;\n  padding-right: 5px;\n}\n.book_card .books_refurbished_checkbox {\n  float: right;\n}\n.book_card .controls {\n  width: 100%;\n  text-align: center;\n  float: right;\n}\n.book_card .full_controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  margin-top: 10px;\n}\n.book_card .add_to_cart_button {\n  background: #ff9b24ba;\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n  border-radius: 16px;\n}\n.book_card .product_in_cart {\n  width: 33%;\n  margin: auto;\n  font-size: 1.6em;\n}\n.book_card .plus_minus_button {\n  width: 33%;\n  padding: 2px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.9em;\n  border-radius: 31px;\n  background: #ff9b24ba;\n}\n.footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n.footer .controls {\n  text-align: center;\n}\n.footer .controls .order_details {\n  background: #ff9b24ba;\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n  border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0FDQU47QURHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNETjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBREtJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQ0hOO0FETUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSk47QURPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDTE47QURVSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDUFI7QURXSTtFQUNBLGtCQUFBO0FDVEo7QURVUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va19jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgXG4gICAgLnJlZnVyYmlzaGVkX2ZsYWd7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5ib29rc19yZWZ1cmJpc2hlZF9jaGVja2JveHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRyb2xze1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC5mdWxsX2NvbnRyb2xze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5hZGRfdG9fY2FydF9idXR0b257XG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5YjI0YmE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgLnByb2R1Y3RfaW5fY2FydHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIH1cbiAgXG4gICAgLnBsdXNfbWludXNfYnV0dG9ue1xuICAgICAgd2lkdGg6IDMzJTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS45ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmOWIyNGJhO1xuICAgIH1cbiAgfVxuXG4uZm9vdGVye1xuICAgIC50b3RhbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICB9XG5cbiAgICAuY29udHJvbHN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAub3JkZXJfZGV0YWlsc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjliMjRiYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggIzdiN2I3YjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJvb2tfY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYm9va19jYXJkIC5yZWZ1cmJpc2hlZF9mbGFnIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uYm9va19jYXJkIC5ib29rc19yZWZ1cmJpc2hlZF9jaGVja2JveCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ib29rX2NhcmQgLmNvbnRyb2xzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJvb2tfY2FyZCAuZnVsbF9jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29rX2NhcmQgLmFkZF90b19jYXJ0X2J1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZjliMjRiYTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCAjN2I3YjdiO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmJvb2tfY2FyZCAucHJvZHVjdF9pbl9jYXJ0IHtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuLmJvb2tfY2FyZCAucGx1c19taW51c19idXR0b24ge1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmY5YjI0YmE7XG59XG5cbi5mb290ZXIgLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9vdGVyIC5jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmNvbnRyb2xzIC5vcmRlcl9kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogI2ZmOWIyNGJhO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_modal_resale_confimration_resale_confimration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modal/resale-confimration/resale-confimration.component */ "./src/app/modal/resale-confimration/resale-confimration.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(router, cartService, route, http, storage, toast, location, modalController) {
        this.router = router;
        this.cartService = cartService;
        this.route = route;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.location = location;
        this.modalController = modalController;
        this.books = [];
        this.math = Math;
        this.total = 0;
        this.resaleTotal = 0;
        this.order = {};
        this.moment = moment__WEBPACK_IMPORTED_MODULE_10__;
        this.resaleBooks = [];
        this.resaleActive = false;
    }
    OrderDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.remove('cart');
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            _this.http.call('get', 'api/order/details/' + params.params.id)
                .then(function (res) {
                console.log(res);
                if (res.error == false) {
                    _this.order = res.response;
                    res.response.details.forEach(function (element) {
                        console.log(element);
                        _this.resaleBooks.push({
                            order_details_id: element.id,
                            quantity: 0
                        });
                    });
                    if (res.response.status == 2) {
                        if (res.response.resale_order.length == 0) {
                            _this.resaleActive = true;
                        }
                        else {
                            var lastResaleStatus = res.response.resale_order[res.response.resale_order.length - 1].status;
                            if (lastResaleStatus == 2 || lastResaleStatus == 5) {
                                _this.resaleActive = true;
                            }
                        }
                    }
                }
            });
        });
        this.cartService.getBooks().then(function (res) {
            _this.books = res;
            console.log(_this.books);
        });
    };
    OrderDetailsPage.prototype.requestResale = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_modal_resale_confimration_resale_confimration_component__WEBPACK_IMPORTED_MODULE_8__["ResaleConfimrationComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            var body = JSON.stringify({
                                order_id: _this.order.id,
                                address_id: res.data,
                                details: _this.resaleBooks
                            });
                            console.log(body);
                            _this.http.call('post', 'api/resale/post', body).then(function (data) {
                                console.log(data);
                                if (data.error == false) {
                                    _this.toast.show('Resale Request Sent Successfully');
                                    _this.location.back();
                                }
                                else {
                                    _this.toast.show('Some Error Occured');
                                }
                            });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderDetailsPage.prototype.details = function () {
        this.router.navigate(['order_details']);
    };
    OrderDetailsPage.prototype.addToCart = function (itt) {
        console.log('add', itt);
        if (this.order.details[itt].quantity > this.resaleBooks[itt].quantity) {
            this.resaleBooks[itt].quantity += 1;
            this.calculate();
        }
        else {
            this.toast.show('Cannot Add Books More Than You Bought In This Order');
        }
    };
    OrderDetailsPage.prototype.removeFromCart = function (itt) {
        console.log('remove', itt);
        console.log(this.resaleBooks);
        this.resaleBooks[itt].quantity -= 1;
        this.calculate();
    };
    OrderDetailsPage.prototype.calculate = function () {
        this.resaleTotal = 0;
        for (var book in this.resaleBooks) {
            if (this.resaleBooks[book].quantity != 0) {
                console.log(parseInt(this.order.details[book].book.mrp_in_rupees));
                console.log(this.resaleBooks[book].quantity);
                var bookPrice = this.order.details[book].refurbished == 0 ? parseInt(this.order.details[book].book.mrp_in_rupees)
                    : (parseInt(this.order.details[book].book.mrp_in_rupees) * 0.8);
                this.resaleTotal = this.resaleTotal + (((bookPrice * 0.6) * this.resaleBooks[book].quantity));
                console.log(this.resaleTotal);
            }
        }
    };
    OrderDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
    ]; };
    OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html"),
            styles: [__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es5.js.map