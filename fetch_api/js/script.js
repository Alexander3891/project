'use strict';

// запускать на сервере 

//GET получае данные
 fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // (возвращается промис)получаем ответ в формате json и преобразуем его в обьект
    .then(json => console.log(json));
//POST добавляем данные
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Content-type': 'application/json'
}
})
    .then(response => response.json()) // (возвращается промис)получаем ответ в формате json и преобразуем его в обьект
    .then(json => console.log(json));





