"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    /*
       You can return value from the following decorators
          1. Class Decorators - return a new constructor function
          2. Method Decorators - return a new PropertyDescriptor
          3. Accessor Decorators - return a new PropertyDescriptor
 
       You can return values for other decorators like Property and Parameter Decorators, but they are ignored by TS.
    */
    /* 1. Returning from Class Decorators */
    function WithTemplate(template, hookId) {
        return function (originalConstructor) {
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _ = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _[_i] = arguments[_i];
                    }
                    var _this = _super.call(this) || this;
                    var hookEl = document.getElementById(hookId);
                    if (hookEl) {
                        hookEl.innerHTML = template;
                        hookEl.querySelector('h1').textContent = _this.name;
                    }
                    return _this;
                }
                return class_1;
            }(originalConstructor));
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'Sammy';
            console.log('Creating person object...');
        }
        Person = __decorate([
            WithTemplate('<h1>Person</h1>', 'app')
        ], Person);
        return Person;
    }());
    var person = new Person();
    console.log(person.name);
    /* 2. Returning from Method Decorators */
    /*
       In the event listener, 'this' refers to the target of the event.
       So this.message will return undefined.
 
       You can do the following JS to fix this
       - convert showMessage to an arrow function
       - bind the object to the method => p.showMessage.bind(p)
       
       This snippet demonstrates how to use a method decorator to bind 'this' to a method.
    */
    function Autobind(_, _2, descriptor) {
        var originalMethod = descriptor.value;
        var adjustedDescriptor = {
            configurable: true,
            enumerable: false,
            get: function () {
                var boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjustedDescriptor;
    }
    var Printer = /** @class */ (function () {
        function Printer() {
            this.message = 'This works!';
        }
        Printer.prototype.showMessage = function () {
            console.log(this.message);
        };
        __decorate([
            Autobind
        ], Printer.prototype, "showMessage", null);
        return Printer;
    }());
    var p = new Printer();
    var button = document.querySelector('button');
    button.addEventListener('click', p.showMessage);
})();
