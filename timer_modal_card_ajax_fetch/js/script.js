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

    // получаем данные для каточек из db.json
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
        return await res.json();
    };
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCart(img, altimg, title, descr, price, '.menu__field .container').render();
            });
        });

    //  Работаем без класса
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const element = document.createElement('div');
    //          price = price * 27;  // usd
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //                 <img src=${img} alt=${altimg}>
    //                 <h3 class="menu__item-subtitle">${title}</h3>
    //                 <div class="menu__item-descr">${descr}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //                 </div>
    //         `;
    //         document.querySelector('.menu__field .container').append(element);
    //     });
    // }


    //===============  axios ===================
    // axios.get('http://localhost:3000/menu')
    //      .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCart(img, altimg, title, descr, price, '.menu__field .container').render();
    //         });
    //     });
    // new MenuCart(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     15,
    //     '.menu__field .container',
    //     'menu__item'
    // ).render();




    // ================= ajax для формы (fetch) ==================

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });
    // отправляем данные из формы на сервер
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            // для json файла
            headers: {
                'Content-type': 'application/json'
            },
            body: data // для json файла
        });
        return await res.json();
    };


    // привязка постинга
    function bindPostData(form) {
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
            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // новый метод  вместо того что сверху(с массива в обьекс с обьекта в json)
            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            // отправляем данные на json-server в db.json
            // postData('http://localhost:3000/requests',JSON.stringify(object))
            postData('http://localhost:3000/requests', json)
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

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

    // для подключения json-server пишем в терминале - npx json-server --watch db.json
    // Resources
    // http://localhost:3000/menu
    // http://localhost:3000/requests


    // // ======================  Slide-1 ===================

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');


    // let slideIndex = 1;

    // showSlides(slideIndex);
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }



    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }


    // }

    // function plussSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plussSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plussSlides(1);
    // });

    // ======================  Slide-2 ===================

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),// для точек
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    // console.log(width);      
    
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '1s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    
    // ============ точки =================
    slider.style.position = 'relative';
    // элемет для точек
    const indicators = document.createElement('ol'),
        //для активности точек
        dots = [];
    // стили для точек  
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
// помещаем обёртку на страницу
    slider.append(indicators);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
    flex: 0 1 auto;
    width: 40px;
    height: 4px;
    margin-right: 10px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
        `;
// ========= active dots ===============
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    
    // функция для превращения строки в число и удаление в ней не чисел 
    // function deleteNotDigits(str){
        //  return +str.replace(/\D/g, '') 
    // }


    next.addEventListener('click', () => {
        // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

    slidesField.style.transform = `translateX(-${offset}px)`;
if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
            
        }
        // для активности точек
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';  

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
            
        }
        // для активности точек
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';  

    });
    // =========== click dots ========
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo; 
            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
        
            if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
            
        }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = '1';  
     

         });
    });


});



















