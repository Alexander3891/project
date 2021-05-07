'use strict';

//===================== filter ====================
// возвращает новый масив
const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});
 
console.log(shortNames);//['Ivan', 'Anna']

//===================== map ====================
// позволяет изменить каждый элемент массива

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item  => {
    return item.toLowerCase();
});
console.log(result);

//===================== every / some ====================
//some - если хотябы один элемент подходит то возвращает true
// every - если все элементы подходят под условие вернёт true
const number = [4, 'qwq', 'gfgf'];
console.log(number.some(item => typeof (item) === 'number'));
console.log(number.every(item => typeof(item) === 'number'));

//===================== reduce ====================
// для того чтобы схлопывать или собирать массив в одно целое

const arr = [4,5,1,3,2,6];


const res = arr.reduce((sum,current) => sum + current);












