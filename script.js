// menu responsive code
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');


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


//games Listing slide top down
document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll('.game');

    function handleScroll() {
        games.forEach(game => {
            if (!game.classList.contains('show')) {
                const gameTop = game.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (gameTop < windowHeight - 100) {
                    game.classList.add('show');
                    console.log("Un élément devient visible :", game);
                }
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
});

console.log("Nombre de .game détectés :", document.querySelectorAll('.game').length);

