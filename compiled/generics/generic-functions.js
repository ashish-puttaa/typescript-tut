"use strict";
(function () {
    function mergeBad(objA, objB) {
        return Object.assign(objA, objB);
    }
    var mergedBadObj = mergeBad({ name: 'Max' }, { age: 21 });
    console.log(mergedBadObj); // No autocomplete is provided by TS since the variable is an unknown object
    /*
       Types for T and U are inferred dynamically.
       In the below example, the generic types (T and U) accept any type.
    */
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    var mergedObj = merge({ name: 'Max' }, { age: 21 });
    console.log(mergedObj.age);
})();
