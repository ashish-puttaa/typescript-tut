let userInput: unknown;

userInput = 5;
userInput = 'Sam';

let userName: string;

/* 
   Unknowns are not assignable to type 'string' 
   userName = userInput; // throws an error

   To assign an unknown value to a value with a fixed type,
   you need to check its type before assigning to another variable like the snippet below 
*/

if (typeof userInput === 'string') {
   userName = userInput;
}
