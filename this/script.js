'use strict';

// const num = new Function(3);
// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan, alex);
ivan.hello();
//=================================
// Наследование
User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушёл.`);
};
const pety = new User('Pety', 22);
const fedy = new User('Fedy', 18);

console.log(pety, fedy);

fedy.exit();
ivan.exit();

// 1)=========================================
function showThis(a,b) {
    console.log(this);
    function sum() {
        console.log(this);
       return a + b;
    }
    console.log(sum());
}
showThis(4,5);
// 2)=========================
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }

};
// obj.sum();

// 3)========================

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    }

let ivann = new User('Ivann', 23);



//1) Обычная функция: this = windows, но если use strict - undefined
//2) Контекст(this) у методов обьектов это сам обьект
//3) this в конструкторах и классах это новый экземпляр обьекта
//4)




