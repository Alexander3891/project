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

 const promoadv = document.querySelectorAll('.promo__adv img'),
       poster = document.querySelector('.promo__bg'), 
       genre = poster.querySelector('.promo__genre'),
       movielist = document.querySelector('.promo__interactive-list');
 
 promoadv.forEach(item => {
          item.remove();     
 });

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
poster.style.backgroundImage = 'url("img/bg.jpg")';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов */

// +++++++++ 1 method +++++++++++++
// movieDB.movies.sort();
// const interactiveList = document.querySelectorAll('.promo__interactive-list li');
// interactiveList.forEach((item,i)  => {
    // item.innerHTML =i+1 + ". "  + movieDB.movies[i];
// });

// +++++++++ 2 method +++++++++++++
// movielist.innerHTML = "";
// movieDB.movies.forEach((film, i) => {
    // movielist.innerHTML += `
//    <li class="promo__interactive-item">${i+1} ${film}
    //  <div class="delete"></div>
//    </li>   
    // `;
// });
    
    






















