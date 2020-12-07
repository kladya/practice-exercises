/* 
Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, 
ami 15 perc után lejár: 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
*/

'use strict';

const setCookie = (name, value, expirationMinutes) => {
    const myDate = new Date();
    myDate.setMinutes(myDate.getMinutes() + expirationMinutes);
    const expires = myDate.toString();
    document.cookie = `${name}=${value}; expires=${expires}; HttpOnly`;
}

let cookieName = 'token';
let cookieValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
let cookieExpirationMinutes = 15;
console.log(setCookie(cookieName, cookieValue, cookieExpirationMinutes));


// Alternatively you can use the max-age parameter to set an expiration expressed in number of seconds:

// document.cookie = 'name=Flavio; max-age=3600'        //expires in 60 minutes
// document.cookie = 'name=Flavio; max-age=31536000'    //expires in 1 year



export { 
    setCookie,
    cookieName,
    cookieValue,
    cookieExpirationMinutes
};