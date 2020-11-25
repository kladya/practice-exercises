/* 
Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, 
tetszőlegesen méretű egész számot összead, és visszatér az összeadás 
végeredményével! A paraméterként kapott értékek egyszerű number 
típusúak legyenek! Amennyiben bármelyik paraméter értéke, vagy a 
részeredmény meghaladja a biztonságos tartomány, automatikusan 
konvertáljad BigIntbe, és így számoljunk tovább, és természetesen a 
visszatérési érték is BigInt legyen!
*/

'use strict';

const bigIntFunction = (...args) => args.reduce((prev, current) => {
        if ((prev > Number.MAX_SAFE_INTEGER ) || (prev < Number.MIN_SAFE_INTEGER)) {
            prev = BigInt(prev);
            current = BigInt(current);
        }
        return prev + current;
    });

console.log(bigIntFunction(2, 14, 9007199254740991, 6, 234));