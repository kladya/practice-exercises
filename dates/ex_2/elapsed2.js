/* 
Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt 
munkanapok (hétfő-péntek) száma!
*/

'use strict';

const elapsedWorkDaysInYear = () => {
    const dateNewYear = new Date();
    dateNewYear.setMonth(0);
    dateNewYear.setDate(1);
    const elapsedWeeksFrom1970TillNow = Date.now()/1000/60/60/24/7;
    const elapsedWeeksFrom1970TillNewYear = dateNewYear.getTime()/1000/60/60/24/7;
    const elapsedWeeksInYear = elapsedWeeksFrom1970TillNow - elapsedWeeksFrom1970TillNewYear;
    const elapsedDaysInYear = elapsedWeeksInYear * 7;
    const elapsedWorkDaysInYear = elapsedDaysInYear - elapsedWeeksInYear * 2;
    return elapsedWorkDaysInYear;
}

console.log(elapsedWorkDaysInYear());