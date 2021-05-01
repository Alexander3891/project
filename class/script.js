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
// ColorRectangleWithText наследуется от Rectangl
class ColorRectangleWithText extends Rectangle {
    constructor(heihht, width, text, bgColor) {
        super(heihht, width); // вызывает то что есть у родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);

    }
}

const div = new ColorRectangleWithText(25, 10, 'Hello', 'red');


div.showMyProps();
console.log(div.calcArea());


