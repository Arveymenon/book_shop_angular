(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-book-details-book-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/book-details/book-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/book-details/book-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>book_details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/book-details/book-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/book-details/book-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BookDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsPageRoutingModule", function() { return BookDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-details.page */ "./src/app/pages/book-details/book-details.page.ts");




var routes = [
    {
        path: '',
        component: _book_details_page__WEBPACK_IMPORTED_MODULE_3__["BookDetailsPage"]
    }
];
var BookDetailsPageRoutingModule = /** @class */ (function () {
    function BookDetailsPageRoutingModule() {
    }
    BookDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BookDetailsPageRoutingModule);
    return BookDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/book-details/book-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/book-details/book-details.module.ts ***!
  \***********************************************************/
/*! exports provided: BookDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsPageModule", function() { return BookDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _book_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-details-routing.module */ "./src/app/pages/book-details/book-details-routing.module.ts");
/* harmony import */ var _book_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-details.page */ "./src/app/pages/book-details/book-details.page.ts");







var BookDetailsPageModule = /** @class */ (function () {
    function BookDetailsPageModule() {
    }
    BookDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _book_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookDetailsPageRoutingModule"]
            ],
            declarations: [_book_details_page__WEBPACK_IMPORTED_MODULE_6__["BookDetailsPage"]]
        })
    ], BookDetailsPageModule);
    return BookDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/book-details/book-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/book-details/book-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/book-details/book-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/book-details/book-details.page.ts ***!
  \*********************************************************/
/*! exports provided: BookDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsPage", function() { return BookDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookDetailsPage = /** @class */ (function () {
    function BookDetailsPage() {
    }
    BookDetailsPage.prototype.ngOnInit = function () {
    };
    BookDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! raw-loader!./book-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/book-details/book-details.page.html"),
            styles: [__webpack_require__(/*! ./book-details.page.scss */ "./src/app/pages/book-details/book-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookDetailsPage);
    return BookDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-book-details-book-details-module-es5.js.map