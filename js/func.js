
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


  // SLIDER SECTION

  const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; //to turn off the automatic slide make if false
const intervalTime = 5000; // 5s for every image slide
let slideInterval;

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if (current.nextElementSibling) {
        //Add current to Next sibling
        current.nextElementSibling.classList.add('current');
        } else {
            //Add current to Start
            slides[0].classList.add('current');
        }
    setTimeout(() => current.classList.remove('current'));
}


const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for prev slide
    if (current.previousElementSibling) {
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
        } else {
            //Add current to Last
            slides[slides.length - 1].classList.add('current');
        }
    setTimeout(() => current.classList.remove('current'));
}

// Button Events
next.addEventListener('click', e =>{
    nextSlide();
    if (auto) {
     clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
}
});

prev.addEventListener('click', e =>{
    prevSlide();
    if (auto) {
     clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
}
});


//Auto Slide
if(auto) {
    //Run next Slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

//Mobile NavBar

$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $(this).toggleClass("is-active");
      $('.items').toggleClass("active");
    });
  });

  // //Copyright
// var copyright = document.getElementById('copy-date');

// copyright.textContent = new Date().getFullYear();