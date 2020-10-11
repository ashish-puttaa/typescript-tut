(() => {
   /*
      For instance properties, target referts to the  prototype of the object.
      For static properties, target refers to the constructor function.
   */

   function propertyDecorator(target: any, propertyName: string | Symbol) {
      console.log('Property Decorator', { target, propertyName });
   }

   function accessorDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
      console.log('Accessor Decorator', { target, name, descriptor });
   }

   function methodDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
      console.log('Method Decorator', { target, name, descriptor });
   }

   function parameterDecorator(target: any, nameOfMethod: string | Symbol, position: number) {
      console.log('Parameter Decorator', { target, nameOfMethod, position });
   }

   class Product {
      @propertyDecorator
      title: string;
      private _price: number;

      @accessorDecorator
      set price(val: number) {
         if (val > 0) this._price = val;
         else throw new Error('Invalid price - should be positive!');
      }

      constructor(title: string, price: number) {
         this.title = title;
         this._price = price;
      }

      @methodDecorator
      getPriceWithTax(@parameterDecorator tax: number) {
         return this._price * (1 + tax);
      }
   }
})();
