"use strict";
(function () {
    /*
       You can mark properties/methods as optional using '?'
 
       For properties, the syntax is propertyName?
       Eg:
          interface Employee {
             hobby?: string
          }
 
       For methods, the syntax is methodName?() {...}
       Eg:
          interface Batsman {
             bowl?(speed: string): void
          }
          
    */
    var Person = /** @class */ (function () {
        function Person(name) {
            this.age = 30;
            if (name) {
                this.name = name;
            }
        }
        Person.prototype.yellName = function () {
            var name = this.name || 'Anonymous';
            console.log("I AM " + name.toUpperCase() + " !!!");
        };
        return Person;
    }());
    var personOne = new Person('Maxwell');
    personOne.yellName();
    var personTwo = new Person();
    personTwo.yellName();
})();
