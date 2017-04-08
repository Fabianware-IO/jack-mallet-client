webpackJsonp([1,5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginSuccessful = true;
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return !this.checkTokenExpired();
    };
    AuthenticationService.prototype.clearUserDataAndRedirect = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    /**
     * Sends a login request
     *
     */
    AuthenticationService.prototype.login = function (body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* flaskUrl */] + '/login', body, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* jsonHeader */])())
            .map(this.extractToken)
            .catch(this.handleError);
    };
    /**
     * Logout method to send a logout request to the server and clear localStorage
     */
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            this.postResource('', __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* flaskUrl */] + '/logout')
                .subscribe(function (data) { return _this.handleLogout(data); }, function (error) {
                if (error.status === 401) {
                    _this.router.navigate(['/login']);
                }
            }, function () { return console.log('got data'); });
        }
        else {
            this.clearUserDataAndRedirect();
        }
    };
    /**
     *
     * Post resource to send a post request to the server.
     * Extracts the current token from the local storage else redirects to
     * session expired modal.
     */
    AuthenticationService.prototype.postResource = function (body, url) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authentication-Token': token });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options);
    };
    /**
     * Get resource to fetch data from server using an end point as `url`
     */
    AuthenticationService.prototype.getResource = function (url) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authentication-Token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options);
    };
    AuthenticationService.prototype.extractToken = function (res) {
        var body = res.json();
        if (res.status === 200) {
            var response = 'response';
            var user = 'user';
            var userString = JSON.stringify(body[response][user]);
            localStorage.setItem('user', userString);
        }
    };
    /**
     *
     * This function checks if the current token of the app has been expired
     * based on the first time authentication from server
     */
    AuthenticationService.prototype.checkTokenExpired = function () {
        // const expiryTime = Number(localStorage.getItem('token_age'));
        // const curTime = Math.floor(new Date().getTime() / 1000);
        // if (curTime > expiryTime) {
        //   return true;
        // }
        if (localStorage.getItem('user')) {
            // console.log('checkTokenExpired :: expired=false');
            return false;
        }
        // console.log('checkTokenExpired :: expired=true');
        return true;
    };
    AuthenticationService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    /**
     *
     * On logout, clear the local storage and redirect to login page
     */
    AuthenticationService.prototype.handleLogout = function (data) {
        if (data.status === 200) {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(192);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notfound_component__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notfound_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(194);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(195);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reports_component__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__reports_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_component__["d"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscribers_component__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__subscribers_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__testruns_component__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__testruns_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(router) {
        this.router = router;
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            if (!this._user) {
                var user = localStorage.getItem('user');
                if (!user) {
                    // no user in local storage, redirect to login
                    this.router.navigate(['/login']);
                }
                else {
                    this._user = JSON.parse(user);
                    return this._user;
                }
            }
            else {
                return this._user;
            }
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 181;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(206);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AppFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AppContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AppMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(appService, authService) {
        this.appService = appService;
        this.authService = authService;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit :: initting');
        this.appService.getVersion().subscribe(function (version) { return _this.version = version['version']; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.loggedIn = function () {
        return this.authService.isAuthenticated();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]],
        template: "\n    <div style=\"display: flex; min-height: 100vh; flex-direction: column;\">\n      <app-header></app-header>\n      <app-menu *ngIf=\"loggedIn()\"></app-menu>\n      <div style=\"flex: 1\">\n        <router-outlet></router-outlet>\n      </div>\n      <app-footer></app-footer>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication__["b" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var AppHeaderComponent = (function () {
    function AppHeaderComponent(authService, us) {
        this.authService = authService;
        this.us = us;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.user = this.us.user;
    };
    AppHeaderComponent.prototype.loggedIn = function () {
        return this.authService.isAuthenticated();
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-header',
        template: "\n    <div class=\"ui inverted borderless attached menu\">\n      <div class=\"item\">\n        <img style=\"margin: 0px 20px\" src=\"/assets/images/jack-mallet.png\">\n        <label><h2>JackMallet</h2></label>\n      </div>\n      <div *ngIf=\"loggedIn()\" class=\"ui inverted right menu\">\n        <div class=\"item\">\n          <a routerLink=\"profile\" routerLinkActive=\"active\">\n            <img class=\"ui avatar image\" src=\"/assets/images/user-avatar-inverted.png\">\n            <span>{{ user.fullName }}</span>\n          </a>\n        </div>\n      <div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentication__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__users__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users__["UserService"]) === "function" && _d || Object])
], AppHeaderComponent);

var AppFooterComponent = (function () {
    function AppFooterComponent(appService) {
        this.appService = appService;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getVersion().subscribe(function (version) { return _this.version = version.version; }, function (error) { return _this.errorMessage = error; });
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-footer',
        template: "\n    <div class=\"ui inverted borderless attached menu\">\n      <div class=\"right menu\">\n        <div class=\"item\">\n          {{ version }}\n        </div>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _e || Object])
], AppFooterComponent);

var AppContentComponent = (function () {
    function AppContentComponent(appService) {
        this.appService = appService;
    }
    AppContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getData().subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
    };
    return AppContentComponent;
}());
AppContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-content',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]],
        template: "\n    <div class=\"ui container\">\n      <br/><br/><br/>\n      <table class=\"ui inverted table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>NAME</th>\n            <th>EMAIL</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let d of data\">\n            <td>{{ d._id['$oid'] }}</td>\n            <td>{{ d.name }}</td>\n            <td>{{ d.email }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _f || Object])
], AppContentComponent);

var AppMenuComponent = (function () {
    function AppMenuComponent() {
    }
    return AppMenuComponent;
}());
AppMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-menu',
        template: "\n    <div class=\"ui inverted borderless attached menu\">\n      <a class=\"item\" routerLinkActive=\"active\" routerLink=\"dashboard\">Dashboard</a>\n      <a class=\"item\" routerLinkActive=\"active\" routerLink=\"subscribers\">Subscribers</a>\n      <a class=\"item\" routerLinkActive=\"active\" routerLink=\"testruns\">Test Runs</a>\n      <a class=\"item\" routerLinkActive=\"active\" routerLink=\"reports\">Reports</a>\n      <div class=\"ui inverted right menu\">\n        <a class=\"item\" routerLinkActive=\"active\" routerLink=\"settings\"><i class=\"inverted large setting icon\"></i></a>\n      </div>\n    </div>\n  "
    })
], AppMenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reports__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__testruns__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subscribers__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_component__["b" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_component__["c" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_component__["d" /* AppContentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_component__["e" /* AppMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__reports__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__testruns__["a" /* TestRunsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__subscribers__["a" /* SubscribersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings__["b" /* WebhooksComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings__["c" /* AgentsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__settings__["d" /* EnvironmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__users__["UserProfileComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* PreloadAllModules */] })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__authentication__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_10__authentication__["b" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_16__users__["UserService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = (function () {
    function AuthenticationGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            console.log('AuthenticationGuard :: canActivate=false');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication-guard.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dashboard',
        template: "\n        <h2>Dashboard</h2>\n    "
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-not-found',
        template: "\n        <h2>Route Not Found</h2>\n    "
    })
], NotFoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: "\n        <h2>Welcome Home!</h2>\n    "
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = (function () {
    function LoginFormComponent(fb, as, router, us) {
        this.fb = fb;
        this.as = as;
        this.router = router;
        this.us = us;
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        var credentials = this.loginForm.value;
        this.as.login(this.loginForm.value)
            .subscribe(function (success) {
            console.log('login :: setting user to ', _this.loginForm.value);
            _this.us.user = _this.loginForm.value;
            _this.router.navigate(['/dashboard']);
        }, function (error) { return _this.handleError(error); });
    };
    LoginFormComponent.prototype.handleError = function (error) {
        console.log('error received :: error=', error);
        var errorMessage = error;
        console.error(errorMessage);
        this.color = 'red';
        this.loginText = errorMessage;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errorMessage);
    };
    LoginFormComponent.prototype.submit = function () {
        console.log('logging in');
        this.loginText = null;
        this.login();
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login',
        template: "\n    <div class=\"ui middle aligned center aligned grid\" style=\"height: 100%; margin: 0;\">\n        <div class=\"column\" style=\"max-width: 600px;\">\n            <div class=\"ui segment\">\n                <div *ngIf=\"loginText\" class=\"ui negative message\">\n                    <i class=\"close icon\"></i>\n                    <div class=\"header\">Error: {{ loginText }}</div>\n                </div>\n                <form class=\"ui form\" [class.error]=\"loginForm.valid\">\n                    <div class=\"field\" [class.error]=\"loginForm.controls.username.invalid\">\n                        <sm-input [control]=\"loginForm.controls.username\" type=\"text\" label=\"Email Address\"></sm-input>\n                    </div>\n                    <div class=\"field\" [class.error]=\"loginForm.controls.password.invalid\">\n                        <sm-input [control]=\"loginForm.controls.password\" type=\"password\" label=\"Password\"></sm-input>\n                    </div>\n                    <button class=\"ui black button\" (click)=\"submit()\">Log In</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__authentication__["b" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication__["b" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__users__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__users__["UserService"]) === "function" && _d || Object])
], LoginFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-reports',
        template: "\n        <h2>Reports</h2>\n    "
    })
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testruns__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribers__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });










