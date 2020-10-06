"use strict";
(function () {
    /*
       Optional Chaining is used when you don't know with certainty whether a property exists in an object.
 
       Question marks (?) are used to optionally chain properties
    */
    var _a;
    var fetchedUserData = {
        id: 'u1',
        name: 'Max',
        job: { title: 'CEO', description: 'My own company' },
    };
    console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
    /*
       This is kinda similar to:
          console.log(fetchedUserData && fetchedUserData.job && fetchedUserData.job.title)
     */
})();
