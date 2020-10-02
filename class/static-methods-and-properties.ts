(() => {
   /* 
      Static properties/methods cannot be accessed from non-static parts of the class.

      'this' refers to the instance based on the class.
      And static properties/methods are not available inside instances.
      Static properties/methods are detached from instances.

      To use the static properties inside the class, use the class name instead.

      Instead of this.staticPropertyName, use className.staticPropertyName

      Note: 
         'this' inside a static method gives access to the class itself.
         'this' inside a non-static method gives access to the instance of the class.
   */

   class Department {
      static fiscalYear = 2020;

      constructor() {
         /* console.log(this.fiscalYear); Won't work */
         console.log(Department.fiscalYear);
      }

      static createEmployee(name: string) {
         return { name };
      }
   }

   const employeeOne = Department.createEmployee('Sam');

   console.log(employeeOne);

   console.log(Department.fiscalYear);
})();
