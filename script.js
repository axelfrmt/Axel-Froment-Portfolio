// menu responsive code
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');
var slideIndex = 1;


menu_toggle.onclick = function()
{
   menu_toggle.classList.toggle('active');
   menu.classList.toggle('responsive');
}

//site animation

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const p = document.querySelector('.left p')
const a = document.querySelector('.left a')
const img = document.querySelector('.image_bird')

window.addEventListener('load',()=>{
   
    const tl = gsap.timeline({paused: true});

    tl
    .staggerFrom(header , 2 , {y:-100 , opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(img , 1 , {x:1000 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(title_span, 1 , {opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(p, 1 , {opacity:0, ease: "power2.out"}, 0.2)
    .staggerFrom(a , 1 , {opacity:0, ease: "power2.out"}, 0.3);
    
    tl.play()
})

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) 
    {
        slideIndex = 1
    }
    
    if(n < 1)
    {
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


//portfolio page grid

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.querySelector('h3').style.opacity = '0';
        category.querySelector('p').style.opacity = '1';
    });

    category.addEventListener('mouseleave', () => {
        category.querySelector('h3').style.opacity = '1';
        category.querySelector('p').style.opacity = '0';
    });
});


//games Listing slide
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

