"use strict";

let numberOfFilms;

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
            while(numberOfFilms == '' || numberOfFilms == null || !isNaN(numberOfFilms)){
                numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?","");
            }
    },
    rememberMyFilms:function(){
            let a;
            let b;
            for (let i = 0; i < 3; i++) {
                a = prompt("Один из последних просмотренных фильмов?");
                b = prompt("На сколько оцените его?");
                 
                if(a != null && b != null && a != '' && b != '' && a.length < 50){
                     personaMovieDB.movies[a] = b;
                    console.log(personaMovieDB);
                } else {
                    alert('Ошибка');
                    i--;
                     
                }
            } 
        },
        detectPersonaLevel:function(){
            if (personaMovieDB.count <= 10) {
                alert('Просмотренно довольно мало фильмов');
            } else if (personaMovieDB.count <= 30) {
                alert('Вы класический зритель');
            } else if(personaMovieDB.count > 30){
            //     a/lert('Вы киноман');
            }
            },
    toggleVisibleMyDB: function (hiden) {
        if (!hiden) {
            personaMovieDB.privat = true;
        } else {
            personaMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let ganre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (ganre == null && ganre == '') {
                console.log("Заполните поле");
                i--;
            } else {
                personaMovieDB.genres[i - 1] = ganre;
            
            }
            personaMovieDB.genres.forEach (function(item, i) {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    }
};
personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectPersonaLevel();
personaMovieDB.toggleVisibleMyDB();
personaMovieDB.writeYourGenres();
    



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

