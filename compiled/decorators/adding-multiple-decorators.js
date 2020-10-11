"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function () {
    /*
       You can add multiple decorators by stacking them.
       The execution order of decorators is bottom-up.
       The execution order of decorator factorues is top-down.
 
       Decorator factories run before the decorators itself.
 
       In the below code, 'WithTemplate' runs before 'Logger'.
    */
    function Logger(logString) {
        console.log('Logger decorator factory');
        return function (_) {
            console.log('Logger decorator');
            console.log(logString);
        };
    }
    function WithTemplate(template, hookId) {
        console.log('WithTemplate decorator factory');
        return function (constructor) {
            console.log('WithTemplate decorator');
            var hookEl = document.getElementById(hookId);
            var obj = new constructor();
            if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector('h1').textContent = obj.name;
            }
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'Sammy';
            console.log('Creating person object...');
        }
        Person = __decorate([
            Logger('Logging Person...'),
            WithTemplate('<h1>Person</h1>', 'app')
        ], Person);
        return Person;
    }());
    var person = new Person();
    console.log(person.name);
})();
