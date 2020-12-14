/*
Módosítsd a Storage nevű modul 3. feladatát úgy, hogy amennyiben a kérés során 
bármilyen hiba van, szintén a localStorage-ból olvassa ki az adatokat a program!
Ilyenkor jeleníts meg egy üzenetet, hogy az alkalmazás offline!
Amennyiben a localStorage is üres, jelents meg egy szabadon választott 
hibaüzenetet, és alapértelmezetten 5 másodpercenként ismételd meg újra a kérést 
összes 10 alaklommal! Ez a két érték paraméterként megadható legyen! Ha a 10-ből 
bármelyik alakalommal sikeres a kérés, akkor aszerint járj el (kiíratás, 
tárolás, stb.).
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
        ).catch(err => {
            console.error(err);
        });
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