"use strict";
(function () {
    function countAndDescribe(element) {
        var descriptionText = 'Got no value.';
        if (element.length === 1) {
            descriptionText = "Got 1 element.";
        }
        else if (element.length > 1) {
            descriptionText = "Got " + element.length + " elements.";
        }
        return [element, descriptionText];
    }
    /* console.log(countAndDescribe(100)); // Does not work */
    console.log(countAndDescribe('Hey there'));
    console.log(countAndDescribe(['Sports', 'Cooking']));
    console.log(countAndDescribe([]));
})();
