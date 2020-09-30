"use strict";
(function () {
    /*
       Inside a class, setters and setters are most defined in the form of functions
 
       get getterName() {}
       set setterName() {}
 
       Outside the class, they need to be used as follows
 
       Getters : obj.getter;
       Setters : obj.setter = value
    */
    var Painter = /** @class */ (function () {
        function Painter(name, colors) {
            this.name = name;
            this.colors = colors;
            this.lastColor = colors[colors.length - 1];
        }
        Object.defineProperty(Painter.prototype, "mostRecentColor", {
            get: function () {
                if (this.lastColor) {
                    return this.lastColor;
                }
                throw new Error('No color found');
            },
            set: function (color) {
                if (!color) {
                    throw new Error('Please pass in a color!');
                }
                this.colors.push(color);
                this.lastColor = color;
            },
            enumerable: false,
            configurable: true
        });
        return Painter;
    }());
    var painterBob = new Painter('Bob', ['red', 'green']);
    painterBob.mostRecentColor = 'blue';
    console.log(painterBob.mostRecentColor);
})();
