"use strict";
(function () {
    /* Generic Type is a type which is connected with another type.
 
       Some generic types included in TS are Array, Promise.
    */
    var names = ['Max', 'Manuel', 10];
    var promise = new Promise(function (resolve, reejct) {
        setTimeout(function () {
            resolve('This is done!');
        }, 2000);
    });
    promise.then(function (data) {
        console.log(data.split(' '));
    });
})();
