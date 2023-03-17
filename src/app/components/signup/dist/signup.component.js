"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formbuilder) {
        this.formbuilder = formbuilder;
    }
    // signup:FormGroup|any;
    SignupComponent.prototype.ngOnInit = function () {
        this.signup = this.formbuilder.group({
            fname: [''],
            lname: [''],
            email: [''],
            phone: [''],
            password: ['']
            // 'fname': new FormControl(),
            // 'lname': new FormControl(),
            // 'email': new FormControl(),
            // 'phone': new FormControl(),
            // 'password':new FormControl
        });
    };
    SignupComponent.prototype.signupdata = function (signup) {
        console.log(this.signup.value);
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
