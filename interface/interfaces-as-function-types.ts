(() => {
   /*
      Intefaces can be used to describe the stucture of a function since functions are objects too in Javascript.

      Syntax:
         interface interfaceName {
            (args): return_type
         }

      Here, [ (args): return_type ] is signature of an anonymous function.
   */

   // type AddFn = (a: number, b: number) => number;

   interface AddFn {
      (a: number, b: number): number;
   }

   let add: AddFn;

   add = (num1: number, num2: number) => num1 + num2;

   console.log(add(5, 10));
})();
