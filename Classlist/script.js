const btns = document.querySelectorAll('button'),
wrapper = document.querySelector('.btn-block');
// // console.log(btns[0].classList.length); // колличесво классов в теге
// // console.log(btns[0].classList.item(0)); // получаем класс по порядку
// console.log(btns[1].classList.add('red', 'blue')); // добавляем новый класс
// // console.log(btns[0].classList.remove('some')); //  удаляем класс
// console.log(btns[0].classList.toggle('some')); // добавляем несуществующий класс(если есть такой класс он его удаляет)

// // проверяем наличие определённого класса если есть возращает true
//  if (btns[1].classList.contains('red')){
//      console.log('red');  
//  }
// при нажати на первую кнопку добавляется новый клас red в кнопке два
btns[0].addEventListener('click', () => {
//    if (!btns[1].classList.contains('red')) {
//       btns[1].classList.add('red');
//    } else{
//        btns[1].classList.remove('red');
//    }
      btns[1].classList.toggle('red');
});
      btns[2].addEventListener('click', () => {
      btns[3].classList.toggle('chartreuse');
});

// устарелый
console.log(btns[0].className);

// ========= делегирование событий ==============
// если элемент подходит под условие то на нём будет срабатывать та функция которую мы передали 
wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains('blue')) {
        if (event.target && event.target.tagName == "BUTTON") {
            console.log('Hello');
        }
    // }
});

// при делегировании события переданна функция также будет срабатывать и на новом созданном элементе
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);









