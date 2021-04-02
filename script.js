"use strict";
//не допускает нечётности в предыдущих версиях языка



let c = 12;
console.log(c);


let number = 5;

//константы нельзя менять
const leftBorderWidth = 1;


number = 10;
console.log(number);


// в обьекте можно менять константы
const obj = {
    a: 20,
};

obj.a = 10;
// console.log(obj);


//переменная видна до её обьявления (всплытие переменных). Нужно использовать let
var namme = 'Ivan';
 
// +++++++++  Числа  +++++++++++++
let number1 = 4;

let number2 = 4.2;
// console.log(-4 / 0);
// console.log('string'*9);
//=========================================================
// (4/0) -  infinity - при делении на ноль(бесконечность)
// ('string'*9) -  NaN (not a Number) - не является числом  
// console.log(per);
//=========================================================

// +++++++++  Строки  +++++++++++++

const persone = "Alex";
const persone1 = 'Alex';
const persone2 = `Alex`;

// console.log(persone);

// +++++++++  Булевые значения  +++++++++++++

const boll = true;
const bol = false;

// +++++++++  null undefined   +++++++++++++

// null - чегото не суествует
// console.log(perso); //  null

// undefined - что-то существует но у него нет значения
let und;   
// console.log(und); //  undefined 

//+++++++++++++  if else +++++++++++++++++
let mesedge = 'Привет';

// let mesedgeEnd;
// if (5 > 1) {
//     mesedgeEnd = ', Вася!';
// } else { 
//     mesedgeEnd = ', Оля!';
// }

let mesedgeEnd = (15 > 10)? ',Вася': ',Оля';

 mesedge += mesedgeEnd;
// console.log(mesedge);

// ----- принудительное прерывание цикла
let num = 0;
for (num = 0; num < 5; num++) { 
    // console.log(num);
    if (num == 3) break;
}
    // console.log(`Работа окочена, num = ${num}`);

//     --------------цикл не прерывается, а переходит к следующей итерации 
for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i == 3) continue;

//   console.log(i); // 1, затем 3, 5, 7, 9
}

//     --------------  метки  (Метка имеет вид идентификатора с двоеточием перед циклом
// Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец 
firstFor:for (let num = 0; num < 5; num++) { 
    for (let size = 0; size < 3; size++) {
        if (num == 3) {
            break firstFor;
        }
//   console.log(size); 
    
    }

}
//------------------ switch ------------------
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
}


// ----------   ФУНКЦИИ  ------------------
function calcSumm(numOne, numOTw) { 
    let numSumme = numOne + numOTw;
    return numSumme;
}
let funcRezult = calcSumm(1, 2);
// console.log(`Сумма: ${funcRezult}`);


// ----------   СТЕЛОЧНЫЕ ФУНКЦИИ  ------------------
//Вместо слова function после скобок ставим => , потом пишем тело функции как в этих скобках {}
// let getMesege = (text1, text2) => text1 + ',' + text2 + '!';
// console.log(getMesege('Привет', 'Вася'));

let getMesege = (text1, text2) => {
  let message = text1 + ',' + text2 + '!';
    return message;
}
// console.log(getMesege('Привет', 'Вася'));

//----------  планирование setTimeout и с ------------------------
//setTimeout - позволяет вызвать функцию один раз через определенный и тервал вемени
// setInterval - позволяет вызвать функци регулярно повторяя вызов через определеный итервал времени

function showMessege(text, name){
    console.log(`${text}, ${name}!`);
}
// setTimeout(showMessege, 3000, 'Привет','Вася');


function showMessege(text, name){
    console.log(`${text}, ${name}!`);
}
// setInterval(showMessege, 500, 'Привет','Вася');

//показывает отсчёт от 1 до ....
function  showNumber(num) {
console.log(num);
setTimeout(showNumber, 1000,++num);
}
// setTimeout(showNumber,1000,1)


//останавливает осчёт по id
function  showNumber(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000,++num);
if (num ===6){
    clearTimeout(timeId);
}    
}
// setTimeout(showNumber,1000,1)
    
  //функция соединения строк
function createMassage(text, name) {
    return `${text}, ${name}`;
}     
function showMassage(message) {
    console.log(message);
}    
function initMaseg(text,name) {
    showMassage(createMassage(text, name));
}
// initMaseg('Привет', 'Паша');


