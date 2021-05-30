(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"book_card\" *ngFor=\"let book of cartService.cart; let itt = index\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size='3'>\n            <img [src]=\"this.http.assets_url + book.book.image\">\n          </ion-col>\n        <ion-col size='5'>\n            <b>{{ book.book.name }}</b><br>\n            {{ book.book.board.name }}<br>\n            Price: {{ book.refurbished == true ? mathLib.round(book.book.mrp_in_rupees * 0.8) : book.book.mrp_in_rupees  }} &#8377;\n          </ion-col>\n        <ion-col size='4'>\n          <!-- Refurbished Book Slot -->\n            <div *ngIf=\"book.book.refurbished_available\">\n              <ion-checkbox slot=\"end\" class=\"books_refurbished_checkbox\" (click)=\"refurbished_price(itt)\" [(ngModel)]=\"book.book.refurbished\"></ion-checkbox>\n              <p class=\"no-margin refurbished_flag\">Refurbished</p>\n            </div>\n          <!-- Add to cart System -->\n            <div>\n                <div class='controls' *ngIf=\"book.quantity_in_cart == 0\" (click)=\"cartService.addProduct(book.book.id,book.product_type)\">\n                  <p onclick=\"this.style='box-shadow: none'\" class=\"add_to_cart_button\">Add To Cart</p>\n                </div>\n                <div class=\"controls full_controls\" *ngIf=\"book.book.quantity_in_cart != 0\">\n                  <div class=\"plus_minus_button\" (click)=\"cartService.addProduct(book.book.id,book.product_type)\">+</div>\n                  <div class=\"product_in_cart\">{{ book.quantity_in_cart }}</div>\n                  <div class=\"plus_minus_button\" (click)=\"removeProduct(itt)\">-</div>\n                </div>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n\n\n\n\n\n\n\n    <div class=\"recommendation_section\" *ngIf=\"cartService.recommendations.length > 0\">\n      <p class=\"indented_heading\">Recommended</p>\n      <div class=\"card-section section-card\">\n        <ion-card class=\"moving-card\" *ngFor='let product of cartService.recommendations; let itt = index'>\n          <ion-grid>\n            <ion-row>\n              \n              <ion-col size='3'>\n                <img [src]='this.http.assets_url + product.image'>\n              </ion-col>\n\n              <ion-col size='5'>\n                  <b>{{ product.name }}</b><br>\n                  {{ product.board.name }}<br>\n                  Price: {{ product.refurbished == true ? mathLib.round(product.mrp_in_rupees * 0.8) : product.mrp_in_rupees  }} &#8377;\n                </ion-col>\n\n              <ion-col size='4' class=\"no-padding\">\n                <!-- Refurbished Book Slot -->\n                  <div *ngIf=\"product.refurbished_available\">\n                    <ion-checkbox slot=\"end\" class=\"books_refurbished_checkbox\" (click)=\"refurbished_price(itt)\" [(ngModel)]=\"product.refurbished\"></ion-checkbox>\n                    <p class=\"no-margin refurbished_flag\">Refurbished</p>\n                  </div>\n                <!-- Add to cart System -->\n                  <div>\n                      <div class='controls' (click)=\"cartService.addProduct(product.id, product.product_type, product)\">\n                        <p onclick=\"this.style='box-shadow: none'\" class=\"add_to_cart_button\">Add To Cart</p>\n                      </div>\n                    </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </div>\n      </div>\n\n\n</ion-content>\n\n<ion-footer>\n    <div class=\"footer\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\" class=\"total\">\n                  Order Total: {{ cartService.total }} &#8377;\n                  </ion-col>\n                <ion-col size=\"6\">\n                  <div class=\"controls\" (click)=\"orderConfirmation()\">\n                      <p class=\"order_details\">Place Order</p>\n                    </div>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/cart/cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");




