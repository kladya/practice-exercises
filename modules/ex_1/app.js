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

import cookieObject from '../../web-storages/ex_2/cookiehandler.js';

import {
    localStorageFunction1,
    localStorageFunction2,
    localStorageFunction3
} from '../../web-storages/ex_3/localstorage.js';