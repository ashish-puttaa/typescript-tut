(() => {
   /* 
      Literal types are used to declare an exact value which a string, number, or boolean must have.
   */

   function combine(
      input1: number | string,
      input2: number | string,
      resultConversion: 'as-number' | 'as-text'
   ) {
      let result;

      if (typeof input1 === 'number' && typeof input2 === 'number') {
         result = input1 + input2;
      } else {
         result = input1.toString() + input2.toString();
      }

      if (resultConversion === 'as-number') return +result;
      else return result.toString();
   }

   const combinedPrices = combine(2.5, 1.75, 'as-number');
   console.log(combinedPrices);

   const combinedStringPrices = combine(2.5, 1.75, 'as-number');
   console.log(combinedStringPrices);

   const combinedNames = combine('Max', 'Anna', 'as-text');
   console.log(combinedNames);
})();
