(() => {
   /* 
      Inhertitence 
   */

   class Department {
      // public readonly id: string;
      // public name: string;
      protected employees: string[] = [];

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
         console.log('Employees: ', this.employees.length);
         console.log(this.employees);
      }
   }

   class ITDepartment extends Department {
      admins: string[];

      constructor(id: string, admins: string[]) {
         super(id, 'IT');
         this.admins = admins;
      }
   }

   const itDep = new ITDepartment('111', ['Tez', 'Zet']);
   itDep.describe();

   class AccoutingDepartment extends Department {
      constructor(id: string, private reports: string[]) {
         super(id, 'Accounting');
      }

      addEmployee(name: string) {
         if (name === 'Max') {
            return;
         }

         this.employees.push(name);
      }

      addReport(text: string) {
         this.reports.push(text);
      }

      printReports() {
         console.log(this.reports);
      }
   }

   const accountingDep = new AccoutingDepartment('AD7', []);

   accountingDep.addReport('Something went wrong...');

   accountingDep.addEmployee('Max');
   accountingDep.addEmployee('Tez');

   accountingDep.printReports();
   accountingDep.printEmployeeInfo();
})();
