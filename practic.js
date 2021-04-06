"use strict";

let numberOfFilms; 

function start() {
 numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
    }
}
start();
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
    let a;
    let b;
    for (let i = 0; i < 310; i++) {
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
}
rememberMyFilms();

function detectPersonaLevel(){
if (personaMovieDB.count <= 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personaMovieDB.count <= 30) {
    alert('Вы класический зритель');
} else if(personaMovieDB.count > 30){
    alert('Вы киноман');
}
}
detectPersonaLevel();


function showMyDB(hidden) {
if(!hidden){
 console.log(personaMovieDB);
}
}
showMyDB(personaMovieDB.privat);

 function writeYourGenres() {
for(let i = 1; i < 4; i++){
    let ganre = prompt(`Ваш любимый жанр под номером ${i}`);
    personaMovieDB.genres[i-1] = ganre;
 }    
}
writeYourGenres();


