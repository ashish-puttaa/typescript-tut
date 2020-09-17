/*
   Union types are used to declare more than one data type for a variable or a function parameter.
   The pipe symbol '|' is used to union two types.
*/
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedPrices = combine(2.5, 1.75);
console.log(combinedPrices);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
