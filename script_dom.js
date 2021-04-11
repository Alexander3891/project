'use strict';

const box = document.getElementById('box'); //id
console.log(box);
//===========================================
// если много кнопок
const btns = document.getElementsByTagName('button'); // tag
console.log(btns);// masiv
console.log(btns[3]);

const btns1 = document.getElementsByTagName('button')[1]; // tag
console.log(btns1);
//===========================================

const circles = document.getElementsByClassName('circle');// class
console.log(circles[1]);




//========================================== new (id, tag, class) ==================================

const hearts = document.querySelectorAll('.heart');// masiv
console.log(hearts);
// hearts.forEach(function (item) {
//     console.log(item);
// }
hearts.forEach(item => {
    console.log(item);
}
);
//===========================
const oneHart = document.querySelector('.heart'); // первый элемент
    console.log(oneHart);

    