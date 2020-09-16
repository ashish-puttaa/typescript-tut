/*
   Tuple is a fixed-type, fixed-length array.
   Declare tuples by specifying comma-separated basic types inside angular brackets [ ].
*/
var role = [2, 'author'];
// role[1] = 20; // !! Compile Error !!
/* Pushing is allowed in tuples for some reason. Idk why */
role.push('admin'); // !! Does not throw Compile Error !!
/* Same example, but inside an object */
var person = {
    name: 'Ash',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
