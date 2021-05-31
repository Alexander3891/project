'use strict';

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
//              ++++++++++++++++++++++ TABS ++++++++++++++++++++++++++
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
    
//====================================================================    
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

    tabsParent.addEventListener('click', (event) => {
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

export default tabs;