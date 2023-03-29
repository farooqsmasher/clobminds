"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formbuilder, _route, http, toast) {
        this.formbuilder = formbuilder;
        this._route = _route;
        this.http = http;
        this.toast = toast;
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.login.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.login.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            'password': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    LoginComponent.prototype.logindata = function (login) {
        var _this = this;
        // console.log(this.login.value);
        console.warn(this.login);
        this.http.get('http://localhost:3000/signup').subscribe(function (res) {
            var user = res.find(function (a) {
                return a.email === _this.login.value.email && a.password === _this.login.value.password;
            });
            if (user) {
                alert('you are successfully logged in..');
                _this.login.reset();
                _this._route.navigate(['dashboard']);
            }
            else {
                alert('user not found!please signup');
                _this._route.navigate(['login']);
            }
        }, function (err) {
            alert('something was wrong');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
