/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function calc() {
  // ============ Calc ==========================
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio; // +++++++++++ запоминаем выбранные настройки пользователя  ++++++++

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = '1.2';
    localStorage.setItem('ratio', '1.2');
  } // делаем активными элементы которые совпадают с  localStorage


  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  } // initLocalSettings('#gender', 'calculating__choose-item_active');
  // initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');
  // для LocalStor


  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active'); //++++++++++++++++++++++++++++++++++++++++++++++++++++
  // общяя сумма каллорий

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '___';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  calcTotal(); // пол, физическая активность 
  // function getStaticInformation(parentSelector, activeClass) {
  // const elements = document.querySelectorAll(`${parentSelector} div`);
  // для LocalStor

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector); // удаляем баги нажатия на подложку

    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  } // getStaticInformation('#gender', 'calculating__choose-item_active');
  // getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
  // для LocalStor


  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active'); // инпут

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      // проверка ввода чисел (крассная рамка)
      if (input.value.match(/\D/g)) {
        input.style.border = '2px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;

        case 'weight':
          weight = +input.value;
          break;

        case 'age':
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function cards() {
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
    } // конвертация в гривеу


    changeToUAH() {
      this.price = this.price * this.transfer;
    } // вставляем html код с переменными на страницу


    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      } // подставляем все классы которые есть в div


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

  } // const div = new MenuCart();
  // div.render();


  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu').then(data => {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      new MenuCart(img, altimg, title, descr, price, '.menu__field .container').render();
    });
  }); //  Работаем без класса
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
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");





function forms(formSelector, modalTimerId) {
  // ================= ajax для формы (fetch) ==================
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
  };
  forms.forEach(item => {
    bindPostData(item);
  }); // привязка постинга

  function bindPostData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault(); // для надписи
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
            `; // form.append(statusMessege);
      // ставим спинер под формой

      form.insertAdjacentElement('afterend', statusMessege); // получаем данные из формы

      const formData = new FormData(form); //============================================
      // (для json файла) делаем из данных формы JSON файл
      // const object = {};
      // formData.forEach(function (value, key) {
      //     object[key] = value;
      // });
      // новый метод  вместо того что сверху(с массива в обьекс с обьекта в json)

      const json = JSON.stringify(Object.fromEntries(formData.entries())); // отправляем данные на json-server в db.json
      // postData('http://localhost:3000/requests',JSON.stringify(object))

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(data => {
        // data - то что возвращает сервер
        console.log(data); // вызываем модальное окно с ответом

        showThinksModal(message.success);
        statusMessege.remove(); // удаляем спинер
      }).catch(() => {
        // вызываем модальное окно с ответом
        showThinksModal(message.failure);
      }).finally(() => {
        form.reset(); // очищаем форму
      }); //===================================================
      // оповещение пользователя

      function showThinksModal(message) {
        // обращаемся к модальному окну
        const prevModalDialog = document.querySelector('.modal__dialog'); // скрываем  пердыдущее модальное окно   

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); // создаём новое модальное окно

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
    
            <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
           </div>
        `; // помещаем новое модальное окно на страниу

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
          //удаляем через 4 секунды thanksModal
          thanksModal.remove(); // показываем предыдущий контент

          prevModalDialog.classList.add('show');
          prevModalDialog.classList.remove('hide');
          (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
 // функция открытия модального окна

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide'); //    второй способ
  // modal.classList.toggle('show');
  // при открытии модального она запрещаем прокручивание основной страницы

  document.body.style.overflow = 'hidden'; // очистка таймера при открытии модального окна пользователем

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
} // функция закрытия модального окна


function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show'); // второй способ
  // modal.classList.toggle('show');
  // при закрытии модального она разрешаем прокручивание основной страницы

  document.body.style.overflow = '';
}

function modal(trigerSelector, modalSelector, modalTimerId) {
  //                        +++++++++++++++++++++ MODAL +++++++++++++++++++++++++
  const modalTrigger = document.querySelectorAll(trigerSelector),
        modal = document.querySelector(modalSelector); //  let modalCloseBtn = document.querySelector(trigerSelector);
  //при клике каждой кнопки (Связаться с нами) открывается модальное окно

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  }); //при нажатии на крестик модальное окно закрывается
  // modalCloseBtn.addEventListener('click',() => closeModal(modalSelector));
  // закрытие модального окна при нажатии на подложку

  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  }); // закрытие модального окна при нажатии на кнопку Esc

  document.addEventListener('keydown', event => {
    if (event.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  }); //           +++++++++++++ MODAL (открывается через определнно время на страницк) +++++++++++++++++++++++++
  //           +++++++++++++ MODAL (открывается когда пользователь долистал до конца страницы) ++++++++++++++
  // определяем что пользователь долистал до конца страницы

  function showModalByScrol() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId); // удаляем событие после первого показа модального окна

      window.removeEventListener('scroll', showModalByScrol);
    }
  }

  window.addEventListener('scroll', showModalByScrol);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function slider({
  container,
  slide,
  nextArrow,
  prewArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field
}) {
  // ======================  Slide-1 ===================
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
  const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        // для точек
  prev = document.querySelector(prewArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width; // console.log(width);      

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
  }); // ============ точки =================

  slider.style.position = 'relative'; // элемет для точек

  const indicators = document.createElement('ol'),
        //для активности точек
  dots = []; // стили для точек  

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
    `; // помещаем обёртку на страницу

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
        `; // ========= active dots ===============

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  } // функция для превращения строки в число и удаление в ней не чисел 
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
    } // для активности точек


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
    } // для активности точек


    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = '1';
  }); // =========== click dots ========

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
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
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //              ++++++++++++++++++++++ TABS ++++++++++++++++++++++++++
  let tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector); //====================================================================    
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

  function hidenTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }

  hidenTabContent();

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function timer(id, deadline) {
  //                        +++++++++++++++++++++ TIMER +++++++++++++++++++++++++
  // разница между deadline и текущим временем
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          // сколько в сутках миллисекунд
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          // часы 
    minutes = Math.floor(t / 1000 / 60 % 60),
          //минуты
    seconds = Math.floor(t / 1000 % 60); //секунды

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } // для отображения дней и часов с нулём впереди


  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  } // устанавливаем таймер на страницу


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

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; },
/* harmony export */   "getResource": function() { return /* binding */ getResource; }
/* harmony export */ });
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
}; // получаем данные для каточек из db.json


const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status:${res.status}`);
  }

  return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");










document.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer', '2021-08-11');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)('form', modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prewArrow: '.offer__slider-prev',
    totalCounter: '#total',
    slide: '.offer__slide',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  }); // ===== webpack ===== 
  // node -v
  // npm -v
  // npm init
  // webpack.config.js
  // npm install webpack webpack-cli --save-dev
  // npx webpack    
  //======== json-server ======
  // fetch('http://localhost:3000/menu')
  //     .then(data => data.json())
  //     .then(res => console.log(res));
  // для подключения json-server пишем в терминале - npx json-server --watch db.json
  // Resources
  // http://localhost:3000/menu
  // http://localhost:3000/requests
  //======== babel ======
  //npm install --save-dev @babel/core @babel/cli @babel/preset-env
  // npm install --save @babel/polyfill
  // npm i --save-dev babel-loader 
  // npm i --save-dev core-js 
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map