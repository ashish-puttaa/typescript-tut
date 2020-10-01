"use strict";
(function () {
    /*
       Static properties/methods cannot be accessed from non-static parts of the class.
 
       'this' refers to the instance based on the class.
       And static properties/methods are not available inside instances.
       Static properties/methods are detached from instances.
 
       To use the static properties inside the class, use the class name instead.
 
       Instead of this.staticPropertyName, use className.staticPropertyName
    */
    var Department = /** @class */ (function () {
        function Department() {
            /* console.log(this.fiscalYear); Won't work */
            console.log(Department.fiscalYear);
        }
        Department.createEmployee = function (name) {
            return { name: name };
        };
        Department.fiscalYear = 2020;
        return Department;
    }());
    var employeeOne = Department.createEmployee('Sam');
    console.log(employeeOne);
    console.log(Department.fiscalYear);
})();
