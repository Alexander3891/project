'use strict';

const persne = {
    name: 'Alex',
    tel: '+7444444',
    parents: {
    mom: 'Olga',
    dad: 'Mike'
}
};
// получаем JSON файл
console.log(JSON.stringify(persne));

// получаем обьект с JSON файла
console.log(JSON.parse(JSON.stringify(persne)));

// копия обьекта с помощью JSON
const clone = JSON.parse(JSON.stringify(persne));