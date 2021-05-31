'use strict';

function timer(id, deadline) {
    //                        +++++++++++++++++++++ TIMER +++++++++++++++++++++++++

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


    setClock(id, deadline);
}

export default timer;