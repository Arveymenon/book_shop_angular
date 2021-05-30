(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resale-orders-resale-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/resale-orders/resale-orders.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/resale-orders/resale-orders.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Resale Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor='let order of resaleOrders' (click)=\"details(order.id)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n\n            <div class=\"processing_background icon_bg\" *ngIf=\"order.status == 0\">\n                <ion-icon style=\"font-size: 3em;\" name=\"sync\"></ion-icon>\n              </div>\n            <div class=\"delivering_background icon_bg\" *ngIf=\"order.status == 1\">\n              <ion-icon style=\"font-size: 3em;\" name=\"bicycle\"></ion-icon>\n              </div>\n            <div class=\"completed_background icon_bg\" *ngIf=\"order.status == 2\">\n                <ion-icon style=\"font-size: 3em;\" name=\"checkmark\"></ion-icon>\n              </div>\n            <div class=\"warning_background icon_bg\" *ngIf=\"order.status == 3 || order.status == 4\">\n                <ion-icon style=\"font-size: 3em;\" name=\"alert\"></ion-icon>\n              </div>\n            <div class=\"failure_background icon_bg\" *ngIf=\"order.status == 5\">\n                <ion-icon style=\"font-size: 3em;\" name=\"close\"></ion-icon>\n              </div>\n\n\n\n          </ion-col>\n\n\n\n          <ion-col size=\"8\">\n              <p class=\"margin-0\">Request Placed On {{ moment(order.created_at).add(1, 'd').format('L') }}</p>\n              <p class=\"margin-0\" *ngIf=\"order.status == 0\">Status: <span>Order Placed And Is Processing</span></p>\n              <p class=\"margin-0\" *ngIf=\"order.status == 1\">Status: <span>Your Order Is On its Way</span></p>\n              <p class=\"margin-0\" *ngIf=\"order.status == 2\">Status: <span>Order Completed</span></p>\n              <p class=\"margin-0\" *ngIf=\"order.status == 3 || order.status == 4\">Status: <span>Order Interrupted</span></p>\n              <p class=\"margin-0\" *ngIf=\"order.status == 5\">Status: <span>Order Cancelled</span></p>\n\n\n            </ion-col>\n          <ion-col size='1'>\n            <!-- <div class=\"\" *ngIf=\"order.status == 0\"> -->\n              <ion-icon style=\"font-size: 1.5em;\" name=\"play\" class=\"vertically-center\"></ion-icon>\n            <!-- </div> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/resale-orders/resale-orders-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/resale-orders/resale-orders-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ResaleOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrdersPageRoutingModule", function() { return ResaleOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resale_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resale-orders.page */ "./src/app/pages/resale-orders/resale-orders.page.ts");




const routes = [
    {
        path: '',
        component: _resale_orders_page__WEBPACK_IMPORTED_MODULE_3__["ResaleOrdersPage"]
    }
];
let ResaleOrdersPageRoutingModule = class ResaleOrdersPageRoutingModule {
};
ResaleOrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResaleOrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/resale-orders/resale-orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/resale-orders/resale-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: ResaleOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrdersPageModule", function() { return ResaleOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resale_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resale-orders-routing.module */ "./src/app/pages/resale-orders/resale-orders-routing.module.ts");
/* harmony import */ var _resale_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resale-orders.page */ "./src/app/pages/resale-orders/resale-orders.page.ts");







let ResaleOrdersPageModule = class ResaleOrdersPageModule {
};
ResaleOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resale_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResaleOrdersPageRoutingModule"]
        ],
        declarations: [_resale_orders_page__WEBPACK_IMPORTED_MODULE_6__["ResaleOrdersPage"]]
    })
], ResaleOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/resale-orders/resale-orders.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/resale-orders/resale-orders.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon_bg {\n  width: 65px;\n  border-radius: 100%;\n  color: #fff;\n  padding: 10px;\n  margin: 0 auto;\n}\n\n.processing_background {\n  background-color: var(--ion-color-secondary);\n}\n\n.delivering_background {\n  background-color: var(--ion-color-primary);\n}\n\n.completed_background {\n  background-color: var(--ion-color-success);\n}\n\n.failure_background {\n  background-color: var(--ion-color-danger);\n}\n\n.warning_background {\n  background-color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvcGFnZXMvcmVzYWxlLW9yZGVycy9yZXNhbGUtb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzYWxlLW9yZGVycy9yZXNhbGUtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNhbGUtb3JkZXJzL3Jlc2FsZS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25fYmd7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvY2Vzc2luZ19iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uZGVsaXZlcmluZ19iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbXBsZXRlZF9iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmZhaWx1cmVfYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLndhcm5pbmdfYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59IiwiLmljb25fYmcge1xuICB3aWR0aDogNjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvY2Vzc2luZ19iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5kZWxpdmVyaW5nX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb21wbGV0ZWRfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmZhaWx1cmVfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4ud2FybmluZ19iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/resale-orders/resale-orders.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/resale-orders/resale-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: ResaleOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrdersPage", function() { return ResaleOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ResaleOrdersPage = class ResaleOrdersPage {
    constructor(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.resaleOrders = [];
        this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
    }
    ngOnInit() {
        this.storage.get('user').then(user => {
            this.http.call('get', 'api/resale/user/' + user.id).then((data) => {
                console.log(data);
                if (data.error == false) {
                    this.resaleOrders = data.response;
                }
            });
        });
    }
    details(resaleId) {
        this.router.navigate(['resale-order-details', resaleId]);
    }
};
ResaleOrdersPage.ctorParameters = () => [
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResaleOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resale-orders',
        template: __webpack_require__(/*! raw-loader!./resale-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/resale-orders/resale-orders.page.html"),
        styles: [__webpack_require__(/*! ./resale-orders.page.scss */ "./src/app/pages/resale-orders/resale-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ResaleOrdersPage);



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



/***/ })

}]);
//# sourceMappingURL=pages-resale-orders-resale-orders-module-es2015.js.map