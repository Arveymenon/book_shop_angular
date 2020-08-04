(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Welcome To Schooby\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-padding\">\n<div class=\"filter_panel\" *ngIf=\"showFilters == true && filters\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Select Boards</ion-label>\n          <ion-select interface=\"popover\" [formControl]=\"board\">\n            <ion-select-option value=\"{{ board.id }}\" *ngFor=\"let board of filters.boards\">{{ board.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Select Standard</ion-label>\n          <ion-select interface=\"popover\" [formControl]=\"standard\">\n              <ion-select-option value=\"{{ standard }}\" *ngFor=\"let standard of filters.standards\">{{ standard }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n              <ion-label position=\"floating\">Select Subject</ion-label>\n              <ion-select interface=\"popover\" [formControl]=\"subject\">\n                <ion-select-option value=\"{{ subject }}\" *ngFor=\"let subject of filters.subjects\">{{ subject }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n            \n        <ion-col size=\"6\">\n          <ion-item>\n            <p class=\"refurbished_text\">Refurbished Only</p>\n            <!-- <ion-label></ion-label> -->\n            <ion-checkbox slot=\"end\" class=\"refurbished_checkbox\" [formControl]=\"refurbished\" (click)=\"refurbishedOnly()\"></ion-checkbox>\n          </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" (click)=\"resetFilter()\">Reset Filter</ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p *ngIf=\"showFilters == true\" style=\"opacity: 0.7;\" (click)='toggleFilter()' class='ion-text-center'>Hide Filter <ion-icon name=\"arrow-dropup\"></ion-icon></p>\n  </div>\n  <div *ngIf=\"showFilters == false\" style=\"position: relative; top: 10px;\">\n    <h4 class=\"books_heading\">Offers</h4>\n    <div class=\"card-section section-card\">\n      <ion-card class=\"moving-card\">\n        <img src=\"assets/images/offer.jpg\">\n      </ion-card>\n      <ion-card class=\"moving-card\">\n        <img src=\"assets/images/logo.png\">\n      </ion-card>\n      <ion-card class=\"moving-card\">\n        <img src=\"assets/images/offer.jpg\">\n      </ion-card>\n      <ion-card class=\"moving-card\">\n        <img src=\"assets/images/offer.jpg\">\n      </ion-card>\n    </div>\n  </div>\n  <div>\n    <h4 class=\"books_heading\">Books\n      <ion-icon name=\"funnel\" (click)='toggleFilter()' class=\"filter_icon\"></ion-icon>\n    </h4>\n    <ion-card class=\"book_card\" *ngFor='let book of cartService.books; let itt = index'>\n      <ion-grid>\n        <ion-row>\n          <ion-col size='3'>\n              <img src='https://elasticbeanstalk-us-east-2-743144358023.s3.us-east-2.amazonaws.com/{{book.image}}'>\n            </ion-col>\n          <ion-col size='5'>\n              <b>{{ book.name }}</b><br>\n              Board: {{ book.board.name }}<br>\n              Price: {{ book.refurbished == true ? mathLib.round(book.mrp_in_rupees * 0.8) : book.mrp_in_rupees  }} &#8377;\n            </ion-col>\n          <ion-col size='4'>\n            <!-- Refurbished Book Slot -->\n              <div *ngIf=\"book.refurbished_available\"> \n                <ion-checkbox slot=\"end\" class=\"books_refurbished_checkbox\" (click)=\"refurbishedToggle(itt)\" [(ngModel)]=\"book.refurbished\"></ion-checkbox>\n                <p class=\"no-margin refurbished_flag\">Refurbished</p>\n              </div>\n            <!-- Add to cart System -->\n              <div>\n                  <div class='controls' *ngIf=\"!book.quantity_in_cart || book.quantity_in_cart == 0\" (click)=\"cartService.addProduct(book,1)\">\n                    <p onclick=\"this.style='box-shadow: none'\" class=\"add_to_cart_button\">Add To Cart</p>\n                  </div>\n                  <div class=\"controls full_controls\" *ngIf=\"book.quantity_in_cart\">\n                    <div class=\"plus_minus_button\" (click)=\"cartService.addProduct(book,1)\">+</div>\n                    <div class=\"product_in_cart\">{{ book.quantity_in_cart }}</div>\n                    <div class=\"plus_minus_button\" (click)=\"cartService.removeProduct(book)\">-</div>\n                  </div>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n    \n  </ion-content>\n  <ion-footer *ngIf=\"cartService.total != 0\">\n        <div class=\"footer\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"6\" class=\"total\">\n                      Order Total: {{ cartService.total }} &#8377;\n                      </ion-col>\n                    <ion-col size=\"6\">\n                      <div class=\"controls\" (click)=\"cart()\">\n                          <p onclick=\"this.style='box-shadow: none'\" class=\"order_details\">View Cart</p>\n                        </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </div>\n    </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.filter_panel {\n  position: relative;\n  width: 100%;\n  z-index: 99999;\n  top: -30px;\n  padding-top: 30px;\n  border-radius: 20px;\n  box-shadow: 1px 1px 5px 5px #969696;\n  background-color: #fff;\n}\n\n.filter_icon {\n  float: right;\n  margin-right: 15px;\n}\n\n.refurbished_text {\n  font-size: 0.8em;\n  width: 100%;\n  text-align: right;\n}\n\n.books_heading {\n  margin-top: 0px;\n  margin-left: 16px;\n  position: relative;\n  color: #3e3e3e;\n}\n\n.book_card {\n  border-radius: 10px;\n}\n\n.book_card .refurbished_flag {\n  float: right;\n  padding-right: 5px;\n}\n\n.book_card .books_refurbished_checkbox {\n  float: right;\n}\n\n.book_card .controls {\n  width: 100%;\n  text-align: center;\n  float: right;\n}\n\n.book_card .full_controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  margin-top: 10px;\n}\n\n.book_card .add_to_cart_button {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  color: var(--ion-color-primary-contrast);\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n\n.book_card .product_in_cart {\n  width: 33%;\n  margin: auto;\n  font-size: 1.6em;\n}\n\n.book_card .plus_minus_button {\n  width: 33%;\n  padding: 2px;\n  color: var(--ion-color-primary-contrast);\n  font-weight: 700;\n  font-size: 1.9em;\n  background: var(--ion-color-primary);\n}\n\n.footer .total {\n  text-align: center;\n  font-size: 1.2em;\n  margin: auto;\n}\n\n.footer .controls {\n  text-align: center;\n}\n\n.footer .controls .order_details {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  padding: 10px;\n  font-weight: 900;\n  box-shadow: 0px 1px 6px 0px #7b7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYm9va19zaG9wMi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FESUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7QUNISjs7QURNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsOEJBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUU7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNOSjs7QURVRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUNWSjs7QURlRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWko7O0FEZ0JFO0VBQ0Usa0JBQUE7QUNkSjs7QURlSTtFQUNFLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ2JOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpbHRlcl9wYW5lbHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OTk7XG5cbiAgdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDVweCByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZmlsdGVyX2ljb257XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmVmdXJiaXNoZWRfY2hlY2tib3h7XG4gIC8vIG1hcmdpbjogNXB4O1xufVxuLnJlZnVyYmlzaGVkX3RleHR7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJvb2tzX2hlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzZTNlM2U7XG59XG5cbi5ib29rX2NhcmR7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxuICAucmVmdXJiaXNoZWRfZmxhZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIFxuICAuYm9va3NfcmVmdXJiaXNoZWRfY2hlY2tib3h7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAuY29udHJvbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgLmZ1bGxfY29udHJvbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLmFkZF90b19jYXJ0X2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuXG4gIC5wcm9kdWN0X2luX2NhcnR7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgfVxuXG4gIC5wbHVzX21pbnVzX2J1dHRvbntcbiAgICB3aWR0aDogMzMlO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uZm9vdGVye1xuICAudG90YWx7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gIH1cblxuICAuY29udHJvbHN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5vcmRlcl9kZXRhaWxze1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4ICM3YjdiN2I7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cbiAgfVxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpbHRlcl9wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0b3A6IC0zMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggNXB4ICM5Njk2OTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5maWx0ZXJfaWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmVmdXJiaXNoZWRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJvb2tzX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjM2UzZTNlO1xufVxuXG4uYm9va19jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ib29rX2NhcmQgLnJlZnVyYmlzaGVkX2ZsYWcge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5ib29rX2NhcmQgLmJvb2tzX3JlZnVyYmlzaGVkX2NoZWNrYm94IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJvb2tfY2FyZCAuY29udHJvbHMge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYm9va19jYXJkIC5mdWxsX2NvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tfY2FyZCAuYWRkX3RvX2NhcnRfYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggIzdiN2I3Yjtcbn1cbi5ib29rX2NhcmQgLnByb2R1Y3RfaW5fY2FydCB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cbi5ib29rX2NhcmQgLnBsdXNfbWludXNfYnV0dG9uIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5mb290ZXIgLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9vdGVyIC5jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLmNvbnRyb2xzIC5vcmRlcl9kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggIzdiN2I3Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let HomePage = class HomePage {
    constructor(router, locationService, storage, loading, http, cartService) {
        this.router = router;
        this.locationService = locationService;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.cartService = cartService;
        this.selectedFilters = {
            subject: null,
            board: null,
            standard: null,
            refurbished: null,
        };
        this.showFilters = true;
        this.mathLib = Math;
        this.subject = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.board = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.standard = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.refurbished = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        // this.address = "Sani Park, A/301, Ramesh Nagar Amboli, Jaibhavani Mata RD"
        this.storage.remove('cart');
        this.loading.create();
        this.storage.get('default_address').then((address) => {
            console.log(address);
            if (address || address != null) {
                console.log('address found');
                this.locationService.getLocationByCoordinates(address.lat, address.lng).then((res) => {
                    console.log(res);
                    this.loading.dismiss();
                    this.address = res;
                });
            }
            else {
                console.log('no_address');
                this.locationService.getLocation().then((res) => {
                    console.log(res);
                    this.address = res;
                    this.loading.dismiss();
                });
            }
        });
        console.log(Math.random());
        this.storage.get('selectedFilters').then(selectedFilters => {
            console.log(selectedFilters);
            if (selectedFilters) {
                selectedFilters.subject || selectedFilters.board || selectedFilters.standard || selectedFilters.refurbished ?
                    this.showFilters = false : this.showFilters = true;
                this.selectedFilters = selectedFilters;
                this.getBooks();
                this.subject.setValue(selectedFilters.board);
                this.standard.setValue(selectedFilters.standard);
                this.board.setValue(selectedFilters.board);
                this.refurbished.setValue(selectedFilters.refurbished);
            }
            this.http.call('get', 'api/books/filter/options').then((res) => {
                console.log(res);
                this.filters = res.response;
                this.subject.valueChanges.subscribe((subject) => { this.selectedFilters.subject = subject; this.getBooks(); });
                this.standard.valueChanges.subscribe((standard) => { this.selectedFilters.standard = standard; this.getBooks(); });
                this.board.valueChanges.subscribe((board) => { this.selectedFilters.board = board; this.getBooks(); });
                this.refurbished.valueChanges.subscribe((refurbished) => {
                    this.selectedFilters.refurbished = refurbished;
                    this.getBooks();
                });
                console.log(this.selectedFilters);
            });
        });
    }
    toggleFilter() {
        console.log(this.showFilters);
        this.showFilters === true ? this.showFilters = false : this.showFilters = true;
    }
    resetFilter() {
        this.selectedFilters = {
            subject: null,
            board: null,
            standard: null,
            refurbished: null,
        };
        this.storage.remove('selectedFilters');
        this.subject.reset();
        this.board.reset();
        this.standard.reset();
        this.refurbished.reset();
        this.getBooks();
    }
    getBooks() {
        console.log(this.selectedFilters);
        this.storage.set('selectedFilters', this.selectedFilters);
        this.cartService.getBooks(this.selectedFilters).then((res) => {
            console.log(res);
            console.log(this.cartService.books);
            this.cartService.calculate();
        });
    }
    cart() {
        this.router.navigate(['cart']);
    }
    setLocation() {
        this.router.navigate(['select-location']);
    }
    refurbishedToggle(itt) {
        console.log(itt);
        this.cartService.refurbishedToggle(this.cartService.books[itt].id).then((res) => {
            console.log(res);
            let cartItt = this.cartService.cart.findIndex(o => o.id == this.cartService.books[itt].id);
            if (cartItt > -1) {
                this.cartService.cart[cartItt].refurbished = this.cartService.cart[cartItt].refurbished == true ? false : true;
                this.cartService.calculate();
            }
        });
    }
    refurbishedOnly() {
        this.getBooks();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_location_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map