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
(function () {
    /*
       Abstract methods force all classes that extends it's parent class to add and overwrite it.
       They can only be present inside Abstract classes.
 
       To declare an abstact method, suffix the 'abstact' keyword with the method signature
 
       Syntax:
          abstract methodName(args): retun_type
    */
    var Waiter = /** @class */ (function () {
        function Waiter(name) {
            this.name = name;
        }
        return Waiter;
    }());
    var McDonaldsWaiter = /** @class */ (function (_super) {
        __extends(McDonaldsWaiter, _super);
        function McDonaldsWaiter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        McDonaldsWaiter.prototype.greetCustomer = function (greeting) {
            console.log(greeting);
        };
        return McDonaldsWaiter;
    }(Waiter));
    var bob = new McDonaldsWaiter('Bob');
    bob.greetCustomer("Welcome to McDonald's !!");
})();
