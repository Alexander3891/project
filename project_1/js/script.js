'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movielist = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input');
        // checkbox = addForm.querySelector('[type="checkbox"]');
    
       addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value; // получаем значение из формы
        // const favorite = checkbox.checked; // получаем значения чекед

        movieDB.movies.push(newFilm); // добавляем новый фильм в массив
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies, movielist);
        // event.target.reset(); // сбрасываем форму

    });
    //удаление картинок рекламы
    const deleteAdv = function (arr) {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(promoadv);
 
    const makeChanges = () => {
        // 2) Изменить жанр фильма, поменять "комедия" на "драма"
        genre.textContent = 'драма';

        // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    };
    makeChanges();

    const sortArr = function (arr) {
        arr.sort();
    };
    sortArr(movieDB.movies);
//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов */

// +++++++++ 1 method +++++++++++++
// movieDB.movies.sort();
// const interactiveList = document.querySelectorAll('.promo__interactive-list li');
// interactiveList.forEach((item,i)  => {
//     item.innerHTML = i+1 + ". "  + movieDB.movies[i];
// });

// +++++++++ 2 method +++++++++++++

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        
    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
          <div class="delete"></div>
       </li>   
    `;
});         
    }
    createMovieList(movieDB.movies, movielist);

});























