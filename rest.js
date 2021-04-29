'use strict'

// rest - делает массив из отдельных элеммнтов
const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage'); //basic rest [ 'operator', 'usage' ]

//===========================
function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(3);

