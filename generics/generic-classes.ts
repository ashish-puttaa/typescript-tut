(() => {
   /* 
      Adding generic types to classes makes them strongly typed
   */

   class DataStorage<T> {
      private data: T[] = [];

      addItem(item: T) {
         this.data.push(item);
      }

      removeItem(item: T) {
         const index = this.data.indexOf(item);
         if (index === -1) return;

         this.data.splice(index, 1);
      }

      getItems() {
         return [...this.data];
      }
   }

   const textStorage = new DataStorage<string>();

   textStorage.addItem('Max');
   textStorage.addItem('Sam');
   /* textStorage.addItem(10); // Does not work */

   textStorage.removeItem('Max');
   console.log(textStorage.getItems());

   const numberStorage = new DataStorage<number>();

   /*
      The below snippet does not work since the class currenlty does not handle objects.
      
         const objectStorage = new DataStorage<object>();
         
         objectStorage.addItem({ name: 'Max' });
         objectStorage.addItem({ name: 'Sam' });
         
         objectStorage.removeItem({ name: 'Sam' });
         console.log(objectStorage.getItems());
      
      To avoid this you can set the generic type to only contain any of the basic types.

         class DataStorage<T extends string | number | boolean> {...}
      */
})();
