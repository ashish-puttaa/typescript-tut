(() => {
   /* 
      Intersection Types allows us to combine other types
      To intersect '&' symbol is used.

      When intersecting a union type with another, only the common (intersection) of both types is considered
   */

   type Admin = {
      name: string;
      privileges: string[];
   };

   type Employee = {
      name: string;
      startDate: Date;
   };

   type ElevatedEmployee = Admin & Employee;

   const employeeOne: ElevatedEmployee = {
      name: 'Max',
      privileges: ['create-server'],
      startDate: new Date(),
   };

   type Combinable = string | number;
   type Numeric = number | boolean;

   type Universal = Combinable & Numeric;
})();
