'use strict';


// function myModule(){
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.goodbye = function () {
//         console.log('bye!');
//     };
// }
// module.exports = myModule;

export let one =1;

let two = 2;
export {two};

// export function sayHi() {
//     console.log('Hello');
// }
// ЭКСПОРТ ПО УМОЛЧАНИЮ
export default function sayHi() {
    console.log('Hello');
}