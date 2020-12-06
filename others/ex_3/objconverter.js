/* 
Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal 
rendelkezik:

arrayToMap(array)
arrayToSet(array)
setToMap(set)
setToArray(set)
mapToArray(map)
mapToSet(map)

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik 
összetett adattípusból konvertálják át az adatokat egy másikba. 
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set 
object.
*/

'use strict';

const array = [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]];
const map = new Map().set('firstName', 'John').set('lastName', 'Doe').set('age', 30);
const set = new Set().add('John').add('Doe').add(30);

const objectConverter = {
    arrayToMap(array) {return new Map(array)},
    arrayToSet(array) {return new Set(array.flat().filter(item => array.flat().indexOf(item) % 2 === 1))},
    setToMap(set) {return new Map([...set.entries()])},
    setToArray(set) {return [...set.entries()].flat().filter((item, index) => [...set.entries()].flat().indexOf(item) === index)},
    mapToArray(map) {return [...map.entries()]},
    mapToSet(map) {return new Set([...map.values()])},
};

console.log(objectConverter);
console.log(objectConverter.arrayToMap(array));
console.log(objectConverter.arrayToSet(array));
console.log(objectConverter.setToMap(set));
console.log(objectConverter.setToArray(set));
console.log(objectConverter.mapToArray(map));
console.log(objectConverter.mapToSet(map));