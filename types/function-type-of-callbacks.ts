(() => {
   /*
      You can use the arrow function notation to specifiy function types of callbacks
   */

   function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
      const result = num1 + num2;
      cb(result);
   }

   /* This works */

   addAndHandle(5, 10, (result) => console.log(result));

   /*
      This does not work

      addAndHandle(5, 10, (result, i) => console.log(result, i))
   */

   /* 
      In the case of callbacks, the 'void' return type does not mean that the cb wont return anything.
      It means that the function does not do anything with return value of the callback
   */
})();
