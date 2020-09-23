(() => {
   /*
      public - default modifier. Properties are accessible outside the class
      private - Propertires are accessible only inside the class
      readonly - Marks the property as 'readonly' i.e. the value of the property cannot be modified outside the class


      You can initialize class properties as :

      class A {
         private num1: number;
         private num2: number;
         public readonly result: number;

         constructor(n1: number, n2: number) {
            this.num1 = n1;
            this.num2 = n2;
            this.result = num1 + num2;
         }
      }

      const obj = new A(1, 2);
      console.log(this.result);
      

      You can shorten this into :

      class A {
         public readonly result: number;

         constructor(private num1: number, private num2: number) {
            this.result = num1 + num2;
         }
      }

      const obj = new A(1, 2);
      console.log(this.result);
   */

   class Department {
      // public readonly id: string;
      // public name: string;
      private employees: string[] = [];

      constructor(public readonly id: string, public name: string) {
         // this.id = id
         // this.name = name;
      }

      describe(this: Department) {
         console.log(`Department ${this.id} : ${this.name}`);
      }

      addEmployee(employee: string) {
         this.employees.push(employee);
      }

      printEmployeeInfo() {
         console.log(this.employees.length);
         console.log(this.employees);
      }
   }

   const accounting = new Department('3', 'Accounting');

   /* accounting.id = 2;  Throws an error. 'id' is readonly. */

   accounting.addEmployee('Max');
   accounting.addEmployee('Xam');

   /* accounting.employees[2] = 'asd'; Throws an error. 'employees' is private. */

   console.log(accounting);

   accounting.describe();
   accounting.printEmployeeInfo();

   // const accountingCopy = { name: 'asdasd', describe: accounting.describe };

   // accountingCopy.describe();
})();
