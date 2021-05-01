'use strict';

const persne = {
    name: 'Alex',
    tel: '+7444444'
};
// получаем JSON файл
console.log(JSON.stringify(persne));

// получаем обьект с JSON файла
console.log(JSON.parse(JSON.stringify(persne)));
