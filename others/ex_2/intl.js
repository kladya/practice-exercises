/* 
Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:

- date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás 
szabályainak megfelelően

- currency(): Visszaadja a paraméterként megadott számot a magyar 
pénzformátumnak megfelelően a Ft végződéssel együtt

- list(): A paraméterként kapott string tömböt visszaadja az alábbi 
formában: első, második és harmadik (Tehát vesszőkkel elválasztva az 
utolsó elem előtt az és szóval)
*/

'use strict';

const myDate = new Date();
const amount = 12667.78;
const stringArray = ['alma', 'körte', 'szőlő'];

const HU = {
    date(myDate) {return new Intl.DateTimeFormat('hu-HU').format(myDate);},
    currency(amount) {
        const huCurrency =
        new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        });
        return huCurrency.format(amount);
    },
    list(stringArray) {
        return [stringArray.slice(0, -1).join(', '), stringArray.slice(-1)[0]].join(stringArray.length < 2 ? '' : ' és ');
    }
};

console.log(HU);
console.log(HU.date(myDate));
console.log(HU.currency(amount));
console.log(HU.list(stringArray));