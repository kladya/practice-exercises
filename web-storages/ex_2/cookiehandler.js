/* 
Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

viewed: 5
uid: 354774631237
ssid: Bx55OWbHJ0Vt_IGIFÍ

Írj egy olyan objectet, az alábbi három metódust megvalósítja: 
- kiolvassa a sütik nevét, és értékét 
- átmenti őket sessionStorage-be 
- törli a sütiket
*/

'use strict';

const cookieObject = {
    'viewed': '5',
    'uid': '354774631237',
    'ssid': 'Bx55OWbHJ0Vt_IGIFÍ',
};

const cookieHandler = {
    setCookies(cookieObject) {
        const cookieArray = [...Object.entries(cookieObject)];
        cookieArray.forEach(item => document.cookie = `${item[0]}=${item[1]}`);
    },

    getCookies(cookieObject) {
        const cookies = document.cookie
            .split('; ')
            .map(item => item.split('='));
        return cookies;
    },
    
    saveIntoSessionStorage(cookieObject) {
        this.getCookies().forEach(item => sessionStorage.setItem(`${item[0]}`, `${item[1]}`));
    },

    deleteCookies(cookieObject) {
        this.getCookies().forEach(item => {
            document.cookie = `${item[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        });
    }
};

console.log(cookieObject);
console.log(cookieHandler);
console.log(cookieHandler.setCookies(cookieObject));
console.log(cookieHandler.getCookies(cookieObject));
console.log(cookieHandler.saveIntoSessionStorage(cookieObject));
console.log(cookieHandler.deleteCookies());



export default cookieHandler;