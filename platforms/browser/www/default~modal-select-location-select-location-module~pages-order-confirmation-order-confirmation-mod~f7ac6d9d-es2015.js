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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-location.page */ "./src/app/modal/select-location/select-location.page.ts");




const routes = [
    {
        path: '',
        component: _select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"]
    }
];
let SelectLocationPageRoutingModule = class SelectLocationPageRoutingModule {
};
SelectLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectLocationPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-location-routing.module */ "./src/app/modal/select-location/select-location-routing.module.ts");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-location.page */ "./src/app/modal/select-location/select-location.page.ts");







let SelectLocationPageModule = class SelectLocationPageModule {
};
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



/***/ }),

/***/ "./src/app/modal/select-location/select-location.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal/select-location/select-location.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYm9va19zaG9wMi9zcmMvYXBwL21vZGFsL3NlbGVjdC1sb2NhdGlvbi9zZWxlY3QtbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC9zZWxlY3QtbG9jYXRpb24vc2VsZWN0LWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL3NlbGVjdC1sb2NhdGlvbi9zZWxlY3QtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gICBcbiAgIFxuICAjYWRkcmVzcyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgIFxuICAjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbiAgIFxuICAubWFwLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICAgICNtYXBfY2VudGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICAgIH1cbiAgfSIsIiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuLm1hcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hcC13cmFwcGVyICNtYXBfY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICBtYXJnaW4tdG9wOiAtNDFweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");











let SelectLocationPage = class SelectLocationPage {
    constructor(toastController, formBuilder, storage, router, location, toast, _location, http, modalCtrl, loadingService) {
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
    ngOnInit() {
        this.loadMap();
        this.new_address = this.formBuilder.group({
            'house': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'landmark': ['']
        });
    }
    loadMap() {
        this.location.getCurrentPostion().then((resp) => {
            // this.geolocation.getCurrentPosition().then((resp) => {
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('tilesloaded', () => {
                console.log('accuracy', this.map);
                this.location.getLocationByCoordinates(this.map.center.lat(), this.map.center.lng()).then((res) => {
                    console.log(res);
                    this.address = res;
                });
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addAddress() {
        console.log(this.new_address.value);
        this.storage.set('default_address', {
            lat: this.lat,
            lng: this.lng
        }).then(address => {
            console.log(address);
            this.storage.get('user').then(user => {
                let body = JSON.stringify({
                    latitude: this.lat,
                    longitude: this.lng,
                    address: this.address,
                    flat: this.new_address.value.house,
                    landmark: this.new_address.value.landmark,
                    customer_id: user.id
                });
                console.log(body);
                this.loadingService.create();
                this.http.call('post', 'api/address/update', body)
                    .then((data) => {
                    this.loadingService.dismiss();
                    console.log(data);
                    if (data.error == false) {
                        // this.router.navigate(['/home'], {replaceUrl: true});
                        this.toast.show('Address Succesfully Added');
                        this.modalCtrl.dismiss();
                    }
                }, err => {
                    console.log(err);
                });
            });
        });
    }
};
SelectLocationPage.ctorParameters = () => [
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
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    show(message, header, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    header: header ? header : null,
                    message: message,
                    position: position ? position : 'bottom',
                    duration: 2000,
                });
                toast.present();
            }));
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ })

}]);
//# sourceMappingURL=default~modal-select-location-select-location-module~pages-order-confirmation-order-confirmation-mod~f7ac6d9d-es2015.js.map