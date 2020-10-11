"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
(function () {
    /*
       For instance properties, target referts to the  prototype of the object.
       For static properties, target refers to the constructor function.
    */
    function propertyDecorator(target, propertyName) {
        console.log('Property Decorator', { target: target, propertyName: propertyName });
    }
    function accessorDecorator(target, name, descriptor) {
        console.log('Accessor Decorator', { target: target, name: name, descriptor: descriptor });
    }
    function methodDecorator(target, name, descriptor) {
        console.log('Method Decorator', { target: target, name: name, descriptor: descriptor });
    }
    function parameterDecorator(target, nameOfMethod, position) {
        console.log('Parameter Decorator', { target: target, nameOfMethod: nameOfMethod, position: position });
    }
    var Product = /** @class */ (function () {
        function Product(title, price) {
            this.title = title;
            this._price = price;
        }
        Object.defineProperty(Product.prototype, "price", {
            set: function (val) {
                if (val > 0)
                    this._price = val;
                else
                    throw new Error('Invalid price - should be positive!');
            },
            enumerable: false,
            configurable: true
        });
        Product.prototype.getPriceWithTax = function (tax) {
            return this._price * (1 + tax);
        };
        __decorate([
            propertyDecorator
        ], Product.prototype, "title", void 0);
        __decorate([
            accessorDecorator
        ], Product.prototype, "price", null);
        __decorate([
            methodDecorator,
            __param(0, parameterDecorator)
        ], Product.prototype, "getPriceWithTax", null);
        return Product;
    }());
})();
