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
// for (let i = 0; i <h1 hearts.length; i++) {
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

wrapper.append(div); // добавляем в конец wrapper наш новый div 
// wrapper.appendChild(div); // старый метод

// wrapper.prepend(div); // добавляем в начало wrapper наш новый div
// hearts[1].before(div);
// hearts[2].after(div);
// wrapper.insertBefore(div,hearts[0]);// старый метод

// ========= удаление элемента ============
// circle[0].remove();
// wrapper.removeChild(hearts[1]);// старый метд

// ========== замена одного элемента другим ================
// hearts[0].replaceWith(circle[1]);
// wrapper.replaceChild(circle[0], hearts[0]); // старый метод     


// +++++++++++++++++++ Добавление текста или html тэга в элемент ++++++++++++++++++++
 div.innerHTML = "Hello world";
// div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "Hello</h1>"; // только с текстом без html

// div.insertAdjacentHTML('beforebegin', '<h2>Hello2</h2>'); //вставляет перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello2</h2>'); // вставляет в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello2</h2>'); // вставяем в конец элемента  
div.insertAdjacentHTML('afterend', '<h2>Hello2</h2>'); // вставляем после элемента


// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //узлы которые являются детьми у body
// console.log(document.body.firstChild); //узлы которые являются детьми у body
// console.log(document.body.lastChild); //узлы которые являются детьми у body
// console.log(document.body.lastElementChild); //узлы которые являются детьми у body


// console.log(document.querySelecto r('#current').parentElement);// получаем класс первого родителя
// console.log(document.querySelector('#current').parentNode.parentNode);// получаем класс второго родителя

//<li data-current="3">3</li> вместо id можно устанавливать дата атрибуты
// console.log(document.querySelector('[data-current="3"]'));// обращаемся по дата атрибуту 
// console.log(document.querySelector('[data-current="3"]').nextSibling);// получаем следующую строку  (пробел)  
// console.log(document.querySelector('[data-current="3"]').previousSibling);// получаем предыдущий строку  (пробел) 
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);// получаем следующий элемент li(пробел)  
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);// получаем следующий элемент li(пробел)  
//======================================

//получаем только элементы страницы без текста
// for (let node of document.body.childNodes) { 
//     if (node.nodeName == '#text') { 
//         continue;
//     }
//     console.log(node);

// }

    
    















