'use strict';

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000    
        };
        //для ошибок
        // reject();
    
        resolve(product);
    },2000);  
});

req.then((product)=> {
    return  new Promise((resolve,reject)=> {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        },2000); 
    });
}).then(product => {  
      product.modify = true;
      return product;
}).then(product => {
    console.log(product);
}).catch(()=>{  // если что-то пошло не так
console.error ('Произошла ошибка');
}).finally(()=>{   //  можно очистить форму после отправки данных
   console.log('Finally'); 
});

// одновременное выполнение двух промисов
const test = time => {
    return new Promise(resolve => {
      setTimeout(() => resolve(),time)      
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
 
// Promise.all([test(1000), test(2000)]).then(() => {
    // console.log('All');
// });

// промис выполнится сразукогда выполнится первое действие
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});



