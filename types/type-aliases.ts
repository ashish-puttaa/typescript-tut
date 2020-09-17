/*
   Type aliases create a new name for a type. 
   To declare a type, use the 'type' keyword.

   Type aliases are sometimes similar to interfaces.
   But you can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
*/

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
   let result;

   if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
   } else {
      result = input1.toString() + input2.toString();
   }

   if (resultConversion === 'as-number') return +result;
   else return result.toString();
}

const combinedPrices = combine(2.5, 1.75, 'as-number');
console.log(combinedPrices);

const combinedStringPrices = combine(2.5, 1.75, 'as-number');
console.log(combinedStringPrices);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

/*
   Type aliases can be used to "create" your own types.
   You're not limited to storing union types though.
   You can also provide an alias to a (possibly complex) object type.
*/

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

/* For example, you can simplify this code: */

function greet(user: { name: string; age: number }) {
   console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
   return checkAge > user.age;
}

/* To: */

function greetSimplified(user: User) {
   console.log('Hi, I am ' + user.name);
}

function isOlderSimplified(user: User, checkAge: number) {
   return checkAge > user.age;
}
