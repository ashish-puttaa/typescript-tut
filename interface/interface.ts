(() => {
   /* 
      Interfaces describe the structure of an object and not anything else.

      They are also be implemented by classes.
      Unlike extending classes, a class can implement multiple interfaces. They need to be comma separated.

      Access modifiers like public, private, protected are not allowed inside interfaces.
      You can set a property as 'readonly' though.

      Interfaces are TypeScript only.
   */

   interface Greetable {
      readonly name: string;

      greet(phase: string): void;
   }

   class Person implements Greetable {
      private age = 30;

      constructor(public name: string) {}

      greet(phrase: string) {
         console.log(phrase, this.name);
      }
   }

   let userOne: Greetable;

   userOne = {
      name: 'Max',
      greet(phrase: string) {
         console.log(phrase, this.name);
      },
   };

   userOne = new Person('Sammy');
   /* userOne.name = 'Sam'; Will not work as 'name' is readonly */

   userOne.greet('Hello, I am');
})();
