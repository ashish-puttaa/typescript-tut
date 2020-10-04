"use strict";
(function () {
    /*
       Intefaces can be used to describe the stucture of a function since functions are objects too in Javascript.
 
       Syntax:
          interface interfaceName {
             (args): return_type
          }
 
       Here, [ (args): return_type ] is signature of an anonymous function.
    */
    var add;
    add = function (num1, num2) { return num1 + num2; };
    console.log(add(5, 10));
})();
