"use strict";
(function () {
    /* Never indiates that the function never produces a value */
    function generateError(message, code) {
        throw { message: message, errorCode: code };
    }
    function infiniteLoop() {
        while (true) { }
    }
    generateError('An error occurred!', 500);
})();
