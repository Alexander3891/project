"use strict";

// const now = new Date();
// new Date.parse('2021-04-01');

// console.log(now);
// ===========  Получать ===========
// console.log(now.getFullYear());// год
// console.log(now.getMonth());// месяц
// console.log(now.getDate());// дата
// console.log(now.getHours());// часы
// console.log(now.getUTCHours());// часы в UTC

// console.log(now.getMinutes());//минуты
// console.log(now.getSeconds());//секунды
// console.log(now.getMilliseconds());//милисекунды
// console.log(now.getDay());// номер дня недели (0 - Восскресенье) 

// console.log(now.getTimezoneOffset());// разница в минутах между обычными часами и часами UTC
// console.log(now.getTime());// колличество милисикунд с 1970
 // ============ установить дату===================
console.log(now.setHours(18,40)); // часы, минуты
console.log(now); // смотреть в браузере



// const noow = new Date(2020, 5 ,1 ,20);
// console.log(noow);

// const nnow = new Date(0); // в милисикундах
// console.log(nnow);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i + 3;
}
let end = new Date();
alert(`Цикл отработаз за ${end - start} миллисекунд`);