var ROUTES = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login__["a" /* LoginFormComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_5__reports__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'testruns', component: __WEBPACK_IMPORTED_MODULE_6__testruns__["a" /* TestRunsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'subscribers', component: __WEBPACK_IMPORTED_MODULE_7__subscribers__["a" /* SubscribersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__users__["UserProfileComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* SettingsComponent */], children: [
            { path: '', redirectTo: 'environments', pathMatch: 'full' },
            { path: 'environments', component: __WEBPACK_IMPORTED_MODULE_9__settings__["d" /* EnvironmentsComponent */] },
            { path: 'webhooks', component: __WEBPACK_IMPORTED_MODULE_9__settings__["b" /* WebhooksComponent */] },
            { path: 'agents', component: __WEBPACK_IMPORTED_MODULE_9__settings__["c" /* AgentsComponent */] }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* NotFoundComponent */] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EnvironmentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WebhooksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AgentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-settings',
        template: "\n    <br/><br/>\n        <div class=\"ui grid\">\n            <div class=\"three wide column\">\n                <div class=\"ui vertical fluid tabular menu\">\n                    <a class=\"item\" routerLinkActive=\"active\" routerLink=\"environments\">\n                        Environments\n                    </a>\n                    <a class=\"item\" routerLinkActive=\"active\" routerLink=\"webhooks\">\n                        Webhooks\n                    </a>\n                    <a class=\"item\" routerLinkActive=\"active\" routerLink=\"agents\">\n                        Agents\n                    </a>\n                </div>\n            </div>\n            <div class=\"thirteen wide stretched column\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
    })
], SettingsComponent);

