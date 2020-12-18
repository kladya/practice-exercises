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

// import { userHandler } from './userHandler.js';

userHandler.showList('.list', 2, 5);




const userHandler = {
    // Delay time in seconds.
    delay: 5,
    repeatCount: 10,
    url: 'http://localhost:3000/users',
    repeatNum: 0,
    // 1. Adatok lekérése.
    // 2. Ha nem sikerül, bizonyos időközönként megismételni, bizonyos számban.
    // 3. Kiírom, hogy az alkalmazás offline módban van.
    // 4. Ha az összes kérés sikeretelen volt, akkor betöltöm a localStorage -ból.
    // 5. Ha ez sem sikerült, akkor üres tömböt adok vissza.
    async getList() {
        while (this.repeatNum < this.repeatCount) {
            try {
                const response = await fetch(this.url);
                const data = await response.json();
                this.repeatNum = 0;
                return data;
            } catch(e) {
                this.repeatNum++;
                await new Promise( res => setTimeout(res, this.delay * 1000) );
                return this.getList();
            }
        }

        this.repeatNum = 0;
        alert('Az alkalmazás offline.');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres.');
            return [];
        }
    },
    showList(parent, delay, repeatCount) {
        this.delay = delay;
        this.repeatCount = repeatCount;
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.users = JSON.stringify(list);
            },
            err => console.error(err)
        );
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
}

