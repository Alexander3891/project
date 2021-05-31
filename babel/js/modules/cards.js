'use strict';

import {getResource} from '../services/services';

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


}

export default cards;