// ----------   ОБЬЕКТЫ  ------------------

const objj = {
    name: "Jhon",
    age: 25,
    isMarried: false,
};

// co nsole.log(objj.name);
// console.log(objj.age);
// console.log(objj["isMarried"]);

//Вычисляемое либо передаваемое имя
let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    [`${firstPart}`]: true,
}
// console.log(userInfo["likes"]);

//Вложенность
let userInfoo = {
    name: "Вася",
    age: 30,
address: {
city: "Tokio",
street: "Freedom",    
}
}
// console.log(userInfoo);
// console.log(userInfoo.address);
// console.log(userInfoo.address.city);

//добавить обьект
let userInfooo = {
    name: "Вася",
 }
// console.log(userInfooo);
userInfooo.age = 20;
// console.log(userInfooo);
userInfooo['like'] = true;
// console.log(userInfooo);
userInfooo.address = {
    city: "Tokio",
    street: "Freedom",    
};
// console.log(userInfooo.address.city);

//удалить  обьект
const objjj = {
    name: "Jhon",
    age: 25,
    "isMarried": false,
};
delete objjj.age;
// console.log(objjj);
delete objjj["isMarried"];
// console.log(objjj);

// Изменение свойств
let ob = {
    name: "Jhon",
    age: 25,
    "isMarried": false,
};
// console.log(ob);
ob.age = 18;
// console.log(ob);

// -------Копиование обьекта-----------
// При копировании обьекта в другую переменную сам обьект не будлируется, а копируется  толко ссылка на него
let oob = {
    name: "Jhon",
    age: 25,
    "isMarried": false,
};
// console.log(oob);
let userr = oob;
// console.log(userr);
userr.age = 5;
// console.log(userr);

// ------------Дублирование обьекта-----------
let oobb = {
    name: "Jhon",
    age: 25,
    "isMarried": false,
};
// console.log(oobb);

let users = Object.assign({}, oobb);

users.age = 12;
// console.log(users);

// ---------- Проверка сущесвования свойств-------------
//  Оператор in


let ooobb = {
    // name: "Jhon",
    age: 25,
    "isMarried": false,
};
// выдаст undefined если свойства name нет
// console.log(ooobb?.name);  
if("name" in ooobb){
// если есть свойство undefined, что-бы не перепутать
// console.log(ooobb.name); 
}

// ------------Цикл for..in---------------
//Используется для проверки всех свойств обьека
let ooobbb = {
    name: "Jhon",
    age: 31,
    address: {
        city: "Tokio",
        street: "Freedom",    
        }
};
for(let key in ooobbb){
    //ключи
    // console.log(key);
    //значение ключей
    // console.log(ooobbb[key]);
}

for(let key in ooobbb.address){
    //ключи
    // console.log(key);
    //значение ключей
    // console.log(ooobbb.address[key]);
}
 //---------Методы обьекта-----------
 let infoUserr = {
    name: "Jhon",
    age: 31,
    address: {
        city: "Tokio",
        street: "Freedom",    
    },

     sho(){
    // console.log(`${infoUserr.name},${infoUserr.age} лет. Адрес: г.${infoUserr.address.city}, ул.${infoUserr.address.street}`);
}
}
// infoUserr.sho();

// ------------ Использование this --------------------
let infoUser = {
    name: "Jhon",
    age: 31,
    address: {
        city: "Tokio",
        street: "Freedom",    
    },

     shoo(){
    // console.log(`${this.name},${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
}
}
infoUser.shoo();
// ------------ Функция - КОНСТРУКТОР --------------------
// Обычные функции. Но есть два правила:
// 1. Имя конструктора должно начинаться с большой буквы 
// 2. Функция - конструктор должна вызываться при помощи оператора "new". 

function UseInf(naame, agee) { 
    // this = {}; создаёт пустой обьект
    this.naame = naame;
    this.agee = agee;

}

// console.log(new UseInf('Вася', '25'));
// console.log(new UseInf('Лена', '31'));
// console.log(new UseInf('Петя', '15'));
// console.log(new UseInf('Саша', '14'));






// ----------  массив  (частный случай обьекта)----------------
 
let err = ['plum.png', 'ornge.jpg', '6', {}, []];
// console.log(err[0]);
// console.log(err[1]);
// console.log(err[2]);
// console.log(err[3]);
// console.log(err[4]);





















