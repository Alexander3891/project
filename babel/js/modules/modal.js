'use strict';

 // функция открытия модального окна
 function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    //    второй способ
    // modal.classList.toggle('show');
    // при открытии модального она запрещаем прокручивание основной страницы
    document.body.style.overflow = 'hidden';
    // очистка таймера при открытии модального окна пользователем
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
}

// функция закрытия модального окна
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    // второй способ
    // modal.classList.toggle('show');

    // при закрытии модального она разрешаем прокручивание основной страницы
    document.body.style.overflow = '';
}



function modal(trigerSelector, modalSelector, modalTimerId) {
    //                        +++++++++++++++++++++ MODAL +++++++++++++++++++++++++

    const modalTrigger = document.querySelectorAll(trigerSelector),
        modal = document.querySelector(modalSelector);
    //  let modalCloseBtn = document.querySelector(trigerSelector);

   
 

    //при клике каждой кнопки (Связаться с нами) открывается модальное окно
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });


    

    //при нажатии на крестик модальное окно закрывается
    // modalCloseBtn.addEventListener('click',() => closeModal(modalSelector));

    // закрытие модального окна при нажатии на подложку
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    // закрытие модального окна при нажатии на кнопку Esc
    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
    //           +++++++++++++ MODAL (открывается через определнно время на страницк) +++++++++++++++++++++++++


    //           +++++++++++++ MODAL (открывается когда пользователь долистал до конца страницы) ++++++++++++++

    // определяем что пользователь долистал до конца страницы
    function showModalByScrol() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            // удаляем событие после первого показа модального окна
            window.removeEventListener('scroll', showModalByScrol);
        }
    }
    window.addEventListener('scroll', showModalByScrol);
}

export default modal;
export {closeModal};
export {openModal};
