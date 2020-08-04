(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n          My Orders \n        </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor='let order of orders' (click)=\"(order.status == 0 || order.status == 1 ) ? options(order.id, order.status) : details(order.id)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n\n            <div class=\"processing_background icon_bg\" *ngIf=\"order.status == 0\">\n                <ion-icon style=\"font-size: 3em;\" name=\"sync\"></ion-icon>\n              </div>\n            <div class=\"delivering_background icon_bg\" *ngIf=\"order.status == 1\">\n              <ion-icon style=\"font-size: 3em;\" name=\"bicycle\"></ion-icon>\n              </div>\n            <div class=\"completed_background icon_bg\" *ngIf=\"order.status == 2\">\n                <ion-icon style=\"font-size: 3em;\" name=\"checkmark\"></ion-icon>\n              </div>\n            <div class=\"warning_background icon_bg\" *ngIf=\"order.status == 3 || order.status == 4\">\n                <ion-icon style=\"font-size: 3em;\" name=\"alert\"></ion-icon>\n              </div>\n            <div class=\"failure_background icon_bg\" *ngIf=\"order.status == 5\">\n                <ion-icon style=\"font-size: 3em;\" name=\"close\"></ion-icon>\n              </div>\n\n\n\n          </ion-col>\n\n\n\n          <ion-col size=\"8\">\n            <p class=\"margin-0\">Transaction ID: {{ order.transaction_id }}</p>\n            <b class=\"margin-0\">Cart Price: {{ order.particular[0].amount }} &#8377;</b>\n          <p *ngIf=\"order.status == 0\">Status: <span>Order Placed And Is Processing</span></p>\n          <p *ngIf=\"order.status == 1\">Status: <span>Your Order Is On its Way</span></p>\n          <p *ngIf=\"order.status == 2\">Status: <span>Order Completed</span></p>\n          <p *ngIf=\"order.status == 3 || order.status == 4\">Status: <span>Order Interrupted</span></p>\n          <p *ngIf=\"order.status == 5\">Status: <span>Order Cancelled</span></p>\n            </ion-col>\n          <ion-col size='1'>\n            <!-- <div class=\"\" *ngIf=\"order.status == 0\"> -->\n              <ion-icon style=\"font-size: 1.5em;\" name=\"play\" class=\"vertically-center\"></ion-icon>\n            <!-- </div> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/orders/orders-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");




var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
var OrdersPageRoutingModule = /** @class */ (function () {
    function OrdersPageRoutingModule() {
    }
    OrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OrdersPageRoutingModule);
    return OrdersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/pages/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");







var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon_bg {\n  width: 65px;\n  border-radius: 100%;\n  color: #fff;\n  padding: 10px;\n  margin: 0 auto;\n}\n\n.processing_background {\n  background-color: var(--ion-color-secondary);\n}\n\n.delivering_background {\n  background-color: var(--ion-color-primary);\n}\n\n.completed_background {\n  background-color: var(--ion-color-success);\n}\n\n.failure_background {\n  background-color: var(--ion-color-danger);\n}\n\n.warning_background {\n  background-color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYm9va19zaG9wMi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uX2Jne1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2Nlc3NpbmdfYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmRlbGl2ZXJpbmdfYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jb21wbGV0ZWRfYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5mYWlsdXJlX2JhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi53YXJuaW5nX2JhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufSIsIi5pY29uX2JnIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2Nlc3NpbmdfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uZGVsaXZlcmluZ19iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uY29tcGxldGVkX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5mYWlsdXJlX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLndhcm5pbmdfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var OrdersPage = /** @class */ (function () {
    function OrdersPage(router, http, storage, actionSheetCtrl) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.orders = [];
    }
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.http.call('get', 'api/order/user/' + user.id).then(function (res) {
                console.log(res);
                if (res.error == false) {
                    _this.orders = res.response;
                }
            });
        });
    };
    OrdersPage.prototype.details = function (orderId) {
        console.log(orderId);
        this.router.navigate(['order-details', orderId]);
    };
    OrdersPage.prototype.options = function (orderId, orderStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(orderStatus);
                        buttons = [{
                                text: 'View Details/ Sell Books',
                                icon: 'eye',
                                handler: function () {
                                    console.log('Share clicked');
                                    _this.details(orderId);
                                    _this.actionSheetCtrl.dismiss();
                                }
                            }];
                        if (orderStatus == 0 || orderStatus == 1) {
                            buttons.splice(1, 0, {
                                text: 'Request Cancellation',
                                icon: 'close',
                                handler: function () {
                                    console.log('Favorite clicked');
                                    _this.requestCancellation(orderId);
                                }
                            });
                        }
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Options',
                                buttons: buttons,
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.requestCancellation = function (orderId) {
        var _this = this;
        this.http.call('get', 'api/order/cancel/request/' + orderId).then((function (res) {
            console.log(res);
            if (res.error == false) {
                _this.ngOnInit();
            }
        }));
    };
    OrdersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
    ]; };
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]])
    ], OrdersPage);
    return OrdersPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.call = function (method, apiEndPoint, body) {
        var _this = this;
        console.log(apiEndPoint);
        // const url = 'https://schooby-env.ejmqritgxz.us-east-2.elasticbeanstalk.com/' + apiEndPoint;
        var url = 'http://localhost:8888/book_shop_backend/' + apiEndPoint;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return new Promise(function (resolve, reject) {
            switch (method) {
                case 'get': {
                    console.log(url);
                    _this.http.get(url, { headers: headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        reject(error);
                    });
                    break;
                }
                case 'post': {
                    _this.http.post(url, body, { headers: headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        reject(error);
                    });
                    break;
                }
                case 'put': {
                    _this.http.put(url, body, { headers: headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        reject(error);
                    });
                    break;
                }
                case 'delete': {
                    _this.http.delete(url, { headers: headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
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
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module-es5.js.map