'use strict';
// // записать данные в localStorage
// localStorage.setItem('number', '5');

// // получить элемент из localStorage
// console.log(localStorage.getItem('number'));

// // удалить элемент из localStorage
// localStorage.removeItem('number');

// // очистить полностью localStorage
// localStorage.clear();

//=========================================================

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
 if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'red';
    }

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});


const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone); 
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));




