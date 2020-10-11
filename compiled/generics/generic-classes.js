"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function () {
    /*
       Adding generic types to classes makes them strongly typed
    */
    var DataStorage = /** @class */ (function () {
        function DataStorage() {
            this.data = [];
        }
        DataStorage.prototype.addItem = function (item) {
            this.data.push(item);
        };
        DataStorage.prototype.removeItem = function (item) {
            var index = this.data.indexOf(item);
            if (index === -1)
                return;
            this.data.splice(index, 1);
        };
        DataStorage.prototype.getItems = function () {
            return __spreadArrays(this.data);
        };
        return DataStorage;
    }());
    var textStorage = new DataStorage();
    textStorage.addItem('Max');
    textStorage.addItem('Sam');
    /* textStorage.addItem(10); // Does not work */
    textStorage.removeItem('Max');
    console.log(textStorage.getItems());
    var numberStorage = new DataStorage();
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
