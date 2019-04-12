(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class='data'>\n        <h3>Keys Manager</h3>\n        <blockquote>\n            This application is developed by <cite>sandeep yadav</cite> to remember all passwords.<br/>\n        </blockquote>\n        <h3>Made By</h3>\n        <blockquote>\n            <cite>Sandeep yadav and friends</cite><br/>\n            <cite>Phone no. - 7697947913</cite>\n        </blockquote>\n        <h3>Tools Required</h3>\n        <blockquote>\n            HTML, CSS, Bootstrap, JavaScript, NodeJs, Express Server,Mongoose(MongoDB),Angular\n        </blockquote>\n        <h3>Special Thanks</h3>\n        <blockquote>\n            <cite>Mr. Anoop Ingole Sir<br/>Phone no. - 7898579690\n            <br />\n            ISRDC jabalpur<br />\n            64, Sai Colony, Nr. Krishi Upaj Mandi,, Behind Pachori Petrol Pump, Karmeta, Jabalpur, Madhya Pradesh 482002</cite><br/>\n            <a href='https://isrdc.business.site'>&raquo; Know More &laquo; </a> \n        </blockquote>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _userpass_userpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userpass/userpass.component */ "./src/app/userpass/userpass.component.ts");
/* harmony import */ var _termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsandcondition/termsandcondition.component */ "./src/app/termsandcondition/termsandcondition.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");











