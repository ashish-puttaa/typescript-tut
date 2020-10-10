(() => {
   /* 
      Decorator Factory returns a decorator function.
      They allow us to configure a decorator when assigning it to something.
   */

   function Logger(logString: string) {
      return function (constructor: Function) {
         console.log(logString);
         console.log(constructor);
      };
   }

   @Logger('Logging Person...')
   class Person {
      name = 'Max';

      constructor() {
         console.log('Creating person object...');
      }
   }

   const person = new Person();
   console.log(person.name);
})();
