/*
1. Írj reguláris kifejezést Visa típusú bankkártyák bankszámlaszámának 
validálására! Teszteld is a megoldásod!

2. Írj reguláris kifejezést IP cím validálására! Teszteld is a megoldásod!

3. Írj reguláris kifejezést MAC cím validálására! Teszteld is a megoldásod!

4. Az előző három reguláris kifejezést és a validálást egy objekten belül 
készítsd el. Az objektnek egyen egy rules property-e ami objektmunban 
tárolja a mintákat, és egy validate metódusa, ami paraméterként kap egy 
string értéket, és azt, melyik mintát kell ráilleszteni. A visszatérési 
értéke egy boolean legyen, amnek az értéke attól függ, illeszkedik e a minta.
*/

'use strict';

const validator = {
    rules: {
        visa: /^(\d{4} ){3}\d{4}$/,
        ip: /^(\d{1,3}[.]){3}\d{1,3}$/,
        mac: /^([a-z0-9]{2}:){5}[a-z0-9]{2}$/i,
    },
    validate(input, pattern) {
        if (input.match(this.rules[pattern])) {
            return true;
        }
        return false;
    }
};

console.log(validator.validate('3456 2356 2348 4367', 'visa'));
console.log(validator.validate('192.168.0.0', 'ip'));
console.log(validator.validate('00:1B:44:11:3A:B7', 'mac'));