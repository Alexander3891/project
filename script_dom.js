'use strict';

// const box = document.getElementById('box'); //id
// console.log(box);
// //===========================================
// // если много кнопок
// const btns = document.getElementsByTagName('button'); // tag
// console.log(btns);// masiv
// console.log(btns[3]);

// const btns1 = document.getElementsByTagName('button')[1]; // tag
// console.log(btns1);
// //===========================================

// const circles = document.getElementsByClassName('circle');// class
// console.log(circles[1]);




// //========================================== new (id, tag, class) ==================================

// const hearts = document.querySelectorAll('.heart');// masiv
// console.log(hearts);
// // hearts.forEach(function (item) {
// //     console.log(item);
// // }
// hearts.forEach(item => {
//     console.log(item);
// }
// );
// //===========================
// const oneHart = document.querySelector('.heart'); // первый элемент
//     console.log(oneHart);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
    // изменене стилей одного элемента
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width:500px';// можно с бэктиками с переменными

btns[1].style.borderRadius = '100px';
circle[1].style.backgroundColor = 'red';

// изменене стилей нескольких элемента
// for (let i = 0; i < hearts.length; i++) {
    // hearts[i].style.backgroundColor = 'blue';
//  }

hearts.forEach(item => {
   item.style.backgroundColor = 'blue'; 
});
//======================= Создание новых элементов ===================================
const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

//=========================== Работа с css class на странице ===================================
div.classList.add('black'); // добавление класса 
 
// ====== добавление элемента ============
// document.body.append(div); // добавляем в конец body наш новый div 
// wrapper.append(div); // добавляем в конец wrapper наш новый div 
// wrapper.prepend(div); // добавляем в начало wrapper наш новый div
// hearts[1].before(div);
// hearts[2].after(div);

// ========= удаление элемента ============
// circle[0].remove();

// ========== замена одного элемента другим ================
// hearts[0].replaceWith(circle[1]);
     
// +++++++++++++++++++ УСТАРЕВШИЕ КОНСТРУКЦИИ ++++++++++++++++++++
 

    















