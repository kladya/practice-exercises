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

const dateFunction = myDate => {
    const monthNamesLong = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
    const monthNamesShort = ['jan', 'febr', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'];
    const monthLong = (monthNamesLong[myDate.getMonth()]);
    const monthShort = (monthNamesShort[myDate.getMonth()]);
    const resultObject = {
        short: `${myDate.getFullYear()}. ${monthShort}. ${myDate.getDate()}. ${myDate.getHours()}:${myDate.getMinutes()}`,
        long: `${myDate.getFullYear()}. ${monthLong} ${myDate.getDate()}. ${myDate.toLocaleTimeString('hu')}`
    }
    return resultObject;
}

console.log(dateFunction(myDate));