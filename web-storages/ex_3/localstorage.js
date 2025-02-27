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

const userHandler = () => {
    const getServerData = (url) => {
        let fetchInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        return fetch(url, fetchInit).then(
            data => data.json(),
            err => console.error(err)
        );
    }

    const fillData = (data) => {
        let container = document.querySelector('.container')
        data.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.lastName}, ${element.firstName}`;
            container.appendChild(p);
        });
        localStorage.setItem('userList', JSON.stringify(
            data
        ));
    }

    const showData = () => {
        getServerData('http://localhost:3000/users').then(
            data => fillData(data)
        );
    }
    
    const showDataFromLS = () => {
        let html = localStorage.getItem('users');
        if (html) {
            fillData(data, JSON.parse(html));
        } else showData();
    }
    showDataFromLS();
}

userHandler();




export {
    userHandler as showUserDB
};