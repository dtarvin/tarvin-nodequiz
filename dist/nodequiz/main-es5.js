(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-button class=\"toolbar__icon-button mat-button\">\r\n      <mat-icon>web</mat-icon>\r\n      <span style=\"margin-left: 5px !important\">NodeQuiz</span>\r\n    </button>\r\n    <button mat-button class=\"mat-button\" (click)=\"goToDashboard()\">\r\n      Dashboard\r\n    </button>\r\n    <button mat-button class=\"mat-button\">\r\n      About\r\n    </button>\r\n    <button mat-button class=\"mat-button\">\r\n      Contact Us\r\n    </button>\r\n    <button (click)=\"logout()\" mat-button class=\"mat-button\">\r\n      Logout\r\n    </button>\r\n\r\n    <div fxFlex></div>\r\n\r\n    <!-- User Profile -->\r\n    <!-- <button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\" mat-icon-button>\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item>\r\n        <mat-icon>perm_contact_calendar</mat-icon>\r\n        <span>My Profile</span>\r\n      </button>\r\n      <button mat-menu-item>\r\n        <mat-icon>settings</mat-icon>\r\n        <span>Settings</span>\r\n      </button>\r\n      <button (click)=\"logout()\" mat-menu-item>\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n    </mat-menu> -->\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<!-- <mat-sidenav-container class=\"all-wrap\">\r\n  <mat-sidenav>\r\n    <mat-list>\r\n      <mat-list-item>List Item 1</mat-list-item>\r\n      <mat-list-item>List Item 1</mat-list-item>\r\n      <mat-list-item>List Item 1</mat-list-item>\r\n      <mat-list-item>List Item 1</mat-list-item>\r\n    </mat-list>\r\n  </mat-sidenav>\r\n</mat-sidenav-container> -->\r\n  <!-- <mat-sidenav-content class=\"page-wrap\">\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <span>\r\n          <mat-icon>\r\n            menu\r\n          </mat-icon>\r\n        </span>\r\n        <span><h1>Toolbar</h1></span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <main class=\"content\"> -->\r\n      <div><router-outlet></router-outlet></div>\r\n    <!-- </main> -->\r\n    <!-- <footer> -->\r\n      <mat-toolbar color=\"primary\">\r\n          <small><p>Powered by MongoDB, Express, Angular, and Node.js<br/>© 2019 Copyright:\r\n            Tarvin Labs</p></small>\r\n      </mat-toolbar>\r\n\r\n    <!-- </footer> -->\r\n  <!-- </mat-sidenav-content> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cumulative-summary/cumulative-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cumulative-summary works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mainCardColor\">\r\n  <mat-card-title>NodeQuiz Learning Portal</mat-card-title>\r\n  <mat-card-subtitle>Please select one of the following presentation/quiz sets</mat-card-subtitle>\r\n  <mat-card-content>\r\n\r\n    <mat-card class=\"cardWidth\">\r\n      <button mat-button (click)=\"goToPresentation('rest-and-the-web')\">\r\n        <div class=\"align\"><h2>REST and the Web</h2> <img src=\"../../../assets/presentations/rest-and-the-web/Slide1.jpeg\" alt=\"rest and the web\" width=\"150px\"></div>\r\n      </button>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"cardWidth\">\r\n      <button mat-button (click)=\"goToPresentation('technology-value-stream')\">\r\n        <div class=\"align\"><h2>Technology Value Stream</h2> <img src=\"../../../assets/presentations/technology-value-stream/Slide1.jpeg\" alt=\"technology value stream\" width=\"150px\"></div>\r\n      </button>\r\n    </mat-card>\r\n    <mat-card class=\"cardWidth\">\r\n      <button mat-button (click)=\"goToPresentation('UI-Designer-and-Waterfall')\">\r\n        <div class=\"align\"><h2>The UI Designer and Waterfall</h2> <img src=\"../../../assets/presentations/UI-Designer-and-Waterfall/Slide1.jpeg\" alt=\"the UI designer and waterfall\" width=\"150px\"></div>\r\n      </button>\r\n    </mat-card>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <mat-card class=\"login-card\" fxFlex>\r\n    <mat-card-title class=\"title\">Welcome to the<br/>NodeQuiz Learning Portal</mat-card-title><br/>\r\n    <mat-card-subtitle>Please login with your employee ID to proceed</mat-card-subtitle>\r\n    <mat-card-content>\r\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}<br/></small>\r\n\r\n      <!-- <mat-card fxLayout=\"column\" class=\"id-card\" fxLayoutGap=\"10px\"> -->\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"login(); form.reset()\" #LoginForm=\"ngForm\">\r\n          <mat-card-content>\r\n            <mat-form-field>\r\n              <input type=\"text\" matInput [formControl]=\"form.controls['employeeId']\" fxFlex placeholder=\"Employee ID\">\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button type=\"submit\" class=\"submitButton\" fxFlex mat-raised-button>Submit</button>\r\n          </mat-card-actions>\r\n        </form>\r\n      <!-- </mat-card> -->\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>Mirror, Mirror on the floor,\r\n    Why didst thou give me 404?</mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" *ngIf=\"images\">\r\n  <mat-card class=\"mainCardColor\">\r\n    <mat-card-title>{{ presentationName }}</mat-card-title>\r\n    <mat-card-content>\r\n      <p-carousel [value]=\"images\" numVisible=\"1\">\r\n        <ng-template let-item pTemplate=\"item\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex>\r\n              <img src=\"./assets/presentations/{{ presentationName }}/{{ item.name }}.jpeg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </p-carousel>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button type=\"submit\" (click)=\"goToQuiz(presentationName)\">Take Quiz</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-results/quiz-results.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>quiz-results works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%; margin-top: 2%; margin-left: 20%;\" fxLayout=\"column\">\r\n  <mat-card class=\"mat-elevation-z8\">\r\n    <mat-card-title style=\"text-align: center; font-weight: lighter;\" class=\"mat-headline\">\r\n      {{ quizName }}\r\n    </mat-card-title>\r\n      <div *ngIf=\"isShown == true\">\r\n        <h1>Results</h1>\r\n        <p *ngIf=\"quizResults\">{{ displayResults }}</p>\r\n      </div>\r\n    <br>\r\n    <!-- root mat card content -->\r\n    <mat-card-content *ngIf=\"questions\">\r\n      <!-- flex-layout column -->\r\n      <div fxLayout=\"column\">\r\n\r\n        <!-- Quiz form -->\r\n        <form #quizForm=\"ngForm\" *ngIf=\"isShown == false\" (ngSubmit)=\"onSubmit(quizForm.value); quizForm.reset();\">\r\n          <div *ngFor=\"let question of questions\">\r\n            <mat-card class=\"mat-elevation-z8\">\r\n              <mat-card-content>\r\n\r\n                <div fxLayout=\"column\">\r\n                  <!-- questions -->\r\n                  <mat-list>\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                      <p>Question: </p>\r\n                      <p>{{ question.questionText }}</p>\r\n                    </div>\r\n                  </mat-list>\r\n                  <br>\r\n\r\n                  <!-- answers -->\r\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                    <label>Answers:</label>\r\n                    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                      <div *ngFor=\"let answer of question.answers\" style=\"flex-direction: column;\">\r\n                        <input [(ngModel)]=\"qs[question.questionNumber]\" [checked]=\"qs[question.questionNumber]\" value=\"{{question.questionNumer}};{{answer.answerText}};{{answer.isCorrect}}\" name=\"q{{question.questionNumber}}\" type=\"radio\" />\r\n                          {{answer.answerText}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <!-- mat card actions -->\r\n          <br>\r\n          <mat-card-actions>\r\n            <button type=\"submit\" fxFlex mat-raised-button color=\"warn\">Submit</button>\r\n          </mat-card-actions>\r\n        </form>\r\n        <!-- end form -->\r\n\r\n      </div>\r\n      <!-- end flex-layout column -->\r\n    </mat-card-content>\r\n    <!-- end root mat card content-->\r\n  </mat-card>\r\n  <!-- end root mat card -->\r\n\r\n  <br><br><br>\r\n  <div fxFlex fxLayoutAlign=\"end\" style=\"width: 50%; margin: 0 auto;\">\r\n    <button mat-button color=\"primary\" (click)=\"goBack()\">Return to Presentation</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\r\n  <div class=\"frm-login\">\r\n    <mat-card class=\"login-panel frm-login-panel\">\r\n      <mat-card-header class=\"frm-login-header\">\r\n        <mat-toolbar class=\"frm-login-toolbar\">\r\n          Login Form\r\n        </mat-toolbar>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content class=\"frm-login-body\">\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Username\">\r\n        </mat-form-field>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions class=\"frm-login-actions\">\r\n        <button mat-raised-button class=\"btn-login button2\">Sign In</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- Page header -->\r\n  <header></header>\r\n\r\n  <!-- Main page content -->\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/





var AppComponent = /** @class */ (function () {
    function AppComponent(router, cookieService, authGuard) {
        this.router = router;
        this.cookieService = cookieService;
        this.authGuard = authGuard;
        this.title = 'Node Quiz';
        var test = this.cookieService.get("isAuthenticated");
        console.log(test);
        if (!test) {
            router.navigate(["/session/login"]);
        }
        else {
            router.navigate(['/dashboard']);
        }
    }
    AppComponent.prototype.logout = function () {
        console.log("clicked logout");
        this.cookieService.delete("isAuthenticated");
        this.router.navigate(['/session/login']);
    };
    AppComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard/']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_presentation_presentation_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/presentation/presentation.service */ "./src/app/pages/presentation/presentation.service.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/quiz/quiz.service */ "./src/app/pages/quiz/quiz.service.ts");
/* harmony import */ var _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/quiz-results/quiz-results.component */ "./src/app/pages/quiz-results/quiz-results.component.ts");
/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_10__["BaseLayoutComponent"],
                _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_11__["CumulativeSummaryComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"],
                _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_31__["PresentationComponent"],
                _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_33__["QuizComponent"],
                _pages_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_35__["QuizResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: true, enableTracing: false }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_30__["CarouselModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] },
                _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"], _pages_presentation_presentation_service__WEBPACK_IMPORTED_MODULE_32__["PresentationService"], _pages_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_34__["QuizService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/*
; ============================================
; Title:  app.routing.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/









var AppRoutes = [
    {
        path: 'dashboard',
        component: _shared__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'cumulative-summary',
                component: _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__["CumulativeSummaryComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'presentation/:name',
                component: _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'quizzes/:name',
                component: _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/not-found'
    }
];


/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bXVsYXRpdmUtc3VtbWFyeS9jdW11bGF0aXZlLXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: CumulativeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return CumulativeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  cumulative-summary.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


var CumulativeSummaryComponent = /** @class */ (function () {
    function CumulativeSummaryComponent() {
    }
    CumulativeSummaryComponent.prototype.ngOnInit = function () {
    };
    CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cumulative-summary',
            template: __webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html"),
            styles: [__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/pages/cumulative-summary/cumulative-summary.component.css")]
        })
    ], CumulativeSummaryComponent);
    return CumulativeSummaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.cardWidth {\r\n  width: 50%;\r\n  margin: auto;\r\n  background-color: #9ccc9c;\r\n}\r\n\r\n.align>h2,\r\n.align>img {\r\n  padding: 0 10px 0 10px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .cardWidth {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n  font-family: 'Righteous', cursive;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  border: 1px solid black;\r\n}\r\n\r\n.mainCardColor {\r\n  background-color: #649568;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZFdpZHRoIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNjYzljO1xyXG59XHJcblxyXG4uYWxpZ24+aDIsXHJcbi5hbGlnbj5pbWcge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuY2FyZFdpZHRoIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm1haW5DYXJkQ29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1Njg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
; ============================================
; Title:  dashboard.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.goToPresentation = function (presentationName) {
        this.presentationName = presentationName;
        console.log('The presentation name is ' + this.presentationName);
        this.router.navigate(['/dashboard/presentation/' + this.presentationName]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".id-card {\r\n  background-color: #649568;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n  font-family: 'Righteous', cursive;\r\n}\r\n\r\n.login-card {\r\n  background-color: #9ccc9c;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n}\r\n\r\n.submitButton {\r\n  background-color: #2b5329;\r\n  color: white;\r\n  width: 100px;\r\n}\r\n\r\nmat-card-actions {\r\n  width: 30%;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1Njg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljY2M5YztcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTMyOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
; ============================================
; Title:  login.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, cookieService, fb, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var employeeId = this.form.controls['employeeId'].value;
        console.log(employeeId);
        this.http.get('/api/users/' + employeeId).subscribe(function (res) {
            if (res) {
                _this.cookieService.set('isAuthenticated', 'true', 1);
                _this.cookieService.set('employeeId', employeeId, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.errorMessage = "The employee Id you entered is invalid, please try again.";
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip {\r\n    -webkit-transform: scale(1, -1);\r\n    transform: scale(1, -1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksK0JBQStCO0lBRy9CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlwIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  not-found.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    background-color: #649568;\r\n}\r\n\r\ndiv.ui-widget-header {\r\n    background-color: #2b5329;\r\n}\r\n\r\n.mat-raised-button {\r\n    background-color: #2b5329;\r\n    color: white;\r\n    /* width: 30%; */\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NTY4O1xyXG59XHJcblxyXG5kaXYudWktd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1MzI5O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTMyOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIHdpZHRoOiAzMCU7ICovXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _presentation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentation.service */ "./src/app/pages/presentation/presentation.service.ts");
/*
; ============================================
; Title:  presentation.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/





var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(route, http, presentationService, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.presentationService = presentationService;
        this.router = router;
        this.presentationName = route.snapshot.paramMap.get('name');
        this.presentationService.getPresentations()
            .subscribe(function (res) {
            _this.presentations = res;
            console.log(_this.presentations);
            _this.images = _this.presentations.filter(function (p) { return p.name === _this.presentationName; })[0].images;
            console.log(_this.images);
        });
    }
    PresentationComponent.prototype.goToQuiz = function (quizName) {
        this.quizName = quizName;
        console.log('The quiz name is ' + this.quizName);
        this.router.navigate(['/dashboard/quizzes/' + this.quizName]);
    };
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _presentation_service__WEBPACK_IMPORTED_MODULE_4__["PresentationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/pages/presentation/presentation.component.css")]
        })
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.service.ts ***!
  \************************************************************/
/*! exports provided: PresentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationService", function() { return PresentationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  presentation.service.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



var PresentationService = /** @class */ (function () {
    function PresentationService(http) {
        this.http = http;
    }
    PresentationService.prototype.getPresentations = function () {
        return this.http.get('./assets/presentations.json');
    };
    PresentationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PresentationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], PresentationService);
    return PresentationService;
}());



/***/ }),

/***/ "./src/app/pages/quiz-results/quiz-results.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/quiz-results/quiz-results.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz-results/quiz-results.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/quiz-results/quiz-results.component.ts ***!
  \**************************************************************/
/*! exports provided: QuizResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultsComponent", function() { return QuizResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizResultsComponent = /** @class */ (function () {
    function QuizResultsComponent() {
    }
    QuizResultsComponent.prototype.ngOnInit = function () {
    };
    QuizResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-results',
            template: __webpack_require__(/*! raw-loader!./quiz-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html"),
            styles: [__webpack_require__(/*! ./quiz-results.component.css */ "./src/app/pages/quiz-results/quiz-results.component.css")]
        })
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.answerBank {\r\n  width: 80%;\r\n}\r\n\r\n/*\r\ninput[type=\"radio\"] {\r\n  vertical-align: top;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uYW5zd2VyQmFuayB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4vKlxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.service */ "./src/app/pages/quiz/quiz.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/*
; ============================================
; Title:  quiz.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/







var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, http, quizService, cookieService, location, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.quizService = quizService;
        this.cookieService = cookieService;
        this.location = location;
        this.router = router;
        this.q = [];
        this.qs = [];
        // question: any;
        this.isShown = false;
        this.quizName = route.snapshot.paramMap.get('name');
        this.employeeId = this.cookieService.get('employeeId');
        console.log('The quiz name is ', this.quizName);
        // this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'), 10);
        // this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);
        console.log('Running getQuizzes from component');
        this.quizService.getQuizzes()
            .subscribe(function (res) {
            _this.quizzes = res;
            console.log('The quizzes are as follows:', _this.quizzes);
            _this.questions = _this.quizzes.filter(function (q) { return q.name === _this.quizName; })[0].questions;
            // this.quiz = this.quizzes.filter(q => q.quizId === this.quizId)[0];
            console.log(_this.questions);
        });
    }
    QuizComponent.prototype.goToQuiz = function (quizName) {
        this.quizName = quizName;
        console.log('The quiz name is ' + this.quizName);
        this.router.navigate(['/dashboard/quizzes/' + this.quizName]);
    };
    QuizComponent.prototype.returnToPresentation = function (quizName) {
        this.quizName = quizName;
        this.router.navigate(['/dashboard/presentation/' + this.quizName]);
    };
    QuizComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuizComponent.prototype.show = function () {
        this.isShown = !this.isShown;
    };
    QuizComponent.prototype.onSubmit = function (form) {
        //   this.quizResults = form;
        //   this.displayResults = JSON.stringify(this.quizResults);
        //   this.show();
        // }
        /**
         * Variables for setting up our scoring calculation
         */
        var totalPossiblePoints = 100; // the total number of possible points a user can earn on a given test
        var questionCount = this.quiz.questions.length; // the total number of quiz questions
        var pointsPerQuestion = totalPossiblePoints / questionCount; // the total number of poiints per question
        var quizScore = 0; // variable to hold the quiz score
        /**
         * Variables for determining the user's selection
         */
        var correctRunningTotal = 0; // variable to hold the running total of correct answers
        var selectedAnswerIds = [];
        var selectedIsCorrectProp = [];
        /**
         * Form data
         */
        this.quizResults = form;
        this.quizResults['employeeId'] = this.employeeId; // add the employeeId to the quizResults object
        this.quizResults['quizName'] = this.quizName; // add the quizName to the quizResults object
        /**
         * 1. TODO: Save the quiz results to the database here...
         */
        this.http.post('/api/quizResults/' + this.quizName, {
            employeeId: this.employeeId,
            quizName: this.quizName,
            result: JSON.stringify(form)
        }).subscribe(function (res) {
        }, function (err) {
        }, function () {
        });
        /**
         * 2. Loop over the quizResults properties
         */
        // for (const prop in this.quizResults) {
        /**
         * We need to check if hasOwnProperty to avoid returning null values
         */
        // if (this.quizResults.hasOwnProperty(prop)) {
        /**
         * Once we are inside the object's properties we need to extract the properties not matching quizName and employeeId
    //      */
        //     if (prop !== 'employeeId' && prop !== 'quizName') {
        //       selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
        //       selectedIsCorrectProp.push(this.quizResults[prop].split(';')[1]);
        //     }
        //   }
        // }
        /**
         * 3. Determine the quiz score
         * With the properties extracted and pushed to our selectedAnswerIds and selectedIsCorrectProp arrays,
         * we need to get a running total of the entries matching 'true'
         */
        // for (let x = 0; x < selectedIsCorrectProp.length; x++) {
        //   if (selectedIsCorrectProp[x] === "true") {
        //     correctRunningTotal += 1;
        //   }
        // }
        // quizScore = correctRunningTotal * pointsPerQuestion;
        /**
         * 4. Create the QuizSummary object for the dialog
         */
        // let correctAnswers = [];
        // let selectedAnswers = [];
        /**
         * Loop over the quiz.questions to get the selected answer and correct answer for each question
        //  */
        // for (let question of this.questions) {
        //   for (let answer of question.answers) {
        //     if (answer.isCorrect) {
        //       correctAnswers.push({
        //         questionId: question._id,
        //         questionText: question.questionText,
        //         answerId: answer._id,
        //         text: answer.answerText
        //       });
        //     }
        //     if (selectedAnswerIds.includes(answer._id)) {
        //       console.log('Includes statement');
        //       console.log(`Answer: ${answer.answerText}`);
        //       selectedAnswers.push({
        //         questionId: question._id,
        //         questionText: question.questionText,
        //         answerId: answer._id,
        //         text: answer.answerText
        //       });
        //     }
        //   }
        // }
        // this.quizSummary['quizName'] = this.quizName;
        // this.quizSummary['quizId'] = this.quiz.quizId;
        // this.quizSummary['score'] = quizScore;
        // this.quizSummary['correctAnswers'] = correctAnswers;
        // this.quizSummary['selectedAnswers'] = selectedAnswers;
        /**
         * 6. TODO: Create the cumulative summary object and insert into the database
         */
        // this.cumulativeSummaryObject = {
        //   employeeId = this.employeeId,
        //   quizId = this.quizId,
        //   quizName = this.quizName,
        //   dateTaken: moment().format('MM/DD/YYYY'),
        //    score: (correctRunningTotal * pointsPerQuestion)
        // };
        // this.http.post('', body: {}).subscribe(res => {
        // }, err => {
        // }, () => {
        // })
        /**
         * 7. Open the dialog and pass the summary details to over
         */
        //   const dialogRef = this.dialog.open(QuizResultDialogComponent, {
        //     data: {
        //       quizSummary: this.quizSummary
        //     },
        //     disableClose: true,
        //     width: "800px"
        //   });
        //   dialogRef.afterClosed().subscribe(result => {
        //     if (result === "confirm") {
        //       this.router.navigate(['/']);
        //     }
        //   });
    };
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
        })
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/quiz/quiz.service.ts ***!
  \********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  quiz.service.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getQuizzes = function () {
        console.log('Running getQuizzes from Service');
        return this.http.get('/api/quizzes');
    };
    QuizService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  auth-layout.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
; ============================================
; Title:  base-layout.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/


var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent() {
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
        })
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/*
; ============================================
; Title:  auth.guard.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BaseLayoutComponent, AuthLayoutComponent, DashboardComponent, LoginComponent, CumulativeSummaryComponent, NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"]; });

/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]; });

/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]; });

/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__["CumulativeSummaryComponent"]; });

/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]; });

/*
; ============================================
; Title:  index.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/








/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
; ============================================
; Title:  environment.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
; ============================================
; Title:  main.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a161120\bu-webdev\tarvin-nodequiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map