/* 
Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt 
másodperceinek a száma!
*/

'use strict';

const elapsedSecondsInYear = () => {
    const dateNewYear = new Date();
    dateNewYear.setMonth(0);
    dateNewYear.setDate(1);
    const elapsedSecondsFrom1970TillNow = Date.now()/1000;
    const elapsedSecondsFrom1970TillNewYear = dateNewYear.getTime()/1000;
    return elapsedSecondsFrom1970TillNow - elapsedSecondsFrom1970TillNewYear;
}

console.log(elapsedSecondsInYear());

