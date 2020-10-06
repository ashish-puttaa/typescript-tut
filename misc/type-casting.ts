(() => {
   /* 
      Type Casting helps you tell TS that some value is of a specific type where TS is not able to detect on its own.

      Types can be cast in two ways:
         1. Prefixing <[type]>
         2. Suffixing "as [type]".

      NOTE:
         - (!) symbol denotes that the expession with never yield a null value.
         - Similarly type casting also denotes that the expession will only yield the specified type and not null.

      So, null checks are not necessary.
   */

   const userInput = document.createElement('input');
   userInput.type = 'text';
   userInput.id = 'user-input';

   document.body.appendChild(userInput);

   /* 
      1. Prefixing <[type]>
   */

   const userInputElementOne = <HTMLInputElement>document.getElementById('user-input');

   /* 
      2. Suffixing "as [type]" 
   */

   const userInputElementTwo = document.getElementById('user-input') as HTMLInputElement;

   userInputElementTwo.value = 'Hi there!';
})();
