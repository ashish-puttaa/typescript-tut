(() => {
   /* 
      Here the generic type U only accepts values that are a valid key of the object T
   */

   function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
      return 'Value: ' + obj[key];
   }

   /* 
      The below lines of code throw error due to invalid keys

      console.log(extractAndConvert({}, 'name'));
      console.log(extractAndConvert({ age: 21 }, 'name'));
   */

   console.log(extractAndConvert({ name: 'Max' }, 'name'));
})();
