/* Enums are used to create automatically enumerated global constant identifiers */

/*  In vanilla JS, global constants were created as: */

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person1 = {
   name: 'Ash',
   age: 20,
   hobbies: ['Sports', 'Cooking'],
   role: [AUTHOR, 'author'],
};

/* 
   Delare Enums using the 'enum' keyword. 
   Enums start from 0 by default.
   You can assign values explicily too. The values can be of any type.
*/

enum Role {
   ADMIN,
   READ_ONLY,
   AUTHOR,
   USER = 999,
   UNIT_TESTER,
   QA_TESTER,
   RANDOM = 'random',
}

const person2 = {
   name: 'Ash',
   age: 20,
   hobbies: ['Sports', 'Cooking'],
   role: [Role.AUTHOR, 'author'],
};

console.log({
   admin: Role.ADMIN,
   readOnly: Role.READ_ONLY,
   author: Role.AUTHOR,
   user: Role.USER,
   unitTester: Role.UNIT_TESTER,
   qaTester: Role.QA_TESTER,
   random: Role.RANDOM,
});
