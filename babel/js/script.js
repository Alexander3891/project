'use strict';
      
       import tabs from './modules/tabs';
       import modal from './modules/modal';
       import timer from './modules/timer';
       import cards from './modules/cards';
       import calc from './modules/calc';
       import forms from './modules/forms';
       import slider from './modules/slider';
       import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() =>  openModal('.modal', modalTimerId), 50000);

       
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2021-08-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        slide: '.offer__slide',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',

    });

// node -v
// npm -v
// npm init
// webpack.config.js
// npm install webpack webpack-cli --save-dev
// npx webpack    


// fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

    // для подключения json-server пишем в терминале - npx json-server --watch db.json
    // Resources
    // http://localhost:3000/menu
    // http://localhost:3000/requests
});


 













