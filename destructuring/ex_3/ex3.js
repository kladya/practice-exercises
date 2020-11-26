/* 
Ments el külön, tesszőleges nevű változókba az alábbi tömb első, 
harmadik, és ötödik indexű elemét!

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
*/

'use strict';

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
    
const [, j2, , j4, , j6] = names;

console.log(j2, j4, j6);