"use strict";
(function () {
    /*
       Type guards help us with Union types
 
       Type guards can be implemented using
          1. typeof
          2. key in object - for objects
          3. instanceof - for objects
    */
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    function printEmployeeInformation(emp) {
        console.log('Name', emp.name);
        if ('privileges' in emp)
            console.log('Privileges', emp.privileges);
        if ('startDate' in emp)
            console.log('Start Date :', emp.startDate);
    }
    printEmployeeInformation({ name: 'Max', startDate: new Date() });
    /*
       Type guard using instanceof
    */
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.drive = function () {
            console.log('Driving a car...');
        };
        return Car;
    }());
    var Truck = /** @class */ (function () {
        function Truck() {
        }
        Truck.prototype.drive = function () {
            console.log('Driving a truck...');
        };
        Truck.prototype.loadCargo = function (amount) {
            console.log('Loading cargo of quantity', amount);
        };
        return Truck;
    }());
    var v1 = new Car();
    var v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck)
            vehicle.loadCargo(15);
    }
    useVehicle(v1);
    useVehicle(v2);
})();
