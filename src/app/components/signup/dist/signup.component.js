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
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formbuilder, _route, http, toast) {
        this.formbuilder = formbuilder;
        this._route = _route;
        this.http = http;
        this.toast = toast;
    }
    Object.defineProperty(SignupComponent.prototype, "fname", {
        // signup:FormGroup|any;
        get: function () { return this.signup.get('fname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "lname", {
        get: function () { return this.signup.get('lname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "phone", {
        get: function () { return this.signup.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () { return this.signup.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () { return this.signup.get('password'); },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
        this.signup = this.formbuilder.group({
            fname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(15), forms_1.Validators.pattern('[a-zA-Z ]*')]],
            lname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(15), forms_1.Validators.pattern('[a-zA-Z ]*')]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            phone: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(11), forms_1.Validators.pattern('[0-9]{10}')]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(15)]]
            // 'fname': new FormControl(),
            // 'lname': new FormControl(),
            // 'email': new FormControl(),
            // 'phone': new FormControl(),
            // 'password':new FormControl
        });
    };
    SignupComponent.prototype.signupdata = function (signup) {
        var _this = this;
        console.warn(this.signup);
        // console.log(this.signup.value);
        this.signuser = this.signup.value.fname;
        this.http.post(' http://localhost:3000/signup', this.signup.value)
            .subscribe(function (res) {
            // alert(this.signuser+'successfully signed in....');
            _this.toast.success(_this.signuser, 'successfully signed in....');
            _this.signup.reset();
            _this._route.navigate(['login']);
        }, function (err) {
            alert("something went wrong");
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=signup.component.js.map
