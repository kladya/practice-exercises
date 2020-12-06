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

document.cookie = 'viewed=5';
document.cookie = 'uid=354774631237';
document.cookie = 'ssid=Bx55OWbHJ0Vt_IGIFÍ';

const cookieHandler = {
    getCookie(name) {
        const keyValuePairs = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}=`))
        return keyValuePairs ? keyValuePairs.split('=') : '';
    },
    saveIntoSessionStorage(name) {
        const keyValuePairs = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}=`))
        const [key, value] = keyValuePairs.split('=');
        return sessionStorage.setItem(key, value);
    },
    deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`; 
    },
};

console.log(cookieHandler.getCookie('viewed'));
console.log(cookieHandler.saveIntoSessionStorage('uid'));
console.log(cookieHandler.deleteCookie('ssid'));