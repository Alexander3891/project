
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
        addInput = addForm.querySelector('.adding__input'),
        // add = document.querySelector('.promo__genre').innerText;
        checkbox = addForm.querySelector('[type="checkbox"]');
    // d = add.innerHTML; // innerText
    // console.log(add);



    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // без перезагрузки страниці

        let newFilm = addInput.value; // получаем значение из формы
            const favorite = checkbox.checked; // получаем значения чекед(true or false)
        if (newFilm) {
            if (newFilm.length < 21) {
                movieDB.movies.push(newFilm); // добавляем новый фильм в массив
            } else {
                newFilm = `${newFilm.slice(0, 10)}...`;
                movieDB.movies.push(newFilm); // добавляем новый фильм в массив
            }
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movielist); // выводим обновлённый список фильмов
        }
            event.target.reset(); // сбрасываем форму
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
        sortArr(movieDB.movies);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
       </li>   
       `;
       });
// удаляем элемент в массиве при нажатии на корзину
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movielist);
        

            });
             
        });
    }

    //удаление картинок рекламы
    deleteAdv(promoadv);
    // Изменить жанр фильма, поменять "комедия" на "драма"
    // Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    makeChanges();
    // сортируем массив фильмов по алфовиту
    // sortArr(movieDB.movies);
    // выводим обновлённый список фильмов
    createMovieList(movieDB.movies, movielist);

});
























