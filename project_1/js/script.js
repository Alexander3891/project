/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const promoadv = document.querySelector('.promo__adv');
const promo = promoadv.querySelectorAll('img');

console.log(promoadv);
console.log(promo);
 promo[0].remove();
 promo[1].remove();
 promo[2].remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