var EnvironmentsComponent = (function () {
    function EnvironmentsComponent() {
    }
    return EnvironmentsComponent;
}());
EnvironmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-settings-environments',
        template: "\n        <h2>Environments</h2>\n    "
    })
], EnvironmentsComponent);

var WebhooksComponent = (function () {
    function WebhooksComponent() {
    }
    return WebhooksComponent;
}());
WebhooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-settings-webhooks',
        template: "\n        <h2>Webhooks</h2>\n    "
    })
], WebhooksComponent);

var AgentsComponent = (function () {
    function AgentsComponent() {
    }
    return AgentsComponent;
}());
AgentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-settings-agents',
        template: "\n        <h2>Agents</h2>\n    "
    })
], AgentsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_semantic_ng_semantic__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribersComponent = (function () {
    function SubscribersComponent(appService) {
        this.appService = appService;
    }
    SubscribersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSubscribers().subscribe(function (subscribers) { return _this.subscribers = subscribers; }, function (error) { return _this.errorMessage = error; });
    };
    SubscribersComponent.prototype.show = function () {
        this.addSubscriberModal.show();
    };
    SubscribersComponent.prototype.submit = function () {
        console.log('SubscribersComponent :: submitted form');
    };
    return SubscribersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ng_semantic_ng_semantic__["b" /* SemanticModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_semantic_ng_semantic__["b" /* SemanticModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_semantic_ng_semantic__["b" /* SemanticModalComponent */]) === "function" && _a || Object)
], SubscribersComponent.prototype, "addSubscriberModal", void 0);
SubscribersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-subscribers',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]],
        template: "\n      <div class=\"ui container\">\n          <br/><br/>\n          <table class=\"ui inverted table\">\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>USERNAME</th>\n                <th>PASSWORD</th>\n                <th>REGISTRATION DOMAIN</th>\n                <th>OUTBOUND PROXY</th>\n                <th>REGISTRATION INTERVAL</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let s of subscribers\">\n                <td>{{ s._id['$oid'] }}</td>\n                <td>{{ s.username }}</td>\n                <td>{{ s.password }}</td>\n                <td>{{ s.registrationDomain }}</td>\n                <td>{{ s.outboundProxy }}</td>\n                <td>{{ s.registrationInterval }}</td>\n              </tr>\n            </tbody>\n          </table>\n          <button (click)=\"show()\"class=\"ui black icon button\">\n            <i class=\"plus icon\"></i>\n            Subscriber\n          </button>\n          <sm-modal title=\"Add Subscriber\" #addSubscriberModal>\n            <modal-content>\n                <form class=\"ui form\">\n                    <div class=\"field\">\n                        <sm-input type=\"text\" label=\"Username\"></sm-input>\n                    </div>\n                    <div class=\"field\">\n                        <sm-input type=\"text\" label=\"Password\"></sm-input>\n                    </div>\n                    <div class=\"field\">\n                        <sm-input type=\"text\" label=\"Registration Domain\"></sm-input>\n                    </div>\n                    <div class=\"field\">\n                        <sm-input type=\"text\" label=\"Outbound Proxy\"></sm-input>\n                    </div>\n                    <div class=\"field\">\n                        <sm-input type=\"text\" label=\"Registration Interval\"></sm-input>\n                    </div>\n                </form>\n            </modal-content>\n            <modal-actions>\n                <button class=\"ui black button\" (click)=\"submit()\">Save\n                </button>\n            </modal-actions>\n            <h2>Add Subscriber Modal</h2>\n          </sm-modal>\n      </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _b || Object])
], SubscribersComponent);

