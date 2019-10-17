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

module.exports = "<mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n  <mat-toolbar-row>\n    <button mat-button class=\"toolbar__icon-button mat-button\">\n      <mat-icon>web</mat-icon>\n      <span style=\"margin-left: 5px !important\">NodeQuiz</span>\n    </button>\n    <button mat-button class=\"mat-button\" (click)=\"goToDashboard()\">\n      Dashboard\n    </button>\n    <button mat-button class=\"mat-button\">\n      About\n    </button>\n    <button mat-button class=\"mat-button\">\n      Contact Us\n    </button>\n    <button (click)=\"logout()\" mat-button class=\"mat-button\">\n      Logout\n    </button>\n\n    <div fxFlex></div>\n\n    <!-- User Profile -->\n    <!-- <button class=\"toolbar__icon-button\" [matMenuTriggerFor]=\"menu\" mat-icon-button>\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>\n        <mat-icon>perm_contact_calendar</mat-icon>\n        <span>My Profile</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>settings</mat-icon>\n        <span>Settings</span>\n      </button>\n      <button (click)=\"logout()\" mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>Logout</span>\n      </button>\n    </mat-menu> -->\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<!-- <mat-sidenav-container class=\"all-wrap\">\n  <mat-sidenav>\n    <mat-list>\n      <mat-list-item>List Item 1</mat-list-item>\n      <mat-list-item>List Item 1</mat-list-item>\n      <mat-list-item>List Item 1</mat-list-item>\n      <mat-list-item>List Item 1</mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n</mat-sidenav-container> -->\n  <!-- <mat-sidenav-content class=\"page-wrap\">\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <span>\n          <mat-icon>\n            menu\n          </mat-icon>\n        </span>\n        <span><h1>Toolbar</h1></span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <main class=\"content\"> -->\n      <div><router-outlet></router-outlet></div>\n    <!-- </main> -->\n    <!-- <footer> -->\n      <mat-toolbar color=\"primary\">\n          <small><p>Powered by MongoDB, Express, Angular, and Node.js<br/>© 2019 Copyright:\n            Tarvin Labs</p></small>\n      </mat-toolbar>\n\n    <!-- </footer> -->\n  <!-- </mat-sidenav-content> -->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cumulative-summary/cumulative-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cumulative-summary works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mainCardColor\">\n  <mat-card-title>NodeQuiz Learning Portal</mat-card-title>\n  <mat-card-subtitle>Please select one of the following presentation/quiz sets</mat-card-subtitle>\n  <mat-card-content>\n\n    <mat-card class=\"cardWidth\">\n      <button mat-button (click)=\"goToPresentation('rest-and-the-web')\">\n        <div class=\"align\"><h2>REST and the Web</h2> <img src=\"../../../assets/presentations/rest-and-the-web/Slide1.jpeg\" alt=\"rest and the web\" width=\"150px\"></div>\n      </button>\n    </mat-card>\n\n    <mat-card class=\"cardWidth\">\n      <button mat-button (click)=\"goToPresentation('technology-value-stream')\">\n        <div class=\"align\"><h2>Technology Value Stream</h2> <img src=\"../../../assets/presentations/technology-value-stream/Slide1.jpeg\" alt=\"technology value stream\" width=\"150px\"></div>\n      </button>\n    </mat-card>\n    <mat-card class=\"cardWidth\">\n      <button mat-button (click)=\"goToPresentation('UI-Designer-and-Waterfall')\">\n        <div class=\"align\"><h2>The UI Designer and Waterfall</h2> <img src=\"../../../assets/presentations/UI-Designer-and-Waterfall/Slide1.jpeg\" alt=\"the UI designer and waterfall\" width=\"150px\"></div>\n      </button>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-card class=\"login-card\" fxFlex>\n    <mat-card-title class=\"title\">Welcome to the<br/>NodeQuiz Learning Portal</mat-card-title><br/>\n    <mat-card-subtitle>Please login with your employee ID to proceed</mat-card-subtitle>\n    <mat-card-content>\n      <small *ngIf=\"errorMessage\">{{ errorMessage }}<br/></small>\n\n      <!-- <mat-card fxLayout=\"column\" class=\"id-card\" fxLayoutGap=\"10px\"> -->\n        <form [formGroup]=\"form\" (ngSubmit)=\"login(); form.reset()\" #LoginForm=\"ngForm\">\n          <mat-card-content>\n            <mat-form-field>\n              <input type=\"text\" matInput [formControl]=\"form.controls['employeeId']\" fxFlex placeholder=\"Employee ID\">\n            </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"submit\" class=\"submitButton\" fxFlex mat-raised-button>Submit</button>\n          </mat-card-actions>\n        </form>\n      <!-- </mat-card> -->\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>Mirror, Mirror on the floor,\n    Why didst thou give me 404?</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" *ngIf=\"images\">\n  <mat-card class=\"mainCardColor\">\n    <mat-card-title>{{ presentationName }}</mat-card-title>\n    <mat-card-content>\n      <p-carousel [value]=\"images\" numVisible=\"1\">\n        <ng-template let-item pTemplate=\"item\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div fxFlex>\n              <img src=\"./assets/presentations/{{ presentationName }}/{{ item.name }}.jpeg\" alt=\"\">\n            </div>\n          </div>\n        </ng-template>\n      </p-carousel>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button type=\"submit\" (click)=\"goToQuiz(presentationName)\">Take Quiz</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-results/quiz-results.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>quiz-results works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%; margin-top: 2%; margin-left: 20%;\" fxLayout=\"column\">\n  <mat-card class=\"mat-elevation-z8\">\n    <mat-card-title style=\"text-align: center; font-weight: lighter;\" class=\"mat-headline\">\n      {{ quizName }}\n    </mat-card-title>\n      <div *ngIf=\"isShown == true\">\n        <h1>Results</h1>\n        <p *ngIf=\"quizResults\">{{ displayResults }}</p>\n      </div>\n    <br>\n    <!-- root mat card content -->\n    <mat-card-content *ngIf=\"questions\">\n      <!-- flex-layout column -->\n      <div fxLayout=\"column\">\n\n        <!-- Quiz form -->\n        <form #quizForm=\"ngForm\" *ngIf=\"isShown == false\" (ngSubmit)=\"onSubmit(quizForm.value); quizForm.reset();\">\n          <div *ngFor=\"let question of questions\">\n            <mat-card class=\"mat-elevation-z8\">\n              <mat-card-content>\n\n                <div fxLayout=\"column\">\n                  <!-- questions -->\n                  <mat-list>\n                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                      <p>Question: </p>\n                      <p>{{ question.questionText }}</p>\n                    </div>\n                  </mat-list>\n                  <br>\n\n                  <!-- answers -->\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <label>Answers:</label>\n                    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                      <div *ngFor=\"let answer of question.answers\" style=\"flex-direction: column;\">\n                        <input [(ngModel)]=\"qs[question.questionNumber]\" [checked]=\"qs[question.questionNumber]\" value=\"{{question.questionNumer}};{{answer.answerText}};{{answer.isCorrect}}\" name=\"q{{question.questionNumber}}\" type=\"radio\" />\n                          {{answer.answerText}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </mat-card-content>\n            </mat-card>\n          </div>\n\n          <!-- mat card actions -->\n          <br>\n          <mat-card-actions>\n            <button type=\"submit\" fxFlex mat-raised-button color=\"warn\">Submit</button>\n          </mat-card-actions>\n        </form>\n        <!-- end form -->\n\n      </div>\n      <!-- end flex-layout column -->\n    </mat-card-content>\n    <!-- end root mat card content-->\n  </mat-card>\n  <!-- end root mat card -->\n\n  <br><br><br>\n  <div fxFlex fxLayoutAlign=\"end\" style=\"width: 50%; margin: 0 auto;\">\n    <button mat-button color=\"primary\" (click)=\"goBack()\">Return to Presentation</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <div class=\"frm-login\">\n    <mat-card class=\"login-panel frm-login-panel\">\n      <mat-card-header class=\"frm-login-header\">\n        <mat-toolbar class=\"frm-login-toolbar\">\n          Login Form\n        </mat-toolbar>\n      </mat-card-header>\n\n      <mat-card-content class=\"frm-login-body\">\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Username\">\n        </mat-form-field>\n\n      </mat-card-content>\n\n      <mat-card-actions class=\"frm-login-actions\">\n        <button mat-raised-button class=\"btn-login button2\">Sign In</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Page header -->\n  <header></header>\n\n  <!-- Main page content -->\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
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





