
'use strict';

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


    // const tabcontent = document.querySelectorAll('.tabcontent'),
    //       tabheaderItem = document.querySelector('.tabheader__item'),
    //       tabheaderItemAll = document.querySelectorAll('.tabheader__item');


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

});
   