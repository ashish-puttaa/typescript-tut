(() => {
   /* 
      This helps in dealing with nullish or undefined values.

      Nullish Coalescing can be implemented using (??) double question marks operator.
   */

   const DEFAULT = 'DEFAULT';
   const userInput = '';

   const storedDataOne = userInput || DEFAULT;
   console.log({ storedDataOne }); // 'DEFAULT'

   const storedDataTwo = userInput ?? DEFAULT;
   console.log({ storedDataTwo }); // ''
})();
