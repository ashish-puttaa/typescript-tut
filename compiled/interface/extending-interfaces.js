"use strict";
(function () {
    /*
       Just like classes, interfaces can extend other interfaces.
    */
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.age = 30;
        }
        Person.prototype.greet = function (phrase) {
            console.log(phrase, this.name);
        };
        return Person;
    }());
    var userOne = new Person('Sammy');
    userOne.greet('Hello, I am');
})();
