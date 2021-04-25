
'use strict';


//                                               ++++++++++++++++++++++ TABS ++++++++++++++++++++++++++

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

// // скрываем все не нужные табы
//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');

//         });
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }
//  //  показывает нужный таб
//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');

//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                      hideTabContent();
//                     showTabContent(i);
//                     console.log(target);
//                     console.log(item);
//                     console.log(i);


                
//                 }
//             });
//         }
//     });

//=========================================================================================================


    // 
     function  hidenTabContent() {
        tabsContent.forEach(function(item) {
             item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
         tabs.forEach(function (item) {
             item.classList.remove('tabheader__item_active');
         });
     }
    hidenTabContent();

     
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
   
        
    tabs[i].classList.add('tabheader__item_active');

    }
    showTabContent();
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                      hidenTabContent();
                    showTabContent(i);
                    
                    console.log(target);
                    console.log(item);
                    console.log(i);
                }
            });
        }
     });

    tabs.forEach((item, i) => {
                    
        console.log(item);
        console.log(i);
    });
            
//                                                      +++++++++++++++++++++ TIMER +++++++++++++++++++++++++

    const deadline = '2021-04-26 ';
// разница между deadline и текущим временем
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),  // сколько в сутках миллисекунд
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), // часы 
              minutes = Math.floor((t / 1000 / 60) % 60), //минуты
              seconds = Math.floor((t / 1000) % 60); //секунды
    
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
// для отображения дней и часов с нулём впереди
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }



    // устанавливаем таймер на страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock(); // чтобы отсчёт начинался сразу 

// обнавляет таймер каждую секунду
    function updateClock() {
        const t = getTimeRemaining(endtime); //  заисывается обьект с return

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
 
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

 
    setClock('.timer', deadline); 
    
    
});
   





























