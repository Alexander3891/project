"use strict";
// npm i jquery --save
// npx webpack
import $ from 'jquery';

$(document).ready(function(){
     $('.list-item:first').hover(function(){
         $(this).toggleClass('active');
     });

     $('.list-item:eq(2)').on('click',function(){
             $('.image:even').slideToggle('slow');   
     });

     $('.list-item:eq(4)').on('click',function(){
          $('.image:odd').animate({
              opacity: 'toggle',
              height: 'toggle'
          },2000);
    });


});

// http://jquery.page2page.ru/index.php5/