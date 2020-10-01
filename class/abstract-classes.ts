(() => {
   /* 
      Abstract methods force all classes that extends it's parent class to add and overwrite it.
      They can only be present inside Abstract classes.

      To declare an abstact method, suffix the 'abstact' keyword with the method signature

      Syntax:
         abstract methodName(args): retun_type
   */

   abstract class Waiter {
      constructor(protected name: string) {}

      abstract greetCustomer(message: string): void;
   }

   class McDonaldsWaiter extends Waiter {
      greetCustomer(greeting: string) {
         console.log(greeting);
      }
   }

   const bob = new McDonaldsWaiter('Bob');

   bob.greetCustomer(`Welcome to McDonald's !!`);
})();
