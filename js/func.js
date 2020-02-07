/**
 * @version 0.0.1
 * @author "Eslam Mohamed"
 * @copyright "2020"
 */
//Scroll NavBar

var navBar = $('.navbar'),
    data = navBar.data();

 
var scrolling = false,
    scrolledPast = false;

 
function switchInto() {
    'use strict';
    scrolledPast = true;
   
   
    navBar.addClass(data.intocolor);
    navBar.addClass(data.intosize);
    console.log('into transition triggered!');
}


function switchStart() {
    'use strict';
    scrolledPast = false;
  
    
    navBar.removeClass(data.intocolor);
    navBar.removeClass(data.intosize);
    console.log('start transition triggered!');
}


$(window).scroll(function () {'use strict'; return scrolling = true; });

setInterval(function () {
    'use strict';
  
    if (scrolling) {
   
        scrolling = false;
    
        if ($(window).scrollTop() > 200) {
      
            if (!scrolledPast) {
                switchInto();
            }
        } else {
 
            if (scrolledPast) {
                switchStart();
            }
        }
    }
 
}, 100);


// AUTO SLIDE
$('.carousel').carousel({
    interval: 3000
  })

//Mobile NavBar

$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $(this).toggleClass("is-active");
      $('.items').toggleClass("active");
    });
  });
 
  // //Copyright
var copyright = document.getElementById('copy-date');

copyright.textContent = new Date().getFullYear();