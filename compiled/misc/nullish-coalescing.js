"use strict";
(function () {
    /*
       This helps in dealing with nullish or undefined values.
 
       Nullish Coalescing can be implemented using (??) double question marks operator.
    */
    var DEFAULT = 'DEFAULT';
    var userInput = '';
    var storedDataOne = userInput || DEFAULT;
    console.log({ storedDataOne: storedDataOne }); // 'DEFAULT'
    var storedDataTwo = userInput !== null && userInput !== void 0 ? userInput : DEFAULT;
    console.log({ storedDataTwo: storedDataTwo }); // ''
})();
