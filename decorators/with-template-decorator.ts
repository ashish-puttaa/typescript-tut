(() => {
   function WithTemplate(template: string, hookId: string) {
      return function (constructor: any) {
         const hookEl = document.getElementById(hookId);
         const obj = new constructor();

         if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = obj.name;
         }
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
})();
