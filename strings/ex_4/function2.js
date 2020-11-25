/* 
Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem 
minden egyes részfeladat legyen külön függvénybe szervezve, tehát:

függvény: első paraméterként egy karaktert kap, a többi paraméter pedig 
tetszőleges számú tömb, amik stringeket tartalmaznak! A függvény összefűzi 
egy tömbbe az összes elemet és visszaadja ezt az új tömböt

függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő 
elemeket és visszaadja az új tömböt

függvény: egy paraméterként kapott tömb összes elem elejéről és végéről 
levágja a space karaktereket, visszaad egy új tömböt

Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat 
hozz létre! 
Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon!
*/

'use strict';

let char = 'ú';
const arr1 = ['nagyon', '   álmos   ', 'vagyok'];
const arr2 = ['    de', 'nagyon', 'holnapután', 'megígérem'];
const arr3 = [',', 'hogy   ', 'felkelek.'];

const concater = (char, ...arrays) => {
    const concatedArray = [char, ...arr1, ...arr2, ...arr3];
    return concatedArray;
}

const concatedArray = concater(char, arr1, arr2, arr3);
console.log(concatedArray);

const noRepeater = array => {
    const noRepeatArray = array.filter((item, index) => array.indexOf(item) === index);
    return noRepeatArray;
}

const noRepeatArray = noRepeater(concatedArray);
console.log(noRepeatArray);

const whiteSpaceTrimmer = array => {
    const noWhiteSpaceArray = array.map(item => item.trim());
    return noWhiteSpaceArray;
}

const noWhiteSpaceArray = whiteSpaceTrimmer(noRepeatArray);
console.log(noWhiteSpaceArray);