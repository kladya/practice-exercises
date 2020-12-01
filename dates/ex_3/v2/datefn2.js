/* 
Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési 
értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban 
tartalmazza a paraméterként kapott dátumot:

- short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, 
    kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap 
    száma, majd az idő)
*/

'use strict';

const myDate = new Date(2020, 0, 11, 14, 20, 10);

const dateFormats = myDate => {
    const shortOption = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const longOption = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return {
        short: myDate.toLocaleDateString('hu-HU', shortOption),
        long: myDate.toLocaleDateString('hu-HU', longOption)
    };
}

console.log(dateFormats(myDate));
console.log(dateFormats(new Date()));