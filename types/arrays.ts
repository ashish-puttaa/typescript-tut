(() => {
   /* Explicitly declare Array type by suffixing '[]' to a basic type */

   const numbers: number[] = [1, 2, 3];

   let favouriteActivities: string[];
   favouriteActivities = ['sport'];

   /* Here person.hobbies is of type string[] */

   const person = {
      name: 'Ash',
      age: 20,
      hobbies: ['Sports', 'Cooking'],
   };

   for (const hobby of person.hobbies) {
      console.log(hobby.toUpperCase());
      /* console.log(hobby.map()); // !! Compile Error !! */
   }
})();
