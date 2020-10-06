"use strict";
(function () {
    /*
       Index types allow creating objects that are flexible regarding the properties they might hold.
 
       They can be used when you dont know in advanced how many properties an object will have or the names the properties will have.
 
       They are defined using square brackets.
       
       Syntax:
          [key: type_of_key]: type_of_value
       
       Here 'type_of_key' is the value type of the property name.
       In an object this type can be strings, numbers or Symbols. Booleans are not allowed.
    */
    /*
       The above snippet denotes that every property added to the object based on Error Containter must contain the following.
          1. Property name that can interpreted as a string.
          2. Value for the property that is also of type string.
 
       Note that numbers can be intepreted as strings too. So this will be a valid type for property name in this case.
       If the type of the property name was set to be a number, then adding a property 'email' will not work.
 
       You can add predefined properties only if they are of the same type.
 
       For example, this is allowed:
 
          interface ErrorContainer {
             id: string;
             [prop: string]: string;
          }
       
       But this is not:
 
          interface ErrorContainer {
             id: number;
             [prop: string]: string;
          }
 
    */
    var errorBag = {
        1: 'Not a valid email',
        userName: 'Not a valid userName',
    };
})();
