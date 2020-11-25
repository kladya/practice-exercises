/* 
Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli 
számot átkonvertálja kettes, nyolcas, és tizenhatos számrendszerbe is! 
Ezeket az értékeket pedig egy objectbe adja vissza! A property-k neve 
legyen: binary, octal, hexa.
*/

'use strict';

const converter = (number) => {
    const numSystems = {
        binary: +(number.toString(2)),
        octal: +(number.toString(8)),
        hexa: +(number.toString(16))
    };
    return numSystems;
}

console.log(converter(32));