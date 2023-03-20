"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_user_component_1 = require("./components/add-user/add-user.component");
var login_component_1 = require("./components/login/login.component");
var forgot_password_component_1 = require("./components/forgot-password/forgot-password.component");
var create_new_component_1 = require("./components/create-new/create-new.component");
var routes = [
    { path: 'add', component: add_user_component_1.AddUserComponent },
    { redirectTo: '', path: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'create-new', component: create_new_component_1.CreateNewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
