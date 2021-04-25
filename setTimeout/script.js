"use strict";

// const timerID = setTimeout(function (text) {
//     console.log(text);
// }, 1000, 'Hello');

// clearInterval(timerID);// stop timer
//==========================================

// function logger() {
//        console.log('text');
// }
// const timer = setTimeout(logger, 2000);
//=========================================

//   const time = setInterval(logg, 4000);
//=========================================

// let i = 0;
// let time;

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//      time  = setInterval(logg, 2000);
// });


// function logg() {
//         if (i == 3) {
//         clearInterval(time);// stop timer
//        }
//     console.log('10');
//     i++;
// }
//========================================

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

//======== Animation ==============
// const btnn = document.querySelector('.btnn');
   
// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btnn.addEventListener('click', myAnimation);


const btnn = document.querySelector('.btnn');
   
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 200) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
// btnn.addEventListener('click', myAnimation);
btnn.addEventListener('click', () => {
     p = setInterval(l, 2000);
});       

let i = 0;
let p;
function l() {
    if (i == 3) {
        clearInterval(p);// stop timer
    } else {
        myAnimation();
        i++;
    }
}





