"use strict";
(function () {
    /*
       Interfaces describe the structure of an object and not anything else.
 
       They are also be implemented by classes.
       Unlike extending classes, a class can implement multiple interfaces. They need to be comma separated.
 
       Access modifiers like public, private, protected are not allowed inside interfaces.
       You can set a property as 'readonly' though.
 
       Interfaces are TypeScript only.
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
    var userOne;
    userOne = {
        name: 'Max',
        greet: function (phrase) {
            console.log(phrase, this.name);
        },
    };
    userOne = new Person('Sammy');
    /* userOne.name = 'Sam'; Will not work as 'name' is readonly */
    userOne.greet('Hello, I am');
})();
