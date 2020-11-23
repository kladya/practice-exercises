/* 1. Feladat
Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész 
számokat tartalmazó tömböt! (Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig 
térjen vissza az elemek összegével! */

'use strict';

const intArray = [1, 2, 3, 4, 5];

const resultFunction = intArray => {
    const resultArray = intArray
        .map(item => item * 1.27)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    return resultArray;
}

console.log(resultFunction(intArray));