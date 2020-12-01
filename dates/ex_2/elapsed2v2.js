/* 
Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt 
munkanapok (hétfő-péntek) száma!
*/

'use strict';

function countOfWorkingDays(from, to) {
    let counter = 0;
    for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
        if (day.getDay() > 0 && day.getDay() < 6) {
            counter += 1;
        }
    }
    return counter;
}

const from = new Date(2020, 0, 1);
const to = new Date();
console.log(countOfWorkingDays(from, to));