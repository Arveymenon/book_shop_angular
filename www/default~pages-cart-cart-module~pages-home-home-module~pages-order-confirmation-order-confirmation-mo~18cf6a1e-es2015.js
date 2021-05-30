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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/loading.service */ "./src/app/services/loading/loading.service.ts");





let CartService = class CartService {
    constructor(http, storage, loading) {
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
    getBooks(filters) {
        const promise = new Promise((resolve, reject) => {
            this.loading.create();
            this.http.call('post', 'api/books/get/0', JSON.stringify(filters))
                .then((res) => {
                console.log(res);
                this.loading.dismiss();
                if (res.error === false) {
                    this.storage.get('cart').then((cart) => {
                        console.log(cart);
                        if (cart) {
                            this.cart = cart;
                            res.response.forEach((element) => {
                                const book = cart.find(o => o.id == element.id);
                                console.log(element);
                                console.log(book);
                                if (book) {
                                    element.product_type = book.product_type;
                                    element.quantity_in_cart = book.quantity_in_cart;
                                    element.refurbished = book.refurbished;
                                    // tslint:disable-next-line: no-unused-expression
                                }
                                else {
                                    element.quantity_in_cart = 0;
                                    element.refurbished = false;
                                }
                            });
                            this.books = res.response;
                            resolve(res.response);
                        }
                        else {
                            res.response.forEach((element) => {
                                element.quantity_in_cart = 0;
                                element.refurbished = false;
                            });
                            this.books = res.response;
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
    }
    getCart() {
        return new Promise((resolve, reject) => {
            this.cart = [];
            this.storage.get('cart').then(cart => {
                cart.forEach((element) => {
                    console.log(element);
                    if (element.product_type === 1) {
                        this.loading.create();
                        this.http.call('post', 'api/books/get/' + element.id)
                            .then((res) => {
                            this.loading.dismiss();
                            console.log(res);
                            if (res.error === false) {
                                res.response.quantity_in_cart = element.quantity_in_cart;
                                res.response.refurbished = element.refurbished;
                                this.cart.push(res.response);
                                console.log(this.cart);
                            }
                        });
                    }
                    else if (element.product_type === 3) {
                        console.log('PackageElement', element);
                    }
                    console.log(this.books);
                });
                resolve(this.books);
            });
        });
    }
    setCart(cart) {
        const promise = new Promise((resolve, reject) => {
            this.storage.set('cart', cart);
            resolve(cart);
        });
        return promise;
    }
    getRecommendations() {
        if (this.cart) {
            console.log(JSON.stringify(this.cart));
            this.http.call('post', 'api/recommendations/get', JSON.stringify(this.cart))
                .then((res) => {
                console.log(res);
                this.recommendations = res.response;
            });
        }
    }
    // addToCart(product, productType) {
    //   return new Promise((resolve, reject)=>{
    //     if (productType === 1) {
    //        this.addBook(product, productType); return;
    //     } else {
    //       product.product_type = productType;
    //     }
    //   });
    // }
    calculate() {
        return new Promise((resolve, reject) => {
            let total = 0;
            // this.http.call('post', 'api/books/get/0')
            // .then((res: any) => {
            //   console.log(res);
            //   if (res.error === false) {
            console.log(this.books);
            console.log(this.cart);
            // this.storage.get('cart').then((cart: any) => {
            //   console.log(cart);
            if (this.cart) {
                const calculate = new Promise((resolve2, rej) => {
                    this.cart.forEach((element) => {
                        if (element.product_type === 1) {
                            console.log(element);
                            // If refurbished product available and user has selected it
                            if ((element.book.refurbished_available === 1 ||
                                element.book.refurbished_available === 0) && element.book.refurbished === true) {
                                total = total + (Math.round(element.book.mrp_in_rupees * 0.8) * element.quantity_in_cart);
                                console.log(total);
                            }
                            else {
                                total = total + (element.book.mrp_in_rupees * element.quantity_in_cart);
                                console.log(total);
                            }
                        }
                        if (element.product_type === 2 || element.product_type === 3) {
                            total = total + (element.book.mrp_in_rupees * element.quantity_in_cart);
                        }
                    });
                    console.log(total);
                    resolve2(total);
                });
                calculate.then((calcTotal) => {
                    console.log(calcTotal);
                    this.total = calcTotal;
                    resolve(this.total);
                });
            }
            // });
            // }
            // });
        });
    }
    addProduct(ProductId, productType, product) {
        console.log(ProductId);
        console.log(productType);
        return new Promise((resolve, reject) => {
            let BookItt;
            if (productType == 1) {
                BookItt = this.books.findIndex(o => (o.id == ProductId));
                console.log(BookItt);
                this.books[BookItt].quantity_in_cart += 1;
            }
            const cartBookItt = this.cart.findIndex(o => (o.book.id == ProductId && o.product_type == productType)); // All type. not only books
            console.log(cartBookItt);
            if (cartBookItt > -1) {
                this.cart[cartBookItt].quantity_in_cart += 1;
                console.log(this.cart);
                console.log(this.books);
                if (this.cart[cartBookItt].refurbished_available === 1 || this.cart[cartBookItt].refurbished_available === 0) {
                    this.cart[cartBookItt].refurbished = this.cart[cartBookItt].refurbished === true ? true : false;
                }
                this.cart[cartBookItt].product_type = productType;
                this.setCart(this.cart).then(() => {
                    console.log(this.cart);
                    this.calculate();
                    resolve(this.cart);
                });
            }
            else {
                var newProduct = {};
                newProduct.book = this.books[BookItt] ? this.books[BookItt] : product;
                newProduct.quantity_in_cart = 1;
                newProduct.product_type = productType;
                if (newProduct.refurbished_available === 1 || newProduct.refurbished_available === 0) {
                    newProduct.refurbished = newProduct.refurbished === true ? true : false;
                }
                console.log(newProduct);
                this.cart.push(newProduct);
                this.setCart(this.cart).then(() => {
                    this.calculate();
                    resolve(this.cart);
                });
            }
        });
    }
    removeProduct(productId, productType, product) {
        return new Promise((resolve, reject) => {
            if (productType == 1) {
                const BookItt = this.books.findIndex(o => (o.id == productId));
                console.log(BookItt);
                if (BookItt > -1)
                    this.books[BookItt].quantity_in_cart -= 1;
            }
            //   // Cart Array And Storage
            console.log(this.cart);
            console.log(productId);
            const bookItt = this.cart.findIndex(o => (o.book.id === productId && o.product_type === productType));
            console.log(bookItt);
            if (bookItt > -1) {
                let est = this.cart[bookItt].quantity_in_cart;
                if (est - 1 != 0) {
                    this.cart[bookItt].quantity_in_cart -= 1;
                    this.setCart(this.cart).then(() => {
                        resolve(this.cart);
                        this.calculate();
                    });
                }
                else {
                    // remove the book entirely from the cart
                    console.log(this.cart);
                    this.cart.splice(bookItt, 1);
                    console.log(this.cart);
                    this.setCart(this.cart).then(() => {
                        resolve(this.cart);
                        this.calculate();
                    });
                }
            }
            resolve(this.cart[bookItt]);
        });
    }
    removeBook(viewBookItt) {
    }
    refurbishedToggle(bookId) {
        console.log(bookId);
        return new Promise((resolve, reject) => {
            console.log(this.cart);
            const viewBookItt = this.books.findIndex(o => o.id == bookId);
            const bookItt = this.cart.findIndex(o => o.id == bookId);
            this.storage.set('cart', this.cart).then(res => {
                this.calculate();
            });
            resolve(this.cart[bookItt]);
        });
    }
};
CartService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
], CartService);



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



/***/ })

}]);
//# sourceMappingURL=default~pages-cart-cart-module~pages-home-home-module~pages-order-confirmation-order-confirmation-mo~18cf6a1e-es2015.js.map