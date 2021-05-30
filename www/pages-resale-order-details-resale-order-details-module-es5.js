(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resale-order-details-resale-order-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/resale-order-details/resale-order-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/resale-order-details/resale-order-details.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Resale Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"book_card\" *ngFor=\"let order of resaleBooks; let itt = index\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size='2'>\n            <img src='https://elasticbeanstalk-us-east-2-743144358023.s3.us-east-2.amazonaws.com/{{ order.order_detail.book.image }}'>\n          </ion-col>\n          <ion-col size='7'>\n            <b>{{ order.order_detail.book.name }}</b><br>\n            {{ order.order_detail.book.board.name }}<br>\n            <span *ngIf=\"order.status == 0\" >Max Refund Amount: {{ math.round(order.order_detail.book.mrp_in_rupees * 0.6) }} &#8377;</span>\n            <span *ngIf=\"order.status == 1\">Refund Amount: {{ order.resale_value }} &#8377;</span>\n            <span *ngIf=\"order.status == 2\">Order Canceled</span>\n          </ion-col>\n        <ion-col size='3'>\n          \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/resale-order-details/resale-order-details-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/resale-order-details/resale-order-details-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ResaleOrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrderDetailsPageRoutingModule", function() { return ResaleOrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resale_order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resale-order-details.page */ "./src/app/pages/resale-order-details/resale-order-details.page.ts");




var routes = [
    {
        path: '',
        component: _resale_order_details_page__WEBPACK_IMPORTED_MODULE_3__["ResaleOrderDetailsPage"]
    }
];
var ResaleOrderDetailsPageRoutingModule = /** @class */ (function () {
    function ResaleOrderDetailsPageRoutingModule() {
    }
    ResaleOrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ResaleOrderDetailsPageRoutingModule);
    return ResaleOrderDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/resale-order-details/resale-order-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/resale-order-details/resale-order-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: ResaleOrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrderDetailsPageModule", function() { return ResaleOrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resale_order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resale-order-details-routing.module */ "./src/app/pages/resale-order-details/resale-order-details-routing.module.ts");
/* harmony import */ var _resale_order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resale-order-details.page */ "./src/app/pages/resale-order-details/resale-order-details.page.ts");







var ResaleOrderDetailsPageModule = /** @class */ (function () {
    function ResaleOrderDetailsPageModule() {
    }
    ResaleOrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _resale_order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResaleOrderDetailsPageRoutingModule"]
            ],
            declarations: [_resale_order_details_page__WEBPACK_IMPORTED_MODULE_6__["ResaleOrderDetailsPage"]]
        })
    ], ResaleOrderDetailsPageModule);
    return ResaleOrderDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/resale-order-details/resale-order-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/resale-order-details/resale-order-details.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2FsZS1vcmRlci1kZXRhaWxzL3Jlc2FsZS1vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/resale-order-details/resale-order-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/resale-order-details/resale-order-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: ResaleOrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResaleOrderDetailsPage", function() { return ResaleOrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ResaleOrderDetailsPage = /** @class */ (function () {
    function ResaleOrderDetailsPage(http, route) {
        this.http = http;
        this.route = route;
        this.resaleBooks = [];
        this.math = Math;
    }
    ResaleOrderDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            _this.http.call('get', 'api/resale/order/details/' + params.params.id).then(function (data) {
                console.log(data);
                if (data.error == false) {
                    _this.resaleBooks = data.response.details;
                }
            });
        });
    };
    ResaleOrderDetailsPage.ctorParameters = function () { return [
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ResaleOrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resale-order-details',
            template: __webpack_require__(/*! raw-loader!./resale-order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/resale-order-details/resale-order-details.page.html"),
            styles: [__webpack_require__(/*! ./resale-order-details.page.scss */ "./src/app/pages/resale-order-details/resale-order-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResaleOrderDetailsPage);
    return ResaleOrderDetailsPage;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




// import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
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
    HttpService.prototype.call = function (method, apiEndPoint, body) {
        var _this = this;
        console.log(apiEndPoint);
        // const url = 'https://schooby.us-east-2.elasticbeanstalk.com/' + apiEndPoint;
        // const url = 'http://192.168.1.192:8000/book_shop_backend/' + apiEndPoint;
        var url = this.url + apiEndPoint;
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
//# sourceMappingURL=pages-resale-order-details-resale-order-details-module-es5.js.map