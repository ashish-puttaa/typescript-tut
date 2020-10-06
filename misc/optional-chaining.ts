(() => {
   /* 
      Optional Chaining is used when you don't know with certainty whether a property exists in an object.

      Question marks (?) are used to optionally chain properties 
   */

   const fetchedUserData = {
      id: 'u1',
      name: 'Max',
      job: { title: 'CEO', description: 'My own company' },
   };

   console.log(fetchedUserData?.job?.title);

   /* 
      This is kinda similar to:
         console.log(fetchedUserData && fetchedUserData.job && fetchedUserData.job.title)
    */
})();
