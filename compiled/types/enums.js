"use strict";
(function () {
    /* Enums are used to create automatically enumerated global constant identifiers */
    /*  In vanilla JS, global constants were created as: */
    var ADMIN = 0;
    var READ_ONLY = 1;
    var AUTHOR = 2;
    var person1 = {
        name: 'Ash',
        age: 20,
        hobbies: ['Sports', 'Cooking'],
        role: [AUTHOR, 'author'],
    };
    /*
       Delare Enums using the 'enum' keyword.
       Enums start from 0 by default.
       You can assign values explicily too. The values can be of any type.
    */
    var Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
        Role[Role["USER"] = 999] = "USER";
        Role[Role["UNIT_TESTER"] = 1000] = "UNIT_TESTER";
        Role[Role["QA_TESTER"] = 1001] = "QA_TESTER";
        Role["RANDOM"] = "random";
    })(Role || (Role = {}));
    var person2 = {
        name: 'Ash',
        age: 20,
        hobbies: ['Sports', 'Cooking'],
        role: [Role.AUTHOR, 'author'],
    };
    console.log({
        admin: Role.ADMIN,
        readOnly: Role.READ_ONLY,
        author: Role.AUTHOR,
        user: Role.USER,
        unitTester: Role.UNIT_TESTER,
        qaTester: Role.QA_TESTER,
        random: Role.RANDOM,
    });
})();
