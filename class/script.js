'use strict';
 // class это крассивая обвёртка функций конструкторов

class Rectangle {
    constructor(heihht, width) {
        this.heihht = heihht;
        this.width = width;
    }

    calcArea() {
        return this.heihht * this.width;
    }
}

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);


console.log(square.calcArea());
console.log(long.calcArea());

//===========================
// Наледование классов


