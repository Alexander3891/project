"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?");
//     c = prompt("Один из последних просмотренных фильмов?"),
//     d = prompt("На сколько оцените его?");
    // personaMovieDB.movies[a] = b;
    // personaMovieDB.movies[c] = d;
// console.log(personaMovieDB);
// console.log(personaMovieDB.movies);

//1,2
let a;
let b;
for (let i = 0; i < 1; i++) {
    a = prompt("Один из последних просмотренных фильмов?");
    b = +prompt("На сколько оцените его?");
     
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 11) {
        personaMovieDB.movies[a] = b;
        console.log(personaMovieDB);
    } else {
        alert('Ошибка');
        i--;
         
    }
}
     
     
//3
if (personaMovieDB.count <= 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personaMovieDB.count <= 30) {
    alert('Вы класический зритель');
} else if(personaMovieDB.count > 30){
    alert('Вы киноман');
}