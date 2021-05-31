'use strict';
import{closeModal, openModal} from './modal';
import {postData} from '../services/services';

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
    });



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
                openModal('.modal', modalTimerId);

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
                    closeModal('.modal');
                }, 4000);
            }

        });
    }
}

export default forms;