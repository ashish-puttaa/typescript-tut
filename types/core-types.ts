/*
   CORE TYPES
   1. number
   2. string
   3. boolean
*/

function add(num1: number, num2: number, printResult: boolean, resultPhrase: string) {
   const sum = num1 + num2;

   if (printResult) {
      console.log(resultPhrase + sum);
   }

   return sum;
}

const number1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'The result is: ';

const result = add(number1, number2, printResult, resultPhrase);
