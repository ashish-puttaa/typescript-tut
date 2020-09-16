/*
   CORE TYPES
   1. number
   2. string
   3. boolean
   4. object
   5. array
*/
function add(num1, num2, printResult, resultPhrase) {
    var sum = num1 + num2;
    if (printResult) {
        console.log(resultPhrase + sum);
    }
    return sum;
}
var number1 = 5;
var number2 = 2.5;
var printResult = true;
var resultPhrase = 'The result is: ';
var result = add(number1, number2, printResult, resultPhrase);
