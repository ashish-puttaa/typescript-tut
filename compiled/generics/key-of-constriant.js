"use strict";
(function () {
    /*
       Here the generic type U only accepts values that are a valid key of the object T
    */
    function extractAndConvert(obj, key) {
        return 'Value: ' + obj[key];
    }
    /*
       The below lines of code throw error due to invalid keys
 
       console.log(extractAndConvert({}, 'name'));
       console.log(extractAndConvert({ age: 21 }, 'name'));
    */
    console.log(extractAndConvert({ name: 'Max' }, 'name'));
})();
