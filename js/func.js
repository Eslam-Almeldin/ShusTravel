/**
 * @version 0.0.1
 * @author "Eslam Mohamed"
 * @copyright "2020"
 */

//  LOADER
$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
        $('body').css('overflow-y', 'scroll');
    }, 3000);

});
//Scroll NavBar
let navBar = $('.navbar'),
    data = navBar.data();

let scrolling = false,
    scrolledPast = false;

switchInto = () => {
    'use strict';
    scrolledPast = true;
    navBar.addClass(data.intocolor);
    navBar.addClass(data.intosize);
}

switchStart = () => {
    'use strict';
    scrolledPast = false;
    navBar.removeClass(data.intocolor);
    navBar.removeClass(data.intosize);
}

window.onscroll = () => { 'use strict'; return scrolling = true; };

setInterval(() => {
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

$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $(this).toggleClass("is-active");
        $('.items').toggleClass("active");
    });
});

// //Copyright
let copyright = document.getElementById('copy-date');

copyright.textContent = new Date().getFullYear();