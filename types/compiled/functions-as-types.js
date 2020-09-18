function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ', num);
}
/* TThe 'Function' type instructs the TS Compiler that whatever's stored in combineValues must be a 'function' */
var combineValues;
combineValues = add;
combineValues = console.log; // Does not throw an errors
console.log(combineValues(8, 8));
/* To be more specific, use the arrow function notation, (args) => return_type */
/*
   () => number says that the function accepts no arguments and a return type of 'number'.
*/
var specificCombinedValues;
specificCombinedValues = add;
/* specificCombinedValues = console.log; // Throws an error */
console.log(specificCombinedValues(5, 5));