var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'user',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    },
    {
        path: 'userpass',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _userpass_userpass_component__WEBPACK_IMPORTED_MODULE_5__["UserpassComponent"]
    },
    {
        path: 't&c',
        component: _termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_6__["TermsandconditionComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
    },
    {
        path: 'contactus',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'profile',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container-fluid mx-2 my-4\">\n  <div class=\"row container\">\n    <div class=\"offset-1 col-md-2\">\n      <h1 class='text-danger animated rubberBand infinite'>Keys<sub class=\"ml-4 text-info\"><cite>Manager</cite></sub></h1>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n  <div class=\"container-fluid fixed-bottom\">\n      <ul class=\"list-inline text-center lead\">\n          <li class='list-inline-item col-md-2'><a class='text-danger text-decoration-none' routerLink='t&c'>Terms and condition</a></li>\n          <li class='list-inline-item col-md-2'><a class='text-danger text-decoration-none' routerLink='about'>About</a></li>\n          <li class='list-inline-item col-md-2'><a class='text-danger text-decoration-none' routerLink='contactus'>Contact us</a></li>\n          <li class='list-inline-item col-md-2'><a class='text-danger text-decoration-none' routerLink='profile'>Profile</a></li>\n      </ul>\n  </div>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _userpass_userpass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userpass/userpass.component */ "./src/app/userpass/userpass.component.ts");
/* harmony import */ var _termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./termsandcondition/termsandcondition.component */ "./src/app/termsandcondition/termsandcondition.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _userpass_userpass_component__WEBPACK_IMPORTED_MODULE_11__["UserpassComponent"],
                _termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_12__["TermsandconditionComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-user.service */ "./src/app/login-user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._loginService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/home']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_user_service__WEBPACK_IMPORTED_MODULE_3__["LoginUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/changepass.service.ts":
/*!***************************************!*\
  !*** ./src/app/changepass.service.ts ***!
  \***************************************/
/*! exports provided: ChangepassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassService", function() { return ChangepassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChangepassService = /** @class */ (function () {
    function ChangepassService(_httpClient) {
        this._httpClient = _httpClient;
        this._url = 'http://localhost:3000/api/updatepassword';
    }
    ChangepassService.prototype.updatePass = function (data) {
        return this._httpClient.post(this._url, data);
    };
    ChangepassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChangepassService);
    return ChangepassService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class='sec'>\n      <h2>Via phone no:- </h2>\n      <blockquote>\n      <p>7697947913 - <cite>Idea</cite></p>\n      </blockquote>\n      <blockquote>\n      <p>7000073053 - <cite>R. Jio</cite></p>\n      </blockquote>\n  </div>\n  <div class='sec'>\n      <h2>Via E-mail :- </h2>\n      <blockquote>\n      <p>sandeep7697947913@gmail.com (gmail) -  <cite>E-mail</cite></p>\n      </blockquote>\n      <blockquote>\n      <p>sandeepyadav711.sy@gmail.com (gmail) - <cite>E-mail</cite></p>\n      </blockquote>\n  </div>\n  <div class='sec'>\n      <h2>Via Facebook :- </h2>\n      <blockquote>\n      <p><a href='https://www.facebook.com/quekewatzo0'>click here</a> - <cite>facebook</cite></p>\n      </blockquote>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row ml-4\">\n    <form #loginForm='ngForm' (ngSubmit)='loginFormSubmit(loginForm.value)' class='offset-4 animated flip form-inline'>\n      <div class=\"form-group mx-2\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-at\"></i></span>\n          </div>\n          <input type=\"text\" ngModel name='email' class=\"form-control\" required placeholder=\"E-mail\">\n        </div>\n      </div>\n      <div class=\"form-group mx-2\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n          </div>\n          <input class=\"form-control\" required ngModel name='password' type=\"password\" placeholder=\"Password\">\n        </div>\n      </div>\n      <input [disabled]='!loginForm.valid' type=\"submit\" class=\"btn btn-primary\" value=\"Log in\"/>\n    </form>\n  </div>\n  <div *ngIf=\"Invalidcredential\" class=\"row offset-4\">\n    <small class=\"ml-4 text-danger\">Either E-mail or Password is wrong</small>\n  </div>\n  <div class=\"row container my-4 animated flip \">\n      <img class=\"col-md-5 md-only img-responsive\" height=\"300\" src=\"../assets/lock.jpg\" >\n    <div class=\"col-md-7\">\n    <div class=\"card\">\n        <h3 class=\"card-header \">Registration Form</h3>\n      <div class=\"card-body\">\n        <form #regitrationForm=\"ngForm\" (ngSubmit)=\"registrationFormSubmit()\">\n          <div class=\"form-group\">\n            <label>E-mail</label>\n            <input class='form-control'\n            [class.is-invalid]='email.errors&&(email.invalid&&email.touched)'\n            [class.is-valid]='(email.valid&&email.touched)'\n            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n            required name=\"email\" #email='ngModel' [(ngModel)]=\"userModel.email\" type=\"E-mail\"/>\n            <div *ngIf=\"email.errors&&(email.touched&&email.invalid)\">\n              <small *ngIf='email.errors.required&&email.touched' class=\"text-danger\">E-mail is required</small>\n              <small *ngIf='email.errors.pattern&&email.invalid&&email.touched' class=\"text-danger\">Invalid E-mail address</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>User Name</label>\n            <input class='form-control' required name=\"name\" [(ngModel)]=\"userModel.name\"\n            [class.is-invalid]='name.errors&&(name.invalid&&name.touched)'\n            [class.is-valid]='(name.valid&&name.touched)'\n            #name='ngModel' pattern=\"^[a-zA-Z ]{3,30}$\" type=\"text\"/>\n            <div *ngIf=\"name.errors&&(name.touched&&name.invalid)\">\n                <small *ngIf='name.errors.required&&name.touched' class=\"text-danger\">Name is required</small>\n                <small *ngIf='name.errors.pattern&&name.invalid&&name.touched' class=\"text-danger\">Name should be more than 3 character</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class='form-control'\n            [class.is-invalid]='password.errors&&(password.invalid&&password.touched)'\n            [class.is-valid]='(password.valid&&password.touched)'\n            #password='ngModel' pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\" required name='password' [(ngModel)]=\"userModel.password\" type=\"password\"/>\n            <div *ngIf=\"password.errors&&(password.touched&&password.invalid)\">\n                <small *ngIf='password.errors.required&&password.touched' class=\"text-danger\">Password is required</small>\n                <small *ngIf='password.errors.pattern&&password.invalid&&password.touched' class=\"text-danger\">Password must contain atleast one number,special character and lowercase,uppercase alphabet,one and of length 8 to 12</small>\n            </div>\n          </div>\n          <input class=\"btn btn-primary\" [disabled]='!regitrationForm.valid' type=\"submit\" value='Register'>\n        </form>\n      </div>\n    </div>\n  </div>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../register-user.service */ "./src/app/register-user.service.ts");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../login-user.service */ "./src/app/login-user.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_registerUserService, _loginUserService, _router) {
        this._registerUserService = _registerUserService;
        this._loginUserService = _loginUserService;
        this._router = _router;
        this.Invalidcredential = false;
        this.userModel = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registrationFormSubmit = function () {
        var _this = this;
        this._registerUserService.register(this.userModel).subscribe(function (data) {
            sessionStorage.setItem('token', data.token);
            _this._router.navigate(['/user']);
        }, function (error) { return console.log('fail', error); });
    };
    HomeComponent.prototype.loginFormSubmit = function (formdata) {
        var _this = this;
        this._loginUserService.login(formdata).subscribe(function (data) {
            switch (data.token) {
                case ('invalidcredential'): {
                    _this.Invalidcredential = true;
                    break;
                }
                default: {
                    sessionStorage.setItem('token', data.token);
                    _this._router.navigate(['/user']);
                }
            }
        }, function (err) {
            console.log(err);
            console.log('error');
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_user_service__WEBPACK_IMPORTED_MODULE_2__["RegisterUserService"],
            _login_user_service__WEBPACK_IMPORTED_MODULE_3__["LoginUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-user.service.ts":
/*!***************************************!*\
  !*** ./src/app/login-user.service.ts ***!
  \***************************************/
/*! exports provided: LoginUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserService", function() { return LoginUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginUserService = /** @class */ (function () {
    function LoginUserService(_httpClient) {
        this._httpClient = _httpClient;
        this._url = 'http://localhost:3000/api/login';
    }
    LoginUserService.prototype.login = function (user) {
        return this._httpClient.post(this._url, user);
    };
    LoginUserService.prototype.loggedIn = function () {
        return !!sessionStorage.getItem('token');
    };
    LoginUserService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    LoginUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginUserService);
    return LoginUserService;
}());



/***/ }),

/***/ "./src/app/pass-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/pass-service.service.ts ***!
  \*****************************************/
/*! exports provided: PassServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassServiceService", function() { return PassServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PassServiceService = /** @class */ (function () {
    function PassServiceService(_httpClient) {
        this._httpClient = _httpClient;
        this._url = 'http://localhost:3000/api/insertpassword';
        this._url1 = 'http://localhost:3000/api/getpasswords';
    }
    PassServiceService.prototype.savePass = function (data) {
        return this._httpClient.post(this._url, data);
    };
    PassServiceService.prototype.getAllSavedPass = function () {
        return this._httpClient.get(this._url1);
    };
    PassServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PassServiceService);
    return PassServiceService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container col-md-6'>\n  <form #cpform='ngForm' (ngSubmit)='changePass(cpform.value)' novalidate>\n    <div class='form-group'> \n      <label for=\"email\">E-mail</label>\n      <input class='form-control' name='email' ngModel #email='ngModel' type='email' \n        [class.is-invalid]='email.errors&&(email.invalid&&email.touched)'\n        [class.is-valid]='(email.valid&&email.touched)' required\n        pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"/>\n      <div *ngIf=\"email.errors&&(email.touched&&email.invalid)\">\n        <small *ngIf='email.errors.required&&email.touched' class=\"text-danger\">E-mail is required</small>\n        <small *ngIf='email.errors.pattern&&email.invalid&&email.touched' class=\"text-danger\">Invalid E-mail address</small>\n      </div>\n    </div>\n    <div class='form-group'> \n      <label for=\"oldpass\">Password</label>\n      <input class='form-control' name='oldpass' ngModel #oldpass='ngModel' type='password'\n      [class.is-invalid]='oldpass.errors&&(oldpass.invalid&&oldpass.touched)'\n      [class.is-valid]='(oldpass.valid&&oldpass.touched)' required\n      #password='ngModel' pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\" />\n      <div *ngIf=\"oldpass.errors&&(oldpass.touched&&oldpass.invalid)\">\n        <small *ngIf='oldpass.errors.required&&oldpass.touched' class=\"text-danger\">Password is required</small>\n        <small *ngIf='oldpass.errors.pattern&&oldpass.invalid&&oldpass.touched' class=\"text-danger\">Password must contain atleast one number,special character and lowercase,uppercase alphabet,one and of length 8 to 12</small>\n      </div>\n    </div>\n    <div class='form-group'> \n        <label for=\"newpass\">New Password</label>\n        <input class='form-control' name='newpass' ngModel #newpass='ngModel' type='password'\n        [class.is-invalid]='newpass.errors&&(newpass.invalid&&newpass.touched)'\n        [class.is-valid]='(newpass.valid&&newpass.touched)' required\n        #newpass='ngModel' pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\" />\n        <div *ngIf=\"newpass.errors&&(newpass.touched&&newpass.invalid)\">\n          <small *ngIf='newpass.errors.required&&newpass.touched' class=\"text-danger\">Password is required</small>\n          <small *ngIf='newpass.errors.pattern&&newpass.invalid&&newpass.touched' class=\"text-danger\">Password must contain atleast one number,special character and lowercase,uppercase alphabet,one and of length 8 to 12</small>\n        </div>\n    </div>\n    <input [disabled]='!cpform.valid' class='btn btn-primary' type='submit' value=\"Change Password\"/>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _changepass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../changepass.service */ "./src/app/changepass.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_changePassService, _router) {
        this._changePassService = _changePassService;
        this._router = _router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.changePass = function (formdata) {
        var _this = this;
        this._changePassService.updatePass(formdata).subscribe(function (data) {
            switch (data.status) {
                case ('changed'): {
                    sessionStorage.removeItem('token');
                    _this._router.navigate(['/home']);
                    break;
                }
                case ('wrongpass'): {
                    console.log('wrongpass');
                    alert('old password is wrong');
                }
            }
        }, function (err) { console.log(err); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_changepass_service__WEBPACK_IMPORTED_MODULE_2__["ChangepassService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register-user.service.ts":
/*!******************************************!*\
  !*** ./src/app/register-user.service.ts ***!
  \******************************************/
/*! exports provided: RegisterUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserService", function() { return RegisterUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterUserService = /** @class */ (function () {
    function RegisterUserService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/api/register';
    }
    RegisterUserService.prototype.register = function (user) {
        return this._http.post(this._url, user);
    };
    RegisterUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterUserService);
    return RegisterUserService;
}());



/***/ }),

/***/ "./src/app/termsandcondition/termsandcondition.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zYW5kY29uZGl0aW9uL3Rlcm1zYW5kY29uZGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/termsandcondition/termsandcondition.component.html":
/*!********************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6 class=\"offset-1\">Terms And Condition</h6>\n  <blockquote class=\"offset-1\">\n    <ul>\n      <li>All rights are reserved. </li>\n      <li>This project maitains the passwords. </li>\n      <li>If you forget pssword you lose all data. </li>\n      <li>Unfortunately there is know way to get back your account. </li>\n      <li> you can only have only one account </li>\n    </ul>\n  </blockquote>\n</div>"

/***/ }),

/***/ "./src/app/termsandcondition/termsandcondition.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/termsandcondition/termsandcondition.component.ts ***!
  \******************************************************************/
/*! exports provided: TermsandconditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionComponent", function() { return TermsandconditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsandconditionComponent = /** @class */ (function () {
    function TermsandconditionComponent() {
    }
    TermsandconditionComponent.prototype.ngOnInit = function () {
    };
    TermsandconditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsandcondition',
            template: __webpack_require__(/*! ./termsandcondition.component.html */ "./src/app/termsandcondition/termsandcondition.component.html"),
            styles: [__webpack_require__(/*! ./termsandcondition.component.css */ "./src/app/termsandcondition/termsandcondition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsandconditionComponent);
    return TermsandconditionComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-user.service */ "./src/app/login-user.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(_injector) {
        this._injector = _injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var loginservice = this._injector.get(_login_user_service__WEBPACK_IMPORTED_MODULE_2__["LoginUserService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + loginservice.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle{\r\n    padding: 10% 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxle1xyXG4gICAgcGFkZGluZzogMTAlIDUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n  <form #passwordform='ngForm' (ngSubmit)=\"savePass(passwordform.value)\" class=\"offset-2 col-md-6\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input class='form-control' name='name' ngModel\n      [class.is-invalid]='name.errors&&(name.invalid&&name.touched)'\n      [class.is-valid]='(name.valid&&name.touched)'\n      #name='ngModel' required pattern=\"^[a-zA-Z ]{3,30}$\" type=\"text\"/>\n      <div *ngIf=\"name.errors&&(name.touched&&name.invalid)\">\n          <small *ngIf='name.errors.required&&name.touched' class=\"text-danger\">Name is required</small>\n          <small *ngIf='name.errors.pattern&&name.invalid&&name.touched' class=\"text-danger\">Name should be more than 3 character</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input class='form-control' name='url' ngModel #url='ngModel'\n      [class.is-invalid]='url.errors&&(url.invalid&&name.touched)'\n      [class.is-valid]='(url.valid&&url.touched)'\n      required pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\" type=\"text\"/>\n      <div *ngIf=\"url.errors&&(url.touched&&url.invalid)\">\n          <small *ngIf='url.errors.required&&url.touched' class=\"text-danger\">URL is required</small>\n          <small *ngIf='url.errors.pattern&&url.invalid&&url.touched' class=\"text-danger\">Invalid URL</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input class='form-control' ngModel name='password'\n        [class.is-invalid]='password.errors&&(password.invalid&&password.touched)'\n        [class.is-valid]='(password.valid&&password.touched)'\n        #password='ngModel' required name='password' type=\"password\"/>\n      <div *ngIf=\"password.errors&&(password.touched&&password.invalid)\">\n          <small *ngIf='password.errors.required&&password.touched' class=\"text-danger\">Password is required</small>\n      </div>\n    </div>\n    <input [disabled]='!passwordform.valid' class='btn btn-outline-primary' type=\"submit\" value='save' />\n  </form>\n  <div (click)='userPass()' class=\"middle btn btn-primary text-center\">\n    Passwords\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pass_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pass-service.service */ "./src/app/pass-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(_passService, _router) {
        this._passService = _passService;
        this._router = _router;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.savePass = function (datamodel) {
        var _this = this;
        this._passService.savePass(datamodel).subscribe(function (data) {
            _this._router.navigate(['/userpass']);
        }, function (error) {
            _this._router.navigate(['/home']);
        });
    };
    UserComponent.prototype.userPass = function () {
        this._router.navigate(['/userpass']);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pass_service_service__WEBPACK_IMPORTED_MODULE_2__["PassServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userpass/userpass.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpass/userpass.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle{\r\n    padding: 10% 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhc3MvdXNlcnBhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VycGFzcy91c2VycGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZXtcclxuICAgIHBhZGRpbmc6IDEwJSAxJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/userpass/userpass.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpass/userpass.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Url</th>\n            <th scope=\"col\">password</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pas of passes\" >\n            <td scope=\"row\">{{pas.name}}</td>\n            <td>{{pas.url}}</td>\n            <td>{{pas.password}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div (click)='addpass()' class=\"col-md-2 btn btn-primary middle\">\n     Add password\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/userpass/userpass.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpass/userpass.component.ts ***!
  \************************************************/
/*! exports provided: UserpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpassComponent", function() { return UserpassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pass_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pass-service.service */ "./src/app/pass-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserpassComponent = /** @class */ (function () {
    function UserpassComponent(_passService, _router) {
        this._passService = _passService;
        this._router = _router;
    }
    UserpassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._passService.getAllSavedPass().subscribe(function (res) {
            _this.passes = res;
        }, function (err) { return _this._router.navigate(['/home']); });
    };
    UserpassComponent.prototype.addpass = function () {
        this._router.navigate(['/user']);
    };
    UserpassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpass',
            template: __webpack_require__(/*! ./userpass.component.html */ "./src/app/userpass/userpass.component.html"),
            styles: [__webpack_require__(/*! ./userpass.component.css */ "./src/app/userpass/userpass.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pass_service_service__WEBPACK_IMPORTED_MODULE_2__["PassServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserpassComponent);
    return UserpassComponent;
}());



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

module.exports = __webpack_require__(/*! D:\angularproject\passmanage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map