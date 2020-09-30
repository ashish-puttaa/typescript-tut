(() => {
   /* 
      Inside a class, setters and setters are most defined in the form of functions

      get getterName() {}
      set setterName() {}

      Outside the class, they need to be used as follows

      Getters : obj.getter;
      Setters : obj.setter = value 
   */

   class Painter {
      private lastColor: string;

      get mostRecentColor() {
         if (this.lastColor) {
            return this.lastColor;
         }
         throw new Error('No color found');
      }

      set mostRecentColor(color: string) {
         if (!color) {
            throw new Error('Please pass in a color!');
         }
         this.colors.push(color);
         this.lastColor = color;
      }

      constructor(private name: string, private colors: string[]) {
         this.lastColor = colors[colors.length - 1];
      }
   }

   const painterBob = new Painter('Bob', ['red', 'green']);

   painterBob.mostRecentColor = 'blue';

   console.log(painterBob.mostRecentColor);
})();
