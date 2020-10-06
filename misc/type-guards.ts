(() => {
   /*
      Type guards help us with Union types

      Type guards can be implemented using
         1. typeof
         2. key in object - for objects
         3. instanceof - for objects
   */

   /*
      Type guard using typeof
   */

   type Combinable = string | number;

   function add(a: Combinable, b: Combinable) {
      if (typeof a === 'string' || typeof b === 'string') {
         return a.toString() + b.toString();
      }

      return a + b;
   }

   /* 
      Type guard using 'key in object' check
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
   type UnknownEmployee = Admin | Employee;

   function printEmployeeInformation(emp: ElevatedEmployee | UnknownEmployee) {
      console.log('Name', emp.name);

      if ('privileges' in emp) console.log('Privileges', emp.privileges);
      if ('startDate' in emp) console.log('Start Date :', emp.startDate);
   }

   printEmployeeInformation({ name: 'Max', startDate: new Date() });

   /* 
      Type guard using instanceof
   */

   class Car {
      drive() {
         console.log('Driving a car...');
      }
   }

   class Truck {
      drive() {
         console.log('Driving a truck...');
      }

      loadCargo(amount: number) {
         console.log('Loading cargo of quantity', amount);
      }
   }

   type Vehicle = Car | Truck;

   const v1 = new Car();
   const v2 = new Truck();

   function useVehicle(vehicle: Vehicle) {
      vehicle.drive();
      if (vehicle instanceof Truck) vehicle.loadCargo(15);
   }

   useVehicle(v1);
   useVehicle(v2);
})();
