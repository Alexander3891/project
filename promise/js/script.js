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
}).catch(()=>{
console.error ('Произошла ошибка');
}).finally(()=>{
   console.log('Finally'); 
});





