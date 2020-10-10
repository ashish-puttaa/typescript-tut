"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    /*
       Decorators are very useful for meta-programming.
       They are used to write code which is easier to use for other developers.
 
       A decorator is just a function that you apply to something.
 
       -'@' is used to denote a decorator.
       - Anything directly after '@' must point to a function which is a decorator.
 
       Decorators are run when a class is defined, not when they are used.
    */
    function Logger(constructor) {
        console.log('logging');
        console.log(constructor);
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'Max';
            console.log('Creating person object...');
        }
        Person = __decorate([
            Logger
        ], Person);
        return Person;
    }());
    var person = new Person();
    console.log(person.name);
})();
