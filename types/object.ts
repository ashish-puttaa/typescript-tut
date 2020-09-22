(() => {
   /* 
      Type is inferred by the compiler, which is 'object' due to { }
      The type of the object is also deduced to be
      
      {
         name: string;
         age: number;
      }
   */

   const person1 = {
      name: 'Ash',
      age: 20,
   };

   /* 
      Type is explicitly set to 'object'.
      But the type of the 'object' is considered undenfined/ empty.
   */

   const person2: object = {
      name: 'Ash',
      age: 20,
   };

   /*
      The object type is expicitly set as key, type pairs
   */

   const person: {
      name: string;
      age: number;
   } = {
      name: 'Ash',
      age: 20,
   };

   console.log(person.name);

   /*
      Of course object types can also be created for nested objects.

      Let's say you have this JavaScript object:

      const product = {
         id: 'abc1',
         price: 12.99,
         tags: ['great-offer', 'hot-and-new'],
         details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!',
         },
      };

      This would be the type of such an object:

      {
         id: string;
         price: number;
         tags: string[],
         details: {
            title: string;
            description: string;
         }
      }
   */
})();
