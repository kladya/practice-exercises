/* 
Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot 
merge-öl össze, majd visszatér ezzel az objektummal! Az összefűzést 
úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek 
legyenek (0, 1, 2, stb.) amik tartalmazzák a részobjektumokat!

Pl.:
    // A két objektum:
    const johnDoe = { 
        firstName: 'Jonh',
        lastName: 'Doe'
    };

    const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }

    // A végeredmény:
    {
        0: { 
            firstName: 'Jonh',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
*/

'use strict';

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
};

const objMerger = (johnDoe, janeDoe) => ({...[johnDoe, janeDoe]});
console.log(objMerger(johnDoe, janeDoe));
