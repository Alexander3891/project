"use strict";

// if (1) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// const num = 50  ;
// if (num < 49) {
//     console.log('Error');
// } else if (num >100) {
//     console.log('Very big');
// } else  {
//     console.log('Good');
// }

// (num === 50) ? console.log('Good') : console.log("Error");
  
// let number = 500;
// switch (number) {
//     case 49: 
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Good');
//         break;
//     case 55:
//         console.log('Very big number');
//         break;
//     case 40:
//         console.log('Very little number');
//         break;
//     default:
//         console.log('It isnt right number');
//         break;
// }

// let num = 100;

// switch (num) {
//     case 50:
//         console.log('Good');
//         break;
//     case 55:
//         console.log('Very big number');
//         break;
//     case 45:
//         console.log('Very little number');
//         break;
//     default:
//         console.log('It isnt right number');
//         break;
// }

// let num = 50;
// while (num < 50) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 50);

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// ========== function ====================
let num = 20;

function showFirstMessege (text) {
    console.log(text);
    // let num = 10;
    console.log(num);

}
showFirstMessege ("Hello World");
console.log(num);

function calc (a,b){
   let c = (a+b);
  return c;
}

// console.log(calc(5,5));
// console.log(calc(2,5));
// console.log(calc(4,5));
// console.log(calc(10,5));

function ret() {
    let num =50;
    return num;
}

const anotherNum = ret();
console.log (anotherNum);

const logger = function(){
  console.log("Hello");  
};
logger();


const cal = a => a+b;
const calcc = (a,b) => a+b;
const calccc = (a,b) => {return a+b};
const call = (a,b) => {
console.log('1');
    return a+b;
};

  

























