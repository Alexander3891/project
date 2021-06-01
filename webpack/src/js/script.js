// 'use strict';

//===============  webpack ================
// const myModule = require('./main');
// const myModuleInstanse = new myModule();

// myModuleInstanse.hello();
// myModuleInstanse.goodbye();

import {one,two} from './main.js';
console.log(`${one} and ${two}`);


import {one as first} from './main.js';// переименовываем
console.log(first);


import * as data from './main.js'; // єкспортировать всё
console.log(`${data.one} and  ${data.two}`);
//  data.sayHi();

// ЭКСПОРТ ПО УМОЛЧАНИЮ
import sayHi from './main.js';
 sayHi();

