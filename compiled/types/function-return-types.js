"use strict";
(function () {
    /* Return types are inferred by the TS Compiler */
    function addImplicit(num1, num2) {
        return num1 + num2;
    }
    /* To explicity set a return type of a function,
       add a colon (:) followed by the type after the arguments and before the curly braces
    */
    function addExplicit(num1, num2) {
        return num1 + num2;
    }
    /*
       The following function has a return type of 'void'.
    */
    function printStuff(stuff) {
        console.log(stuff);
    }
    /*
       But when run, the above function returns 'undefined'.
       So does that mean 'void' is actually 'undefined' in TS?
       Nope. TS has another dedicated type called 'undefined'.
    */
    var someValue;
    /* This value will forever be undefined. */
    /* Functions cannot return undefined. Is thats the case, use void.
    
       For example, this throws an error.
    
       function sayName(name: string): undefined {
          console.log(name);
       }
    
       But the following works.
    */
    function sayName(name) {
        console.log(name);
        return;
    }
})();
