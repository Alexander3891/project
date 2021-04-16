
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

    const promoadv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movielist = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input');
    // checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // без перезагрузки страниці

        const newFilm = addInput.value; // получаем значение из формы
        // const favorite = checkbox.checked; // получаем значения чекед

        movieDB.movies.push(newFilm); // добавляем новый фильм в массив
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movielist); // выводим обновлённый список фильмов
        // event.target.reset(); // сбрасываем форму

    });

    const deleteAdv = function (arr) {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = function (arr) {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
       </li>   
    `;
        });
    }



    //удаление картинок рекламы
    deleteAdv(promoadv);
    // Изменить жанр фильма, поменять "комедия" на "драма"
    // Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    makeChanges();
    // сортируем массив фильмов по алфовиту
    sortArr(movieDB.movies);
    // выводим обновлённый список фильмов
    createMovieList(movieDB.movies, movielist);

});
























