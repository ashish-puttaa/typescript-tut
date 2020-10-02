(() => {
   /* 
      Singletons ensure that you always hove exactly only one instance of a certain class.
      They can be implemented by making the constructor private.

      Private Constructors are only accessible inside the class declaration

      Note: 
         'this' inside a static method gives access to the class itself.
         'this' inside a non-static method gives access to the instance of the class.
   */

   class DellPrinter {
      private static instance: DellPrinter;

      private constructor(private company: string, private modalNumber: string) {}

      static getInstance() {
         if (this.instance) {
            return this.instance;
         }

         this.instance = new DellPrinter('Dell', 'M502');
         return this.instance;
      }
   }

   const printerOne = DellPrinter.getInstance();
   const printerTwo = DellPrinter.getInstance();

   console.log(printerOne === printerTwo);
})();
