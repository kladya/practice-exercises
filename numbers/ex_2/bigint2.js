/* 
Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt 
típusú adatokat is elfogadjon! Amennyiben valamelyik paraméter BigInt, 
úgy a number-eket is automatikusan konvertálja BigInt-é!
*/

'use strict';

const bigIntFunction2 = (...args) => args.reduce((prev, current) => {
        if (typeof current === 'bigint') {
            prev = BigInt(prev);
        }
        if ((prev > Number.MAX_SAFE_INTEGER ) || (prev < Number.MIN_SAFE_INTEGER)) {
            prev = BigInt(prev);
            current = BigInt(current);
        }
        return prev + current;
    });

console.log(bigIntFunction2(2, 9007199254740991, 9007199254741248n, 6, 234));