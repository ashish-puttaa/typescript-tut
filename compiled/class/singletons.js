"use strict";
(function () {
    /*
       Singletons ensure that you always hove exactly only one instance of a certain class.
       They can be implemented by making the constructor private.
 
       Private Constructors are only accessible inside the class declaration
 
       Note:
          'this' inside a static method gives access to the class itself.
          'this' inside a non-static method gives access to the instance of the class.
    */
    var DellPrinter = /** @class */ (function () {
        function DellPrinter(company, modalNumber) {
            this.company = company;
            this.modalNumber = modalNumber;
        }
        DellPrinter.getInstance = function () {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new DellPrinter('Dell', 'M502');
            return this.instance;
        };
        return DellPrinter;
    }());
    var printerOne = DellPrinter.getInstance();
    var printerTwo = DellPrinter.getInstance();
    console.log(printerOne === printerTwo);
})();
