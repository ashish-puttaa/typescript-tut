(() => {
   /* 
      TS provides some built-in generic types.
      Here we discuss
         1. Partial
         2. Readonly

      For more, please refer Typescript docs -> Utility Types
   */

   /* 1. Partial - takes in a type and makes all its properties optional */

   interface CourseGoal {
      title: string;
      description: string;
      completeUntil: Date;
   }

   function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
      /* 
         return { title, description, completeUntil }; // This works without any problem.
      */
      /* 
         This doesn't

         let courseGoal: CourseGoal = {};
         courseGoal.title = title;
         courseGoal.description = description;
         courseGoal.completeUntil = completeUntil;

         return courseGoal;
      */

      let courseGoal: Partial<CourseGoal> = {};
      courseGoal.title = title;
      courseGoal.description = description;
      courseGoal.completeUntil = completeUntil;

      return courseGoal as CourseGoal;
   }

   /* 2. Readonly - takes in a type and makes the variable readonly */

   const namesEditable = ['Max', 'Anna'];
   namesEditable.push('Sam');
   namesEditable.pop();

   const names: Readonly<string[]> = ['Max', 'Anna'];
   /* names.push('Sam'); // Does not work */
})();
