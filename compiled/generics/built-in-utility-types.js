"use strict";
(function () {
    /*
       TS provides some built-in generic types.
       Here we discuss
          1. Partial
          2. Readonly
 
       For more, please refer Typescript docs -> Utility Types
    */
    function createCourseGoal(title, description, completeUntil) {
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
        var courseGoal = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = completeUntil;
        return courseGoal;
    }
    /* 2. Readonly - takes in a type and makes the variable readonly */
    var namesEditable = ['Max', 'Anna'];
    namesEditable.push('Sam');
    namesEditable.pop();
    var names = ['Max', 'Anna'];
    /* names.push('Sam'); // Does not work */
})();
