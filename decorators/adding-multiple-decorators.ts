(() => {
   /* 
      You can add multiple decorators by stacking them.
      The execution order of decorators is bottom-up.
      The execution order of decorator factorues is top-down.

      Decorator factories run before the decorators itself.

      In the below code, 'WithTemplate' runs before 'Logger'.
   */

   function Logger(logString: string) {
      console.log('Logger decorator factory');

      return function (_: Function) {
         console.log('Logger decorator');
         console.log(logString);
      };
   }

   function WithTemplate(template: string, hookId: string) {
      console.log('WithTemplate decorator factory');

      return function (constructor: any) {
         console.log('WithTemplate decorator');

         const hookEl = document.getElementById(hookId);
         const obj = new constructor();

         if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = obj.name;
         }
      };
   }

   @Logger('Logging Person...')
   @WithTemplate('<h1>Person</h1>', 'app')
   class Person {
      name = 'Sammy';

      constructor() {
         console.log('Creating person object...');
      }
   }

   const person = new Person();
   console.log(person.name);
})();
