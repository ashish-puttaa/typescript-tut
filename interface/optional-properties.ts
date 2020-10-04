(() => {
   /* 
      You can mark properties/methods as optional using '?'

      For properties, the syntax is propertyName?
      Eg:
         interface Employee {
            hobby?: string
         }

      For methods, the syntax is methodName?() {...}
      Eg:
         interface Batsman {
            bowl?(speed: string): void
         }
         
   */

   interface Named {
      readonly name?: string;
      outputName?: string;
   }

   class Person implements Named {
      name?: string;
      age = 30;

      constructor(name?: string) {
         if (name) {
            this.name = name;
         }
      }

      yellName() {
         const name = this.name || 'Anonymous';
         console.log(`I AM ${name.toUpperCase()} !!!`);
      }
   }

   const personOne = new Person('Maxwell');
   personOne.yellName();

   const personTwo = new Person();
   personTwo.yellName();
})();
