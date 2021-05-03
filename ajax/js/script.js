'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    // создам экземпляр класса запросса
    const request = new XMLHttpRequest();
   // собирает настройки для будующего запроса к серверу
    request.open('GET', 'js/current.json');
    // описываем информацию которую посылаем серверу(data-файл, json-файл)
   request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8')
    // отправляем запрос на сервер
    request.send();  // request.send(body) body в GET - нету в POST - есть(это данные с инпута) 
    // отслеживает статус нашего запросав текущий момент(0-4)
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так';
    //     }
                
    // });
//  ===================== ИЛИ =====================
request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
                
    });

    //status - 200, 400, 500...
   // statusText - ok, ...
   // respons - ответ от сервера
   //readyState - текущее состояние запроса - 0(обьект был создан),1(метод был вызван),2(метод был вызван),3(загрузка),4(операция полность юзавершина) 
 
});

