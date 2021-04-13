'use strict';

const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
    // alert('Click');
// };
// заменяет первое
// btn.onclick = function() {
    // alert('Second Click');
// };

//============== правильно =================

// btn[2].addEventListener('click', () => {
    // alert('Click');
// });
// btn[1].addEventListener('mouseenter', () => {
    // alert('Second Click');
// });

// let i = 0;
// const deleteElement = (e) => {
    // e.target.remove(); // при наведении удалит элемент
    // console.log(e.currentTarget);
    // console.log(e.type);

    // i++;
    // if (i == 1) {
    // btn[0].removeEventListener('mouseenter', deleteElement); // удаляем обработчик
// };


// btn[0].addEventListener('click', deleteElement); // первым выполняется вложенное событие
// overlay.addEventListener('click', deleteElement); // вторым выполняется по иерархии следующее по DOM дереву


//======================= Отмена стандартного пповедения ==========================

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
    // event.preventDefault(); // отменяем переход по ссылке

    // console.log(event.target); // действие которое произойдёт после события
// });

// ====== назначение события на несколько элементов одновременно ======
const hello = function () {
    console.log("HELLO!");
};

btn.forEach((item, i) => {
    item.addEventListener('click', hello, {once: true}); // once: true - клик выполнится только один раз 
    
});









