(() => {
   function add(num1: number, num2: number) {
      return num1 + num2;
   }

   function printResult(num: number): void {
      console.log('Result: ', num);
   }

   /* The 'Function' type instructs the TS Compiler that whatever's stored in combineValues must be a 'function' */

   let combineValues: Function;

   combineValues = add;
   combineValues = console.log; // Does not throw an errors

   console.log(combineValues(8, 8));

   /* To be more specific, use the arrow function notation, (args) => return_type */

   /* 
      () => number says that the function accepts no arguments and a return type of 'number'.
   */

   let specificCombinedValues: (a: number, b: number) => number;

   specificCombinedValues = add;
   /* specificCombinedValues = console.log; // Throws an error */

   console.log(specificCombinedValues(5, 5));
})();