var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
var CartPageRoutingModule = /** @class */ (function () {
    function CartPageRoutingModule() {
    }
    CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CartPageRoutingModule);
    return CartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/pages/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");







var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book_card {\n  border-radius: 10px;\n}\n.book_card .refurbished_flag {\n  float: right;\n  padding-right: 5px;\n}\n.book_card .books_refurbished_checkbox {\n  float: right;\n}\n.book_card .controls {\n  width: 100%;\n  text-align: center;\n  float: right;\n}\n.book_card .full_controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  margin-top: 10px;\n}\n.book_card .add_to_cart_button {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n.book_card .product_in_cart {\n  width: 33%;\n  margin: auto;\n  font-size: 1.6em;\n}\n.book_card .plus_minus_button {\n  width: 33%;\n  padding: 2px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.9em;\n  background: var(--ion-color-primary);\n}\n.recommendation_section .indented_heading {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 16px;\n  position: relative;\n  color: #3e3e3e;\n}\n.recommendation_section .controls {\n  padding: 5px;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n  background-color: #58c3a1;\n}\n.footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n.footer .controls {\n  text-align: center;\n}\n.footer .controls .order_details {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0FDQU47QURHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNETjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBREtJO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNITjtBRE9JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xOO0FEUUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUNQTjtBRGNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNYTjtBRGNJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNaTjtBRGlCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZFI7QURrQkk7RUFDQSxrQkFBQTtBQ2hCSjtBRGlCUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDZloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tfY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxuICAgIC5yZWZ1cmJpc2hlZF9mbGFne1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuYm9va3NfcmVmdXJiaXNoZWRfY2hlY2tib3h7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC5jb250cm9sc3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAuZnVsbF9jb250cm9sc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYWRkX3RvX2NhcnRfYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCAjN2I3YjdiO1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG4gIFxuICAgIC5wcm9kdWN0X2luX2NhcnR7XG4gICAgICB3aWR0aDogMzMlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICB9XG4gIFxuICAgIC5wbHVzX21pbnVzX2J1dHRvbntcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuOWVtO1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbiAgLnJlY29tbWVuZGF0aW9uX3NlY3Rpb257XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGJvdHRvbTogMDtcbiAgICBcbiAgICAuaW5kZW50ZWRfaGVhZGluZ3tcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6ICMzZTNlM2U7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xze1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4YzNhMTtcbiAgICB9XG4gIH1cblxuLmZvb3RlcntcbiAgICAudG90YWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2xze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLm9yZGVyX2RldGFpbHN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5ib29rX2NhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJvb2tfY2FyZCAucmVmdXJiaXNoZWRfZmxhZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmJvb2tfY2FyZCAuYm9va3NfcmVmdXJiaXNoZWRfY2hlY2tib3gge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYm9va19jYXJkIC5jb250cm9scyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ib29rX2NhcmQgLmZ1bGxfY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va19jYXJkIC5hZGRfdG9fY2FydF9idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggIzdiN2I3Yjtcbn1cbi5ib29rX2NhcmQgLnByb2R1Y3RfaW5fY2FydCB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cbi5ib29rX2NhcmQgLnBsdXNfbWludXNfYnV0dG9uIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucmVjb21tZW5kYXRpb25fc2VjdGlvbiAuaW5kZW50ZWRfaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNlM2UzZTtcbn1cbi5yZWNvbW1lbmRhdGlvbl9zZWN0aW9uIC5jb250cm9scyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4YzNhMTtcbn1cblxuLmZvb3RlciAudG90YWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb290ZXIgLmNvbnRyb2xzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAuY29udHJvbHMgLm9yZGVyX2RldGFpbHMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggIzdiN2I3Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");









var CartPage = /** @class */ (function () {
    function CartPage(router, cartService, http, alertController, ref, payment, storage, loadingService) {
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.alertController = alertController;
        this.ref = ref;
        this.payment = payment;
        this.storage = storage;
        this.loadingService = loadingService;
        this.total = 0;
        this.mathLib = Math;
    }
    CartPage.prototype.ngOnInit = function () {
        // console.log(this.cartService.cart);
        this.cartService.getRecommendations();
    };
    CartPage.prototype.details = function () {
        this.router.navigate(['order_details']);
    };
    // addToCart(itt) {
    //   console.log('add',itt);
    //   this.cartService.addBook(this.books[itt].id).then((res: any) => {
    //     console.log(res);
    //     // For View
    //     this.books[itt].quantity_in_cart = this.books[itt].quantity_in_cart + 1;
    //     console.log(this.books);
    //   });
    // }
    CartPage.prototype.removeProduct = function (itt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(itt);
                        console.log(this.cartService.cart);
                        if (!((this.cartService.cart[itt].quantity_in_cart - 1) == 0)) return [3 /*break*/, 3];
                        console.log('remove', itt);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Remove Book',
                                cssClass: 'confirm_alert',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                    },
                                    {
                                        text: 'Confirm',
                                        handler: function () {
                                            _this.remove(itt);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.remove(itt);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.remove = function (itt) {
        this.cartService.removeProduct(this.cartService.cart[itt].book.id, this.cartService.cart[itt].product_type).then(function (res) {
            console.log(res);
        });
    };
    CartPage.prototype.refurbished_price = function (itt) {
        var _this = this;
        this.cartService.refurbishedToggle(this.cartService.cart[itt].id).then(function (res) {
            console.log(res);
            var viewBookItt = _this.cartService.books.findIndex(function (o) { return o.id == _this.cartService.cart[itt].id; });
            if (viewBookItt > -1) {
                console.log('refurbished_price of-', _this.cartService.books[viewBookItt]);
                _this.cartService.books[viewBookItt].refurbished = _this.cartService.books[viewBookItt].refurbished == true ? false : true;
            }
        });
    };
    CartPage.prototype.orderConfirmation = function () {
        // this.payment.pay();
        this.router.navigateByUrl('order-confirmation');
    };
    CartPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
    ]; };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map