 'use strict';


//              ++++++++++++++++++++++ TABS ++++++++++++++++++++++++++

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
    function hidenTabContent() {
        tabsContent.forEach(function (item) {
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
            
    //                        +++++++++++++++++++++ TIMER +++++++++++++++++++++++++

    const deadline = '2021-05-26 ';
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
    
    //                        +++++++++++++++++++++ MODAL +++++++++++++++++++++++++

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    //   modalCloseBtn = document.querySelector('[data-close]');
   
    // функция открытия модального окна
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //    второй способ
        // modal.classList.toggle('show');
        // при открытии модального она запрещаем прокручивание основной страницы
        document.body.style.overflow = 'hidden';
        // очистка таймера при открытии модального окна пользователем
        clearInterval(modalTimerId);
    }

    
    //при клике каждой кнопки (Связаться с нами) открывается модальное окно
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

     
    // функция закрытия модального окна
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // второй способ
        // modal.classList.toggle('show');

        // при закрытии модального она разрешаем прокручивание основной страницы
        document.body.style.overflow = '';
    }

    //при нажатии на крестик модальное окно закрывается
    // modalCloseBtn.addEventListener('click', closeModal);

    // закрытие модального окна при нажатии на подложку
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    // закрытие модального окна при нажатии на кнопку Esc
    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //           +++++++++++++ MODAL (открывается через определнно время на страницк) +++++++++++++++++++++++++

    const modalTimerId = setTimeout(openModal, 50000);

    //           +++++++++++++ MODAL (открывается когда пользователь долистал до конца страницы) ++++++++++++++

    // определяем что пользователь долистал до конца страницы
    function showModalByScrol() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            // удаляем событие после первого показа модального окна
            window.removeEventListener('scroll', showModalByScrol);
        }
    }
    window.addEventListener('scroll', showModalByScrol);

    // ================= Классы для карточек ==================
 
    class MenuCart {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
            this.classes = classes;
        }
        // конвертация в гривеу
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        // вставляем html код с переменными на страницу
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            // подставляем все классы которые есть в div
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }
    // const div = new MenuCart();
    // div.render();
    new MenuCart(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu__field .container',
        // 'menu__item',
        // 'big'
    ).render();
    
    new MenuCart(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        11,
        '.menu__field .container',
        'menu__item'
    ).render();
    new MenuCart(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15,
        '.menu__field .container',
        'menu__item'
    ).render();



    new MenuCart(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu__field .container',
        'menu__item'
    ).render();
    
    new MenuCart(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        11,
        '.menu__field .container',
        'menu__item'
    ).render();
    new MenuCart(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15,
        '.menu__field .container',
        'menu__item'
    ).render();

    // ================= ajax для формы (fetch) ==================

    const forms = document.querySelectorAll('form');
    
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });
    
    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // для надписи
            // const statusMessege = document.createElement('div');
            // statusMessege.classList.add('status');
            // statusMessege.textContent = message.loading;
            // form.append(statusMessege);

            // для спинера
            const statusMessege = document.createElement('img');
            statusMessege.src = message.loading;
            statusMessege.style.cssText = `
            display:block;
            margin: 0 auto;
            `;
            // form.append(statusMessege);
            // ставим спинер под формой
            form.insertAdjacentElement('afterend', statusMessege);

            // получаем данные из формы
            const formData = new FormData(form);

            //============================================

            // (для json файла) делаем из данных формы JSON файл
            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
 
            // отправляем данные на сервер
            fetch('server.php', {
                method: 'POST',
                // для json файла
                // headers: {
                //     'Content-type': 'appli cation/json'
                // },
                body: formData // для data
                // body:JSON.stringify(object) // для json файла 
            }).then(data => data.text()) // ответ от сервера в виде строки
              .then(data => {   // data - то что возвращает сервер
                console.log(data);
                // вызываем модальное окно с ответом
                showThinksModal(message.success);
                statusMessege.remove();// удаляем спинер

            }).catch(() => {
                // вызываем модальное окно с ответом
                showThinksModal(message.failure);
            }).finally(() => {
                form.reset(); // очищаем форму
            });
                
            //===================================================
     
            // оповещение пользователя
            function showThinksModal(message) {
                // обращаемся к модальному окну
                const prevModalDialog = document.querySelector('.modal__dialog');
                // скрываем  пердыдущее модальное окно   
                prevModalDialog.classList.add('hide');
                openModal();
        
                // создаём новое модальное окно
                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
    
            <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
           </div>
        `;
                // помещаем новое модальное окно на страниу
                document.querySelector('.modal').append(thanksModal);
                setTimeout(() => {
                    //удаляем через 4 секунды thanksModal
                    thanksModal.remove();
                    // показываем предыдущий контент
                    prevModalDialog.classList.add('show');
                    prevModalDialog.classList.remove('hide');
                    closeModal();
                }, 4000);
            }

        });
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

// для подключения json-server пишем в терминале - npx json-server --watch db.json
   // Resources
 // http://localhost:3000/menu
 // http://localhost:3000/requests
});