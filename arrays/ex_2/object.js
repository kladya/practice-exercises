/* 2. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként kap egy 
tetszőleges típusú elemeket tartalmazó tömböt, és egy tetszőleges 
primitív értéket.! A függvény visszatérési értéke egy objektum, 
ami a következő propertyket tartalmazza:

exists: Értéke true/false attól függően, hogy a második 
paraméterként megadott érték megtalálható e a tömbben

index: Értéke egy szám, ha második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, hanem akkor 
-1 legyen az értéke

allElementIsANumber: Értéke true/false attól függően, hogy a tömb 
minden eleme number típusú e vagy sem

someElementIsANumber: Értéke true/false attól függően, hogy a 
tömbben van e number típusú elem vagy sem */

'use strict';

const sampleArray = ['John', 'Doe', 23, 1997, true, undefined];
let value = 'Doe';

const resultFunction = (sampleArray, value) => {
    const resultObject = {
        exists: sampleArray.some(item => item === value),
        index: sampleArray.findIndex(item => item === value),
        allElementIsANumber: sampleArray.every(item => typeof item === 'number'),
        someElementIsANumber: sampleArray.some(item => typeof item === 'number')
    }
    return resultObject;
}

console.log(resultFunction(sampleArray, value));
