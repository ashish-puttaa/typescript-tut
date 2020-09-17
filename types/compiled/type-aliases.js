/*
   Type aliases create a new name for a type.
   To declare a type, use the 'type' keyword.

   Type aliases are sometimes similar to interfaces.
   But you can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
*/
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number')
        return +result;
    else
        return result.toString();
}
var combinedPrices = combine(2.5, 1.75, 'as-number');
console.log(combinedPrices);
var combinedStringPrices = combine(2.5, 1.75, 'as-number');
console.log(combinedStringPrices);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
var u1 = { name: 'Max', age: 30 }; // this works!
/* For example, you can simplify this code: */
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
/* To: */
function greetSimplified(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlderSimplified(user, checkAge) {
    return checkAge > user.age;
}
