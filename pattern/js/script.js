'use strict';

// new RegExp('pattern','flags')
// /pattern/f

// const ans = prompt('Введите ваше имя');
// const reg = /n/;
// первое сопадение чувств к регистру
// console.log(ans.search(reg));


// flags
//i - независимо от регистра
//g - несколько одинаковых вхождений
// m = многострочный режим 
// const reg = /n/i;
// console.log(ans.search(reg)); // 1


// const reg = /n/ig;
// console.log(ans.match(reg)); // N N


// определённый участок строки менять на другое выражение
// const pass = prompt('Введите пароль');
// console.log(pass.replace(/./g, "*")); // (точка - все элементы))1- что мы меняем 2- на что мы меняем
// console.log(pass.replace(/\./g, "*")); // (\ & |)экранируем точку - заменяяем только точку


// console.log('12-34-56'.replace(/-/g,":"));  // 12:34:56


// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans)); // true or false ищет совпадение с reg


// class
// \d - ищем цифры
// \w - ищем все буквы или слова
// \s - ищем все проблы
// const ans = prompt('Введите ваше число');
// const reg = /\d/g;
// console.log(ans.match(reg)); // найдёт массив чисел


// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i)); // R2D2


// обратные class
// \D - ищем Не цифры
// \W - ищем Не буквы или слова
// \S - ищем Не проблы
// const str = 'My name is R2D2';
// console.log(str.match(/\W/ig)); // [" ", " ", " "] 
// console.log(str.match(/\D/ig)); // ["M", "y", " "....] 


 












