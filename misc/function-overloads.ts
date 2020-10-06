(() => {
   /* 
      Function Overloading allows us to define muliple function signatures for the same function.
   */

   type Combinable = string | number;

   function add(a: number, b: number): number;
   function add(a: number, b: string): string;
   function add(a: string, b: number): string;
   function add(a: string, b: string): string;

   function add(a: Combinable, b: Combinable) {
      if (typeof a === 'string' || typeof b === 'string') {
         return a.toString() + b.toString();
      }

      return a + b;
   }

   const result = add('Kevin', 'Hart');
})();
