// Az előző storage modulban lévő 3 file exportáld ki a következőféleképpen
// az első feladatban az exportot használd
// a második feladatnál az export defaultot
// a harmadik feladatban az export as-t, szabadon választott a név
// A 3 modul egy app.js-be legyen beimportálva. Futtasd is le mind a 3 feladatot!

'use strict';

// import * as MyToken from 'token.js';
import {
    setCookie,
    cookieName,
    cookieValue,
    cookieExpirationMinutes
} from '../../web-storages/ex_1/token.js';

import cookieHandler from '../../web-storages/ex_2/cookiehandler.js';

import {
    showUserDB
} from '../../web-storages/ex_3/localstorage.js';


console.log(setCookie(cookieName, cookieValue, cookieExpirationMinutes));


const cookieObject = {
    'viewed': '5',
    'uid': '354774631237',
    'ssid': 'Bx55OWbHJ0Vt_IGIFÍ',
};

console.log(cookieHandler.setCookies(cookieObject));
console.log(cookieHandler.getCookies(cookieObject));
console.log(cookieHandler.saveIntoSessionStorage(cookieObject));
console.log(cookieHandler.deleteCookies());


console.log(showUserDB());