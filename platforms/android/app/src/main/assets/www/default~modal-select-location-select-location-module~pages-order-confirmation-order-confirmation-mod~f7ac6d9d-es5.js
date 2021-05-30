(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-select-location-select-location-module~pages-order-confirmation-order-confirmation-mod~f7ac6d9d"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/select-location/select-location.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/select-location/select-location.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"map-wrapper\">\n      <div id=\"map_center\">\n        <img src=\"../assets/icon/center_marker.png\" />\n      </div>\n      <div #map id=\"map\"></div>\n    </div>\n    <div id=\"address\">\n      <form [formGroup]=\"new_address\" (ngSubmit)=\"addAddress()\">\n        <ion-input disabled>{{ address }}</ion-input>\n        <ion-input formControlName=\"house\" placeholder=\"House/Flat No.\" required></ion-input>\n        <ion-input formControlName=\"landmark\" placeholder=\"Landmark\"></ion-input>\n        <ion-button expand=\"block\" [disabled]=\"!new_address.valid\" type=\"submit\">Submit</ion-button>\n      </form>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/modal/select-location/select-location-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modal/select-location/select-location-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageRoutingModule", function() { return SelectLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-location.page */ "./src/app/modal/select-location/select-location.page.ts");




var routes = [
    {
        path: '',
        component: _select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"]
    }
];
var SelectLocationPageRoutingModule = /** @class */ (function () {
    function SelectLocationPageRoutingModule() {
    }
    SelectLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SelectLocationPageRoutingModule);
    return SelectLocationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modal/select-location/select-location.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modal/select-location/select-location.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageModule", function() { return SelectLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-location-routing.module */ "./src/app/modal/select-location/select-location-routing.module.ts");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-location.page */ "./src/app/modal/select-location/select-location.page.ts");







var SelectLocationPageModule = /** @class */ (function () {
    function SelectLocationPageModule() {
    }
    SelectLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectLocationPageRoutingModule"]
            ],
            declarations: [_select_location_page__WEBPACK_IMPORTED_MODULE_6__["SelectLocationPage"]]
        })
    ], SelectLocationPageModule);
    return SelectLocationPageModule;
}());



/***/ }),

/***/ "./src/app/modal/select-location/select-location.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal/select-location/select-location.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnVsdmluYXlhay9EZXNrdG9wL1Byb2plY3RzL0lvbmljL2Jvb2tfc2hvcF9hbmd1bGFyL3NyYy9hcHAvbW9kYWwvc2VsZWN0LWxvY2F0aW9uL3NlbGVjdC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsL3NlbGVjdC1sb2NhdGlvbi9zZWxlY3QtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvc2VsZWN0LWxvY2F0aW9uL3NlbGVjdC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgIFxuICAgXG4gICNhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAgXG4gICNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuICAgXG4gIC5tYXAtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgXG4gICAgI21hcF9jZW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gICAgfVxuICB9IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal/select-location/select-location.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modal/select-location/select-location.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPage", function() { return SelectLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");











var SelectLocationPage = /** @class */ (function () {
    function SelectLocationPage(toastController, formBuilder, storage, router, location, toast, _location, http, modalCtrl, loadingService) {
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this._location = _location;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
    }
    SelectLocationPage.prototype.ngOnInit = function () {
        this.loadMap();
        this.new_address = this.formBuilder.group({
            'house': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'landmark': ['']
        });
    };
    SelectLocationPage.prototype.loadMap = function () {
        var _this = this;
        this.location.getCurrentPostion().then(function (resp) {
            // this.geolocation.getCurrentPosition().then((resp) => {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map);
                _this.location.getLocationByCoordinates(_this.map.center.lat(), _this.map.center.lng()).then(function (res) {
                    console.log(res);
                    _this.address = res;
                });
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    SelectLocationPage.prototype.addAddress = function () {
        var _this = this;
        console.log(this.new_address.value);
        this.storage.set('default_address', {
            lat: this.lat,
            lng: this.lng
        }).then(function (address) {
            console.log(address);
            _this.storage.get('user').then(function (user) {
                var body = JSON.stringify({
                    latitude: _this.lat,
                    longitude: _this.lng,
                    address: _this.address,
                    flat: _this.new_address.value.house,
                    landmark: _this.new_address.value.landmark,
                    customer_id: user.id
                });
                console.log(body);
                _this.loadingService.create();
                _this.http.call('post', 'api/address/update', body)
                    .then(function (data) {
                    _this.loadingService.dismiss();
                    console.log(data);
                    if (data.error == false) {
                        // this.router.navigate(['/home'], {replaceUrl: true});
                        _this.toast.show('Address Succesfully Added');
                        _this.modalCtrl.dismiss();
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    SelectLocationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
        { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectLocationPage.prototype, "mapElement", void 0);
    SelectLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-location',
            template: __webpack_require__(/*! raw-loader!./select-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/modal/select-location/select-location.page.html"),
            styles: [__webpack_require__(/*! ./select-location.page.scss */ "./src/app/modal/select-location/select-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]])
    ], SelectLocationPage);
    return SelectLocationPage;
}());



/***/ }),

/***/ "./src/app/services/toast/toast.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.show = function (message, header, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        header: header ? header : null,
                                        message: message,
                                        position: position ? position : 'bottom',
                                        duration: 2000,
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ToastService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=default~modal-select-location-select-location-module~pages-order-confirmation-order-confirmation-mod~f7ac6d9d-es5.js.map