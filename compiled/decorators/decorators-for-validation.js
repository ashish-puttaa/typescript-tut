"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    var registeredValidators = {};
    function Required(target, propertyName) {
        var _a;
        registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propertyName] = ['required'], _a));
    }
    function PositiveNumber(target, propertyName) {
        var _a;
        registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propertyName] = ['positive'], _a));
    }
    function validate(obj) {
        var objValidatorConfig = registeredValidators[obj.constructor.name];
        if (!objValidatorConfig) {
            true;
        }
        var isValid = true;
        for (var property in objValidatorConfig) {
            var validatorsArr = objValidatorConfig[property];
            for (var _i = 0, validatorsArr_1 = validatorsArr; _i < validatorsArr_1.length; _i++) {
                var validator = validatorsArr_1[_i];
                switch (validator) {
                    case 'required':
                        isValid = isValid && !!obj[property];
                        break;
                    case 'positive':
                        isValid = isValid && obj[property] > 0;
                        break;
                }
            }
        }
        return isValid;
    }
    var Course = /** @class */ (function () {
        function Course(title, price) {
            this.title = title;
            this.price = price;
        }
        __decorate([
            Required
        ], Course.prototype, "title", void 0);
        __decorate([
            PositiveNumber
        ], Course.prototype, "price", void 0);
        return Course;
    }());
    var courseForm = document.querySelector('form');
    courseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var titleEl = document.getElementById('course-title');
        var priceEl = document.getElementById('course-price');
        var title = titleEl.value;
        var price = +priceEl.value;
        var createdCourse = new Course(title, price);
        if (!validate(createdCourse)) {
            alert('Invalid input. Please try again!');
            return;
        }
        else {
            console.log({ createdCourse: createdCourse });
        }
    });
})();
