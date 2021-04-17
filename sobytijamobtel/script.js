// "use strict";

// =============== События на мобильных устройствах==============
 // всего 6 событий
//-----------------------------------------------------------------
 // touchstart - срабатывает при косании к тому элементу
 // touchmove - когда палец двигается по элементу и при каждом движении срабатывает
 // touchend -  когда палец оторвался от элемента
 // touchenter - когда ведём пальцем по экрану и при этом наскальзываем на это событие
 // touchleave - когда палец скользит по нажатому элементу у ушшол за его границы
// touchcancel - если палец выйдет за пределы браузера то прекпащается работа с этим элементом

window.addEventListener('DOMContentLoaded', () => { 
    const box = document.querySelector('.box');
 
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        // console.log(e.touches );
        console.log(e.targetTouches );

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // console.log('Move');
        console.log(e.targetTouches[0].pageX);


});
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');

    });
    
});

// touches - выдат количество пальцев нажатых на сенсор
// targetTouches- количество пальцев которое взаимодействует именно с этим устройством
// changedTouches - список пальцев которые учавствуют в тукущемсобытии
// те пальцы которые уже совершили действие

//hammerjs.github.io   слайдеры
//========================