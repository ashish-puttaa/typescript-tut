"use strict";
(function () {
    /*
       You can set constraints regarding the types your generic types can be based on.
       To do this, use the 'extends' keyword after the generic type you want to constraint.
    */
    function merge(obj1, obj2) {
        return Object.assign(obj1, obj2);
    }
    /* const mergedObj = merge({ name: 'Max' }, 21); // Throws an error */
    var mergedObj = merge({ name: 'Max' }, { age: 21 });
    console.log(mergedObj);
})();
