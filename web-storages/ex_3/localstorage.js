/* 
Adott egy json file, ami valójában egy tömb, lastName, firstName 
propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json 
tartalmát, és a firstName, lastName párosokat egymás alá beleírja 
egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzést 
a localStorage-ben, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ban van 
users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak 
akkor küldjön ajax kérést.
*/

'use strict';

const getServerData = (url) => {
    let fetchInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };
    return fetch(url, fetchInit).then(
        data => data.json(),
        err => console.error(err)
    )
}

document.querySelector('.btn').addEventListener('click', function() {
    getServerData('http://localhost:3000/users').then(
        data => fillData(data)
    )
})

const fillData = (data) => {
    let container = document.querySelector('.container')
    for (let row of data) {
        let div = createAnyELement('div')
        for (let k in row) {
            let p = createAnyELement('p')
            p.textContent = row[k];
            div.appendChild(p)
        }
        container.appendChild(div)
    }
    localStorage.setItem('userList', JSON.stringify(
        data
    ))
};

const createAnyELement = (name, attributes) => {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes(k));
    }
    return element;
}