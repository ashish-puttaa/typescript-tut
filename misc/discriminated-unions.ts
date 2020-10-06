(() => {
   /*
      Discrimiated Unions make implementing type guards easier when using union types.
      They can be used when working with object to ensure 100% type safety.

      Here there is one common property in every object that makes up the union.
      This common property can later be used to check for available properties.
   */

   interface Bird {
      kind: 'bird';
      flyingSpeed: number;
   }

   interface Horse {
      kind: 'horse';
      runningSpeed: number;
   }

   type Animal = Bird | Horse;

   function moveAnimal(animal: Animal) {
      let speed: number;

      switch (animal.kind) {
         case 'bird':
            speed = animal.flyingSpeed;
            break;

         case 'horse':
            speed = animal.runningSpeed;
      }

      console.log('Moving at speed:', speed);
   }

   const parrot: Animal = { kind: 'bird', flyingSpeed: 150 };
   const bojack: Animal = { kind: 'horse', runningSpeed: 300 };

   moveAnimal(parrot);
   moveAnimal(bojack);
})();
