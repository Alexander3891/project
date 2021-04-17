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
// let num = 20;

// function showFirstMessege (text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num);

// }
// showFirstMessege ("Hello World");
// console.log(num);

// function calc (a,b){
//    let c = (a+b);
//   return c;
// }

// console.log(calc(5,5));
// console.log(calc(2,5));
// console.log(calc(4,5));
// console.log(calc(10,5));

// function ret() {
//     let num =50;
//     return num;
// }

// const anotherNum = ret();
// console.log (anotherNum);

// const logger = function(){
//   console.log("Hello");  
// };
// logger();


// const cal = a => a+b;
// const calcc = (a,b) => a+b;
// const calccc = (a,b) => {return a+b};
// const call = (a,b) => {
// console.log('1');
//     return a+b;
// };

// //========== number , string ===================

// //=======string=============
// const str = "tesT";
// const err = [1,2,3];
// console.log(str.length);
// console.log(err.length);

// console.log(str.toUpperCase()); // big
// console.log(str.toLowerCase()); // little

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); // place number 5

// const logg = "Hello world";
// console.log(logg.slice(6,11)); // start srtring, end string+1
// console.log(logg.slice(6)); //   with start string to end string  
// console.log(logg.slice(-5), -1); // worl
// console.log(logg.substring(6,11)); // start srtring, end string+1 (without"-")
// console.log(logg.substr(6, 5)); //

//============number============
// const numm = 12.2;
// console.log(Math.round(numm)); // 12
// const test = "12.2px";
// console.log(parseInt(test));// 12
// console.log(parseFloat(test));// 12.2


//================ callback=======================

// function first() {
// setTimeout(function(){
//   console.log(1);
// },500);  
// }
// function second(){
// console.log(2);  
// }

// // first();
// // second();

// function learnJS(lang,callback){
// console.log(`Я учу: ${lang}`);
// callback();
// }
// function done(){
//   console.log('Я прошёл этот курс');
// }

// learnJS('JavaScript', done);

//=============== object =================
// const objectt = {
//     name: 'Alex',
//     width: 1000,
//     hight: 1000,
//     color: {
//         back: 'red',
//         bg: 'green'
//     },
//     makeTest: function () {
//         console.log("Hello");
//     }

// };


// delete objectt.name;
// console.log(objectt);
// objectt.name = 'Vasa';
// console.log(objectt);
// objectt.color.bd = 'red';
// console.log(objectt);
// delete objectt.color.bg;
// console.log(objectt);
// objectt.color.bd = 'blue';
// console.log(objectt);

// console.log(objectt.color.bg);
// console.log(Object.keys(objectt));
// objectt.makeTest();

// for (let key in objectt) {
//     if (typeof(objectt[key]) === 'object') {
//         for (let i in objectt[key]) {
//             console.log(`Ключ ${i} содержит свойства ${objectt[key][i]}`);
//         }
//         } else {
//         console.log(`Ключ ${key} содержит свойства ${objectt[key]}`);
//     }
// }
// const { back, bg } = objectt.color;
// console.log(back, bg);
// console.log(Object.keys(objectt).length); // massiv with kays

//==================== массивы ======================

const arr = [1, 2, 3, 4, 6, 8];
//====== end ======
// arr.pop(); // delete last element from massiv
// console.log(arr);
// arr.push(10); //  add last element in massiv
// console.log(arr);
//======start=======
// arr.unshift(11) ; // add first element in massiv
// console.log(arr);
// arr.shift() ; // delete last element from massiv
// console.log(arr);
// arr.splise(1,1) ; // номер элемента с котрого нужно начать и второй это количество элементов которые нужно удалить

// let arr = [1,2,3];
// arr.splice(0, 1, 5, 6); // начиная с позиции 1, удалить 1 элемент
// console.log( arr ); // осталось ["Я", "JavaScript"]


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let key of arr) {
//     console.log(key);
// }
// console.log(arr.length - 1);

// arr[99] = 100;
// console.log(arr);
//===============================================================
// const aarr = [1, 2, 3, 4, 6, 8];

// aarr.forEach(function (item,i,aarr) {
//     console.log(`${i}: ${item} внутри массива ${aarr}`);
// });
//================================= 


// const str = prompt("", "");
// const products = str.split(", "); // string to massiv 
// products.sort();
// console.log(products);
// console.log(products.join(';')); // massiv to string

const aar = [11, 25, 10, 9, 6, 8];
// aar.sort(compareNum);
// console.log(aar);

// function compareNum(a, b) {
//     return a - b;
// }
aar.reverse();
// console.log(aar);
//================ псевдомассивы =================
// это прасто струкрура упорядоченных элементов которые не содержит свойств массива

// ================== copy object ========================

const obj = {
    a: 5,
    b: 10,
    c: {
        x: 50,
        y: 100
    }
};

const copy = obj; // link
copy.a = 20;

console.log(obj);
console.log(copy);
//===================


function coppy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const objcopy =  coppy(obj);
objcopy.a = 30; // it work
// objcopy.c.x = 500; // it doesnt work
console.log(objcopy);

  //==================
const add = {
    d: 17,
    i: 20
};

console.log(Object.assign(obj, add)); // add new object 

const neww = {

};
console.log(Object.assign(neww, add)); // new object   

const q = {
    one: 1,
    two: 2
};

const newq = { ...q };
console.log(newq);


// ================== copy masive ========================
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // copyy masive
console.log(oldArray);
console.log(newArray);
//================= ES8 (spred operator) ==============
const video = ['yuotube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejornal', 'blogger'],
    internet = [...video, ...blogs, 'vk','facebook'];
console.log(internet);

function log(a, b, c) {
        console.log(a),
        console.log(b),
        console.log(c);
        
}

const num = [2, 5, 7];
log(...num);

const arr2 = ['a', 'b'];
const newArr = [...arr2];
console.log(newArr);



//============== ООП =======================

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const jonh = {
    health: 100
};
// ====old method======
// jonh._proto_ = soldier;

console.log(jonh.armor);
console.log(jonh.sayHello);

// =====new method=====
// Object.setPrototypeOf(jonh,soldier)
const jonh2 = Object.create(soldier);

// console.log(jonh.armor);
// jonh.sayHello();

console.log(jonh2.armor);
jonh2.sayHello();






  






