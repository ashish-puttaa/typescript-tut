(() => {
   /* 
      Decorators are very useful for meta-programming.
      They are used to write code which is easier to use for other developers.

      A decorator is just a function that you apply to something.

      -'@' is used to denote a decorator.
      - Anything directly after '@' must point to a function which is a decorator.

      Decorators are run when a class is defined, not when they are used.
   */

   function Logger(constructor: Function) {
      console.log('logging');
      console.log(constructor);
   }

   @Logger
   class Person {
      name = 'Max';

      constructor() {
         console.log('Creating person object...');
      }
   }

   const person = new Person();
   console.log(person.name);
})();
