"use strict";
(function () {
    /*
       Function Overloading allows us to define muliple function signatures for the same function.
    */
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    var result = add('Kevin', 'Hart');
})();
