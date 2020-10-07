(() => {
   function mergeBad(objA: object, objB: object) {
      return Object.assign(objA, objB);
   }

   const mergedBadObj = mergeBad({ name: 'Max' }, { age: 21 });

   console.log(mergedBadObj); // No autocomplete is provided by TS since the variable is an unknown object

   /* 
      Types for T and U are inferred dynamically. 
      In the below example, the generic types (T and U) accept any type.
   */

   function merge<T, U>(objA: T, objB: U) {
      return Object.assign(objA, objB);
   }

   const mergedObj = merge({ name: 'Max' }, { age: 21 });
   console.log(mergedObj.age);
})();