let AppComponent = class AppComponent {
    constructor(router, cookieService, authGuard) {
        this.router = router;
        this.cookieService = cookieService;
        this.authGuard = authGuard;
        this.title = 'Node Quiz';
        let test = this.cookieService.get("isAuthenticated");
        console.log(test);
        if (!test) {
            router.navigate(["/session/login"]);
        }
        else {
            router.navigate(['/dashboard']);
        }
    }
    logout() {
        console.log("clicked logout");
        this.cookieService.delete("isAuthenticated");
        this.router.navigate(['/session/login']);
    }
    goToDashboard() {
        this.router.navigate(['/dashboard/']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
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




































let AppModule = class AppModule {
};
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









const AppRoutes = [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  cumulative-summary.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


let CumulativeSummaryComponent = class CumulativeSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cumulative-summary',
        template: __webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html"),
        styles: [__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/pages/cumulative-summary/cumulative-summary.component.css")]
    })
], CumulativeSummaryComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.cardWidth {\n  width: 50%;\n  margin: auto;\n  background-color: #9ccc9c;\n}\n\n.align>h2,\n.align>img {\n  padding: 0 10px 0 10px;\n}\n\n@media only screen and (max-width: 700px) {\n  .cardWidth {\n    width: 80%;\n  }\n}\n\nmat-card-title {\n  text-align: center;\n  font-family: 'Righteous', cursive;\n}\n\nmat-card {\n  text-align: center;\n  border: 1px solid black;\n}\n\n.mainCardColor {\n  background-color: #649568;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZFdpZHRoIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNjYzljO1xufVxuXG4uYWxpZ24+aDIsXG4uYWxpZ24+aW1nIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY2FyZFdpZHRoIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG59XG5cbm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm1haW5DYXJkQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NTY4O1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/*
; ============================================
; Title:  dashboard.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToPresentation(presentationName) {
        this.presentationName = presentationName;
        console.log('The presentation name is ' + this.presentationName);
        this.router.navigate(['/dashboard/presentation/' + this.presentationName]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".id-card {\n  background-color: #649568;\n}\n\nmat-card-title {\n  text-align: center;\n  font-family: 'Righteous', cursive;\n}\n\n.login-card {\n  background-color: #9ccc9c;\n}\n\nmat-card {\n  text-align: center;\n}\n\n.submitButton {\n  background-color: #2b5329;\n  color: white;\n  width: 100px;\n}\n\nmat-card-actions {\n  width: 30%;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NTY4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2NjOWM7XG59XG5cbm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTMyOTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwcHg7XG59XG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/*
; ============================================
; Title:  login.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/






let LoginComponent = class LoginComponent {
    constructor(router, cookieService, fb, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    login() {
        const employeeId = this.form.controls['employeeId'].value;
        console.log(employeeId);
        this.http.get('/api/users/' + employeeId).subscribe(res => {
            if (res) {
                this.cookieService.set('isAuthenticated', 'true', 1);
                this.cookieService.set('employeeId', employeeId, 1);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.errorMessage = "The employee Id you entered is invalid, please try again.";
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip {\n    -webkit-transform: scale(1, -1);\n    transform: scale(1, -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksK0JBQStCO0lBRy9CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlwIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  not-found.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    background-color: #649568;\n}\n\ndiv.ui-widget-header {\n    background-color: #2b5329;\n}\n\n.mat-raised-button {\n    background-color: #2b5329;\n    color: white;\n    /* width: 30%; */\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTU2ODtcbn1cblxuZGl2LnVpLXdpZGdldC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjUzMjk7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTMyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogd2lkdGg6IDMwJTsgKi9cbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _presentation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentation.service */ "./src/app/pages/presentation/presentation.service.ts");
/*
; ============================================
; Title:  presentation.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/





let PresentationComponent = class PresentationComponent {
    constructor(route, http, presentationService, router) {
        this.route = route;
        this.http = http;
        this.presentationService = presentationService;
        this.router = router;
        this.presentationName = route.snapshot.paramMap.get('name');
        this.presentationService.getPresentations()
            .subscribe(res => {
            this.presentations = res;
            console.log(this.presentations);
            this.images = this.presentations.filter(p => p.name === this.presentationName)[0].images;
            console.log(this.images);
        });
    }
    goToQuiz(quizName) {
        this.quizName = quizName;
        console.log('The quiz name is ' + this.quizName);
        this.router.navigate(['/dashboard/quizzes/' + this.quizName]);
    }
    ngOnInit() {
    }
};
PresentationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _presentation_service__WEBPACK_IMPORTED_MODULE_4__["PresentationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-presentation',
        template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html"),
        styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/pages/presentation/presentation.component.css")]
    })
], PresentationComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  presentation.service.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



let PresentationService = class PresentationService {
    constructor(http) {
        this.http = http;
    }
    getPresentations() {
        return this.http.get('./assets/presentations.json');
    }
};
PresentationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PresentationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PresentationService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuizResultsComponent = class QuizResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuizResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-results',
        template: __webpack_require__(/*! raw-loader!./quiz-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-results/quiz-results.component.html"),
        styles: [__webpack_require__(/*! ./quiz-results.component.css */ "./src/app/pages/quiz-results/quiz-results.component.css")]
    })
], QuizResultsComponent);



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n}\n\n.answerBank {\n  width: 80%;\n}\n\n/*\ninput[type=\"radio\"] {\n  vertical-align: top;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmFuc3dlckJhbmsge1xuICB3aWR0aDogODAlO1xufVxuLypcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59ICovXG4iXX0= */"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.service */ "./src/app/pages/quiz/quiz.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/*
; ============================================
; Title:  quiz.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/







let QuizComponent = class QuizComponent {
    constructor(route, http, quizService, cookieService, location, router) {
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
            .subscribe(res => {
            this.quizzes = res;
            console.log('The quizzes are as follows:', this.quizzes);
            this.questions = this.quizzes.filter(q => q.name === this.quizName)[0].questions;
            // this.quiz = this.quizzes.filter(q => q.quizId === this.quizId)[0];
            console.log(this.questions);
        });
    }
    goToQuiz(quizName) {
        this.quizName = quizName;
        console.log('The quiz name is ' + this.quizName);
        this.router.navigate(['/dashboard/quizzes/' + this.quizName]);
    }
    returnToPresentation(quizName) {
        this.quizName = quizName;
        this.router.navigate(['/dashboard/presentation/' + this.quizName]);
    }
    goBack() {
        this.location.back();
    }
    show() {
        this.isShown = !this.isShown;
    }
    onSubmit(form) {
        //   this.quizResults = form;
        //   this.displayResults = JSON.stringify(this.quizResults);
        //   this.show();
        // }
        /**
         * Variables for setting up our scoring calculation
         */
        const totalPossiblePoints = 100; // the total number of possible points a user can earn on a given test
        const questionCount = this.questions.length; // the total number of quiz questions
        let pointsPerQuestion = totalPossiblePoints / questionCount; // the total number of poiints per question
        let quizScore = 0; // variable to hold the quiz score
        /**
         * Variables for determining the user's selection
         */
        let correctRunningTotal = 0; // variable to hold the running total of correct answers
        let selectedAnswerIds = [];
        let selectedIsCorrectProp = [];
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
        }).subscribe(res => {
        }, err => {
        }, () => {
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
    }
    ngOnInit() {
    }
};
QuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
        styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
    })
], QuizComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  quiz.service.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/



let QuizService = class QuizService {
    constructor(http) {
        this.http = http;
    }
    getQuizzes() {
        console.log('Running getQuizzes from Service');
        return this.http.get('/api/quizzes');
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], QuizService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  auth-layout.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
        styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
    })
], AuthLayoutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
; ============================================
; Title:  base-layout.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/


let BaseLayoutComponent = class BaseLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-layout',
        template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
        styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
    })
], BaseLayoutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/*
; ============================================
; Title:  auth.guard.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/




let AuthGuard = class AuthGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AuthLayoutComponent, DashboardComponent, LoginComponent, CumulativeSummaryComponent, NotFoundComponent, BaseLayoutComponent */
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidtarvin/tarvin-nodequiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map