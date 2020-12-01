/* 
Írj egy függvény kifejezést, ami a paraméterként megadott tömbből 
eltávolítja a duplikált elemeket! A függvény visszatérési értéke a 
duplikált elemektől mentes új tömb!
*/

'use strict';

const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6];

const duplicatesFilter = arr => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(duplicatesFilter(arr));
