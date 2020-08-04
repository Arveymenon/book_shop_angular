(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-profile/user-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-profile/user-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <h4 class=\"sm-margin-left dog_font custom-primary-font-color\">Details</h4> -->\n\n\n    \n    <form *ngIf='profile' [formGroup]=\"profile\" (ngSubmit)=\"update()\">\n      \n        <ion-input *ngIf=\"user.name\" type=\"text\" required value=\"{{ user.name }}\" formControlName=\"name\" class=\"flat_input sm-margin-top\" placeholder=\"Enter Your Name\"></ion-input>\n\n        <ion-input type=\"email\" placeholder=\"Enter Your Email\" formControlName=\"email\" required class=\"flat_input sm-margin-top\"></ion-input>\n\n        <ion-input type=\"number\" min=\"8\" max=\"13\" formControlName=\"mobile\" required value=\"{{ user.mobile ? user.mobile : null }}\" class=\"flat_input sm-margin-top\" placeholder=\"Enter Your Mobile Number\"></ion-input>\n\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\">Update Profile</ion-button><br>\n    </form>\n\n\n\n\n    <h4 class=\"sm-margin-left\"><div class=\"dog_font custom-primary-font-color float-left\">Address</div>\n      <div style=\"float: right;\">\n        <ion-icon style=\"color: rgb(95, 95, 95);\" size=\"large\" (click)=\"addAddress()\" name=\"add-circle-outline\"></ion-icon>\n      </div>\n    </h4>\n    <div class=\"width-100\" class='text-center' (click)=\"addAddress()\" *ngIf=\"!addresses || addresses.length == 0\">\n      <p class=\"width-100\" class='text-center'>Kindly Add Your Address</p>\n    </div>\n      <ion-list *ngIf=\"addresses && addresses.length > 0\" class=\"width-100\" style=\"background: #0000; width: 100%\">\n        <ion-item *ngFor=\"let address of addresses\" style=\"--background: #0000\">\n          {{ address.address }}\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/pages/user-profile/user-profile.page.ts");
/* harmony import */ var src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal/select-location/select-location.module */ "./src/app/modal/select-location/select-location.module.ts");








var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_modal_select_location_select_location_module__WEBPACK_IMPORTED_MODULE_7__["SelectLocationPageModule"]
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(243,242,242,0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYm9va19zaG9wMi9zcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywyNDIsMjQyLDAuMykgIWltcG9ydGFudDtcbn1cbi8vIGlvbi1pdGVtIHtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAxcHggIzhjOGM4Yztcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLDI0MiwyNDIsMC4zKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modal/select-location/select-location.page */ "./src/app/modal/select-location/select-location.page.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");











var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(storage, router, alertController, http, formBuilder, location, toastService, modalController, loadingService) {
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.http = http;
        this.formBuilder = formBuilder;
        this.location = location;
        this.toastService = toastService;
        this.modalController = modalController;
        this.loadingService = loadingService;
        this.addresses = [];
        // this.storage.set('dogs').then(dogs=>{
        //   console.log(dogs)
        //   this.dogs = dogs;
        // })
    }
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.user = user;
            _this.profile = _this.formBuilder.group({
                'name': [_this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
                'email': [_this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email])],
                'mobile': [_this.user.mobile ? _this.user.mobile : '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)])]
            });
            _this.storage.get('default_address').then(function (res) {
                console.log(res);
            });
            _this.http.call('get', 'api/address/' + user.id).then(function (data) {
                console.log(data);
                if (data.error == false) {
                    _this.addresses = data.response;
                    var _loop_1 = function (address) {
                        _this.location.getLocationByCoordinates(address.lat, address.lng).then(function (location) {
                            console.log(location);
                            address.location = location;
                            console.log(address.location);
                        });
                    };
                    for (var _i = 0, _a = _this.addresses; _i < _a.length; _i++) {
                        var address = _a[_i];
                        _loop_1(address);
                    }
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    UserProfilePage.prototype.addAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_9__["SelectLocationPage"],
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
    UserProfilePage.prototype.update = function () {
        var _this = this;
        if (this.profile.valid) {
            var body = JSON.stringify({
                user_id: this.user.id,
                name: this.profile.value.name,
                email: this.profile.value.email,
                mobile: this.profile.value.mobile
            });
            console.log(body);
            this.loadingService.create();
            this.http.call('post', 'api/register', body).then(function (data) {
                console.log(data);
                _this.loadingService.dismiss();
                if (data.error == false) {
                    _this.storage.set('user', data.response);
                    _this.toastService.show('Profile Updated');
                }
                else {
                    _this.toastService.show(data.message);
                }
            }, function (err) {
                console.log(err);
                _this.toastService.show(err);
            });
        }
        else {
        }
    };
    UserProfilePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
        { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
    ]; };
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/pages/user-profile/user-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]])
    ], UserProfilePage);
    return UserProfilePage;
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
//# sourceMappingURL=pages-user-profile-user-profile-module-es5.js.map