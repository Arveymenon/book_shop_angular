(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cart-cart-module~pages-home-home-module~pages-order-confirmation-order-confirmation-mo~18cf6a1e"],{

/***/ "./src/app/services/cart/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/loading.service */ "./src/app/services/loading/loading.service.ts");





var CartService = /** @class */ (function () {
    function CartService(http, storage, loading) {
        this.http = http;
        this.storage = storage;
        this.loading = loading;
        this.cart = [];
        this.books = [];
        this.recommendations = [];
        this.total = 0;
        this.filter = {
            subject: null,
            standard: null,
            board: null,
            refurbished: false
        };
        // do not remove this function call.
        this.getBooks();
    }
    CartService.prototype.getBooks = function (filters) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.loading.create();
            _this.http.call('post', 'api/books/get/0', JSON.stringify(filters))
                .then(function (res) {
                console.log(res);
                _this.loading.dismiss();
                if (res.error === false) {
                    _this.storage.get('cart').then(function (cart) {
                        console.log(cart);
                        if (cart) {
                            _this.cart = cart;
                            res.response.forEach(function (element) {
                                var book = cart.find(function (o) { return o.id == element.id; });
                                console.log(element);
                                console.log(book);
                                if (book) {
                                    element.product_type = 1;
                                    element.quantity_in_cart = book.quantity_in_cart;
                                    element.refurbished = book.refurbished;
                                    // tslint:disable-next-line: no-unused-expression
                                }
                                else {
                                    element.quantity_in_cart = 0;
                                    element.refurbished = false;
                                }
                            });
                            _this.books = res.response;
                            resolve(res.response);
                        }
                        else {
                            res.response.forEach(function (element) {
                                element.quantity_in_cart = 0;
                                element.refurbished = false;
                            });
                            _this.books = res.response;
                            resolve(res.response);
                        }
                    });
                }
                else {
                    console.log('No Books in the database');
                    reject('No Books in the database');
                }
            });
        });
        return promise;
    };
    CartService.prototype.getCart = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cart = [];
            _this.storage.get('cart').then(function (cart) {
                cart.forEach(function (element) {
                    console.log(element);
                    if (element.product_type === 1) {
                        _this.loading.create();
                        _this.http.call('post', 'api/books/get/' + element.id)
                            .then(function (res) {
                            _this.loading.dismiss();
                            console.log(res);
                            if (res.error === false) {
                                res.response.quantity_in_cart = element.quantity_in_cart;
                                res.response.refurbished = element.refurbished;
                                _this.cart.push(res.response);
                                console.log(_this.cart);
                            }
                        });
                    }
                    else if (element.product_type === 3) {
                        console.log('PackageElement', element);
                    }
                    console.log(_this.books);
                });
                resolve(_this.books);
            });
        });
    };
    CartService.prototype.setCart = function (cart) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.storage.set('cart', cart);
            resolve(cart);
        });
        return promise;
    };
    CartService.prototype.getRecommendations = function () {
        var _this = this;
        if (this.cart) {
            this.http.call('post', 'api/recommendations/get', this.cart)
                .then(function (res) {
                console.log(res);
                _this.recommendations = res.response;
            });
        }
    };
    // addToCart(product, productType) {
    //   return new Promise((resolve, reject)=>{
    //     if (productType === 1) {
    //        this.addBook(product, productType); return;
    //     } else {
    //       product.product_type = productType;
    //     }
    //   });
    // }
    CartService.prototype.calculate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var total = 0;
            // this.http.call('post', 'api/books/get/0')
            // .then((res: any) => {
            //   console.log(res);
            //   if (res.error === false) {
            console.log(_this.books);
            console.log(_this.cart);
            // this.storage.get('cart').then((cart: any) => {
            //   console.log(cart);
            if (_this.cart) {
                var calculate = new Promise(function (resolve2, rej) {
                    _this.cart.forEach(function (element) {
                        if (element.product_type === 1) {
                            console.log(element);
                            // If refurbished product available and user has selected it
                            if ((element.refurbished_available === 1 || element.refurbished_available === 0) && element.refurbished === true) {
                                total = total + (Math.round(element.mrp_in_rupees * 0.8) * element.quantity_in_cart);
                                console.log(total);
                            }
                            else {
                                total = total + (element.mrp_in_rupees * element.quantity_in_cart);
                                console.log(total);
                            }
                        }
                        if (element.product_type === 2 || element.product_type === 3) {
                            total = total + (element.mrp_in_rupees * element.quantity_in_cart);
                        }
                    });
                    console.log(total);
                    resolve2(total);
                });
                calculate.then(function (calcTotal) {
                    console.log(calcTotal);
                    _this.total = calcTotal;
                    resolve(_this.total);
                });
            }
            // });
            // }
            // });
        });
    };
    CartService.prototype.addProduct = function (product, productType) {
        var _this = this;
        console.log(product);
        return new Promise(function (resolve, reject) {
            console.log(_this.cart);
            console.log(_this.books);
            // Books View
            // if (productType === 1) {
            //   const viewBookItt = this.books.findIndex(o => (o.id === product.id));
            //   if (viewBookItt > -1) {
            //     this.books[viewBookItt].quantity_in_cart = this.books[viewBookItt].quantity_in_cart + 1;
            //   }
            // }
            // Cart Array And Storage
            var cartBookItt = _this.cart.findIndex(function (o) { return (o.id === product.id && o.product_type === productType); });
            console.log(cartBookItt);
            if (cartBookItt > -1) {
                console.log(_this.cart[cartBookItt].quantity_in_cart);
                _this.cart[cartBookItt].quantity_in_cart += 1;
                console.log(_this.cart[cartBookItt].quantity_in_cart);
                if (_this.cart[cartBookItt].refurbished_available === 1 || _this.cart[cartBookItt].refurbished_available === 0) {
                    _this.cart[cartBookItt].refurbished = _this.cart[cartBookItt].refurbished === true ? true : false;
                }
                _this.cart[cartBookItt].product_type = productType;
                _this.setCart(_this.cart).then(function () {
                    console.log(_this.cart);
                    _this.calculate();
                    resolve(_this.cart);
                });
            }
            else {
                product.quantity_in_cart = 1;
                product.product_type = productType;
                if (product.refurbished_available === 1 || product.refurbished_available === 0) {
                    product.refurbished = product.refurbished === true ? true : false;
                }
                console.log(product);
                _this.cart.push(product);
                _this.setCart(_this.cart).then(function () {
                    _this.calculate();
                    resolve(_this.cart);
                });
            }
        });
    };
    CartService.prototype.removeProduct = function (product) {
        var _this = this;
        console.log(this.cart);
        console.log(product);
        return new Promise(function (resolve, reject) {
            // Books View
            // if (product.product_type == 1) {
            //   const viewBookItt = this.books.findIndex(o => o.id === product.id);
            //   if(viewBookItt > -1){
            //     this.books[viewBookItt].quantity_in_cart = this.books[viewBookItt].quantity_in_cart - 1;
            //   }
            // }
            // Cart Array And Storage
            var bookItt = _this.cart.findIndex(function (o) { return (o.id === product.id && o.product_type === product.product_type); });
            console.log(bookItt);
            if (bookItt > -1) {
                if ((_this.cart[bookItt].quantity_in_cart - 1) !== 0) {
                    _this.cart[bookItt].quantity_in_cart = _this.cart[bookItt].quantity_in_cart - 1;
                    _this.setCart(_this.cart).then(function () {
                        resolve(_this.cart);
                        _this.calculate();
                    });
                }
                else {
                    // remove the book entirely from the cart
                    console.log(_this.cart);
                    _this.cart.splice(bookItt, 1);
                    console.log(_this.cart);
                    _this.setCart(_this.cart).then(function () {
                        resolve(_this.cart);
                        _this.calculate();
                    });
                }
            }
        });
    };
    CartService.prototype.refurbishedToggle = function (bookId) {
        var _this = this;
        console.log(bookId);
        return new Promise(function (resolve, reject) {
            console.log(_this.cart);
            var viewBookItt = _this.books.findIndex(function (o) { return o.id == bookId; });
            var bookItt = _this.cart.findIndex(function (o) { return o.id == bookId; });
            _this.storage.set('cart', _this.cart).then(function (res) {
                _this.calculate();
            });
            resolve(_this.cart[bookItt]);
        });
    };
    CartService.ctorParameters = function () { return [
        { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
    ], CartService);
    return CartService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoadingService = /** @class */ (function () {
    function LoadingService(loadingController) {
        this.loadingController = loadingController;
    }
    LoadingService.prototype.create = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...',
                                spinner: 'crescent',
                                duration: 2000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [2 /*return*/, this.loader.present()];
                }
            });
        });
    };
    LoadingService.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loader.dismiss();
                return [2 /*return*/];
            });
        });
    };
    LoadingService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-cart-cart-module~pages-home-home-module~pages-order-confirmation-order-confirmation-mo~18cf6a1e-es5.js.map