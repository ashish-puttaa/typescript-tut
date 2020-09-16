/* Explicitly declare Array type by suffixing '[]' to a basic type */
var numbers = [1, 2, 3];
var favouriteActivities;
favouriteActivities = ['sport'];
/* Here person.hobbies is of type string[] */
var person = {
    name: 'Ash',
    age: 20,
    hobbies: ['Sports', 'Cooking']
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    /* console.log(hobby.map()); // !! Compile Error !! */
}