var _a, _b;
//# sourceMappingURL=subscribers.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestRunsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestRunsComponent = (function () {
    function TestRunsComponent() {
    }
    return TestRunsComponent;
}());
TestRunsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-testruns',
        template: "\n        <h2>Test Runs</h2>\n    "
    })
], TestRunsComponent);

//# sourceMappingURL=testruns.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(us) {
        this.us = us;
        this.user = this.us.user;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        // this.user = this.us.user;
        // console.log('UserProfileComponent :: ngOnInit :: user=', this.user);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-user-profile',
        template: "\n    <div class=\"ui container\">\n      <br/><br/>\n      <div class=\"ui card\">\n        <div class=\"image\">\n          <img src=\"/assets/images/matthew.png\">\n        </div>\n        <div class=\"content\">\n          <a class=\"header\">{{ user.fullName }}</a>\n          <div class=\"meta\">\n            <span>Joined in 2017</span>\n          </div>\n        </div>\n        <div class=\"extra content\">\n          <i class=\"user icon\"></i>\n          <span>{{ user.username }}</span>\n        </div>\n      </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhrheaders__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__xhrheaders__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonHeader;

function jsonHeader() {
    var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({
        headers: header
    });
    return options;
}
//# sourceMappingURL=xhrheaders.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__headers__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__headers__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_guard_service__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_guard_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user__);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flaskUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var flaskUrl = 'http://localhost:5000/api/v1';
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getVersion = function () {
        var path = flaskUrl + '/version.properties';
        console.log('requesting version service from server=', path);
        return this.http.get(path)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    AppService.prototype.getData = function () {
        var path = flaskUrl + '/data';
        console.log('requesting data service from server=', path);
        return this.http.get(path)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    AppService.prototype.getSubscribers = function () {
        var path = flaskUrl + '/subscribers';
        console.log('requesting data service from server=', path);
        return this.http.get(path)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error'); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ })

},[528]);
//# sourceMappingURL=main.bundle.js.map