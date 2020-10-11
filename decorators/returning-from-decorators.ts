(() => {
   /*
      You can return value from the following decorators
         1. Class Decorators - return a new constructor function
         2. Method Decorators - return a new PropertyDescriptor
         3. Accessor Decorators - return a new PropertyDescriptor

      You can return values for other decorators like Property and Parameter Decorators, but they are ignored by TS.
   */

   /* 1. Returning from Class Decorators */

   function WithTemplate(template: string, hookId: string) {
      return function <T extends { new (...args: any[]): { name: string } }>(
         originalConstructor: T
      ) {
         return class extends originalConstructor {
            constructor(..._: any[]) {
               super();

               const hookEl = document.getElementById(hookId);

               if (hookEl) {
                  hookEl.innerHTML = template;
                  hookEl.querySelector('h1')!.textContent = this.name;
               }
            }
         };
      };
   }

   @WithTemplate('<h1>Person</h1>', 'app')
   class Person {
      name = 'Sammy';

      constructor() {
         console.log('Creating person object...');
      }
   }

   const person = new Person();
   console.log(person.name);

   /* 2. Returning from Method Decorators */

   /* 
      In the event listener, 'this' refers to the target of the event. 
      So this.message will return undefined.

      You can do the following JS to fix this
      - convert showMessage to an arrow function
      - bind the object to the method => p.showMessage.bind(p)
      
      This snippet demonstrates how to use a method decorator to bind 'this' to a method.
   */

   function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      const adjustedDescriptor: PropertyDescriptor = {
         configurable: true,
         enumerable: false,
         get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
         },
      };

      return adjustedDescriptor;
   }

   class Printer {
      message = 'This works!';

      @Autobind
      showMessage() {
         console.log(this.message);
      }
   }

   const p = new Printer();

   const button = document.querySelector('button')!;

   button.addEventListener('click', p.showMessage);
})();
