"use strict";


const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personaMovieDB.count = +prompt("Сколько фильмов вы уже посмтрели?", '');
        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt("Сколько фильмов вы уже посмтрели?", '');
        }
    },
    rememberMyFilms: function () {
        let a;
        let b;
        for (let i = 0; i < 3; i++) {
            a = prompt("Один из последних просмотренных фильмов?");
            b = prompt("На сколько оцените его?");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personaMovieDB.movies[a] = b;
                console.log(personaMovieDB);
            } else {
                alert('Ошибка');
                i--;

            }
        }
    },
    detectPersonaLevel: function () {
        if (personaMovieDB.count <= 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (personaMovieDB.count <= 30) {
            alert('Вы класический зритель');
        } else if (personaMovieDB.count > 30) {
            alert('Вы киноман');
        }
    },
    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personaMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        // for (let i = 1; i < 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (genre == null || genre == '') {
        //         console.log("Заполните поле");
        //         i--;
        //     } else {
        //         personaMovieDB.genres[i - 1] = genre;

        //     }
        //================================
        for (let i = 1; i < 2; i++) {
            let genres = +prompt(`Введите выщи любимые жанры через запятую`).toLocaleLowerCase();
            if (genres == null || genres == '') {
                console.log("Вы ввели некоректные данные");
                i--;
            } else {
                personaMovieDB.genres = ganres.split(', ');
                personaMovieDB.genres.sort();
            }
        }
        personaMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// personaMovieDB.start();
// console.log(personaMovieDB.count);
// personaMovieDB.rememberMyFilms();
// personaMovieDB.detectPersonaLevel();
// personaMovieDB.toggleVisibleMyDB();
// personaMovieDB.writeYourGenres();




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function start() {
//  numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
//     }
// }
// start();
//=======================================================================
// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//======================================================================
// function rememberMyFilms() {
//     let a;
//     let b;
//     for (let i = 0; i < 3; i++) {
//         a = prompt("Один из последних просмотренных фильмов?");
//         b = prompt("На сколько оцените его?");

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personaMovieDB.movies[a] = b;
//             console.log(personaMovieDB);
//         } else {
//             alert('Ошибка');
//             i--;

//         }
//     }
// }
// rememberMyFilms();
//========================================================================
// function detectPersonaLevel(){
// if (personaMovieDB.count <= 10) {
//     alert('Просмотренно довольно мало фильмов');
// } else if (personaMovieDB.count <= 30) {
//     alert('Вы класический зритель');
// } else if(personaMovieDB.count > 30){
//     alert('Вы киноман');
// }
// }
// detectPersonaLevel();
//========================================================================

// function showMyDB(hidden) {
// if(!hidden){
//  console.log(personaMovieDB);
// }
// }
// showMyDB(personaMovieDB.privat);
//========================================================================
//  function writeYourGenres() {
// for(let i = 1; i < 4; i++){
//     let ganre = prompt(`Ваш любимый жанр под номером ${i}`);
//     personaMovieDB.genres[i-1] = ganre;
//  }    
// }
// writeYourGenres();
//====================================================================

