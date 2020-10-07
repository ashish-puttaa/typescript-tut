(() => {
   /* Generic Type is a type which is connected with another type.

      Some generic types included in TS are Array, Promise.
   */

   const names: Array<string | number> = ['Max', 'Manuel', 10];

   const promise: Promise<string> = new Promise((resolve, reejct) => {
      setTimeout(() => {
         resolve('This is done!');
      }, 2000);
   });

   promise.then((data) => {
      console.log(data.split(' '));
   });
})();
