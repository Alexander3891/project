'use strict';

// инкапсуляция - обьект хранит свои свойства и методы в приватном опрядке

// function User(name, age) {
//     this.name = name;
//     let userAge = age;


//     this.say = function () {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }


// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);

// ivan.name = 'Alex';
// ivan.say();

// ======================= Class ==============================

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Ivanov'; // приватное свойство 
    
    
    say() {
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }

}




const ivan = new User('Ivan', 27);
console.log(ivan.age); // get
ivan.age = 99; // set
console.log(ivan.age); // get

ivan.say();



  





 