'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    // получаем значение
    get userAge() {
        return this.age;
    },

    // устанавливаем значение 
    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge);
persone.userAge = 30;
console.log(persone.userAge);













