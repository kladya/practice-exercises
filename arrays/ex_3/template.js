/* 3. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket 
tartalmazó tömböt kap  (Input ellenőrzést nem kell végezni.), és 
visszaad egy html template-et (string)! A html template egy 
felsorolt lista, aminek a listaelemei a kapott tömb értékeit 
tartalmazzák.
Pl.:

// ha ez a tömb
const content = ['első', 'második', 'harmadik'];

// akkor ez legyen a visszatérési érték:
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul> 
*/

'use strict';

const sampleArray = ['első', 'második', 'harmadik', 'negyedik', 'ötödik'];

const templateFunction = sampleArray => {
    let template = '<ul>' + '\n';
    sampleArray.forEach(item => template += '\t' + '<li>' + item + '</li>' + '\n');
    template += '</ul>';
    return template;
}

console.log(templateFunction(sampleArray)); 
