"use strict";
(function () {
    /*
       Discrimiated Unions make implementing type guards easier when using union types.
       They can be used when working with object to ensure 100% type safety.
 
       Here there is one common property in every object that makes up the union.
       This common property can later be used to check for available properties.
    */
    function moveAnimal(animal) {
        var speed;
        switch (animal.kind) {
            case 'bird':
                speed = animal.flyingSpeed;
                break;
            case 'horse':
                speed = animal.runningSpeed;
        }
        console.log('Moving at speed:', speed);
    }
    var parrot = { kind: 'bird', flyingSpeed: 150 };
    var bojack = { kind: 'horse', runningSpeed: 300 };
    moveAnimal(parrot);
    moveAnimal(bojack);
})();
