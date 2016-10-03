webpackJsonp([1],{

/***/ "./src/app/login/login.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Login = (function () {
    function Login() {
    }
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            styles: [__webpack_require__("./src/app/login/login.style.scss")],
            template: __webpack_require__("./src/app/login/login.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ },

/***/ "./src/app/login/login.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
exports.routes = [
    { path: '', component: login_component_1.Login, pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = exports.routes;
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.Login
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ "./src/app/login/login.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"

/***/ },

/***/ "./src/app/login/login.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\n        <h5 class=\"widget-login-logo animated fadeInUp\">\n          <i class=\"fa fa-circle text-gray\"></i>\n          sing\n          <i class=\"fa fa-circle text-warning\"></i>\n        </h5>\n        <section class=\"widget widget-login animated fadeInUp\">\n          <header>\n            <h3>Login to your Sing App</h3>\n          </header>\n          <div class=\"widget-body\">\n            <p class=\"widget-login-info\">\n              Use Facebook, Twitter or your email to sign in.\n            </p>\n            <p class=\"widget-login-info\">\n              Don't have an account? Sign up now!\n            </p>\n            <form class=\"login-form mt-lg\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Username\">\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" id=\"pswd\" type=\"text\" placeholder=\"Password\">\n              </div>\n              <div class=\"clearfix\">\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button>\n                  <a class=\"btn btn-inverse btn-sm\" [routerLink]=\"['/app', 'dashboard'] \">Login</a>\n                </div>\n              </div>\n              <div class=\"row m-t-1\">\n                <div class=\"col-md-6 push-md-6\">\n                  <div class=\"clearfix\">\n                    <div class=\"abc-checkbox widget-login-info pull-xs-right\">\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\n                      <label for=\"checkbox1\">Keep me signed in </label>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6 pull-md-6\">\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\n                </div>\n              </div>\n            </form>\n          </div>\n        </section>\n      </div>\n    </div>\n  </main>\n  <footer class=\"page-footer\">\n    2016 &copy; Sing. Admin Dashboard Template.\n  </footer>\n</div>\n"

/***/ }

});
//# sourceMappingURL=1.map