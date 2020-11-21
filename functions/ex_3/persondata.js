/* 3. Feladat
Hozz létre egy függvény kifejezést arrow functionnel! 
A függvény neve personDataLog legyen. A függvény paraméterként 
egy objektumot vár, ami egy firstname, lastname, és age 
tulajdonságokkal rendelkezik. Amennyiben bármelyik tulajdonság 
hiányozna úgy rendre a következő alapértelemezett értékeket 
vegyék fel: - firstname: John - lastname: Doe - age: 33

A függvény kiírja az adott illető adatai a konzolra az adott 
formátumban:
My name is firstname, lastname. I'm age years old.
A firstname, lastname és age helyére a paraméterként kapott 
objektum tulajdonságok értékét kell behelyettesíteni. */

'use strict';

let personDataLog = ({firstName = 'John', lastName = 'Doe', age = 33} = {}) =>
    'My name is ' + firstName + ' ' + lastName + '.' + " I'm " + age + ' ' + 'years old.';


console.log(personDataLog()); 
console.log(personDataLog({firstName: 'Paul', lastName: 'Simone', age: 67}));
