(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-select-location-select-location-module"],{

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



/***/ })

}]);
//# sourceMappingURL=modal-select-location-select-location-module-es2015.js.map