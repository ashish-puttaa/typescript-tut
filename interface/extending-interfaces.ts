(() => {
   /* 
      Just like classes, interfaces can extend other interfaces.
   */

   interface Named {
      readonly name: string;
   }

   interface Greetable extends Named {
      greet(phase: string): void;
   }

   class Person implements Greetable {
      private age = 30;

      constructor(public name: string) {}

      greet(phrase: string) {
         console.log(phrase, this.name);
      }
   }

   let userOne: Greetable = new Person('Sammy');
   userOne.greet('Hello, I am');
})();
